# 签名

[[toc]]

## 原有的设备二维码入口

::: tip 入口地址
 index.php/api/login/index?index=0&number=JDX19A007984
:::

**原有的index方法变更为以下：**

> 原有入口收费模式（扫码支付获取充电密码）都在index里面<br/>
> 我将其分离了出来，将原有的收费模式分为ChargeMode()方法，位置大约在105行<br/>
> 访问路径：index.php/api/login/ChargeMode?index=0&number=JDX19A007984<br/>
> 然后就是新增的免费模式<br/>
> 免费模式的入口为：index.php/api/FreeMode/getCodeUrl?index=0&number=JDX19A007984<br/>
> 免费模式的单独新建了一个控制器名称为FreeMode，位置也在api模块中<br/>
``` php
    /**
     * 设备二维码扫码唯一入口
     * @param string $code
     * @param string $pid
     * @return array
     * @author: iszmxw <mail@54zm.com>
     * @Date：2019/11/16 14:22
     */
    public function index($code = '', $pid = '')
    {
        $code   = $_GET['code'];
        $number = input('number');
        $index  = input('index/d', 1);

        // 检测设备的收费模式
        if ($number) {
            $equipment = M('lc_equipment_number')->where(['number' => $number, 'status' => 1])->find();
            if (empty($equipment)) {
                $weixin   = new Weixin();
                $openid   = $weixin->GetOpenid($code, $pid);
                $userinfo = M('users')->where((['openid' => $openid]))->find();
                if ($userinfo['level'] < 4) {
                    return returnBad("设备未激活绑定!!", 302);
                }
                $url = "http://{$_SERVER['HTTP_HOST']}/dist/index.html#/bdshebei?index=1&number={$number}&openid={$openid}&level={$userinfo['level']}";
                Header("location:" . $url); // 前往绑定设备的地址
                die;
            }

            // 判断设备的收费模式
            // mode_type==0：为默认的支付充电模式
            // mode_type==1：为扫码关注公众号推送设备充电密码链接模式

            // 默认收费模式
            if ($equipment['mode_type'] == 0) {
                // 走默认的扫码支付模式
                $url = "http://{$_SERVER['HTTP_HOST']}/index.php/api/Login/ChargeMode?number={$number}&index={$index}";
                Header("location:" . $url); // 前往收费模式地址
                die;
            }

            // 免费设备模式
            if ($equipment['mode_type'] == 1) {
                // 请求第三方平台二维码开始，走免费模式
                $url = "http://{$_SERVER['HTTP_HOST']}/index.php/api/FreeMode/getCodeUrl?number={$number}&index={$index}";
                Header("location:" . $url); // 前往免费扫码关注模式地址
                die;
            }
        } else {
//            return returnBad("缺少重要参数，设备编码未传输!!", 302);
            // 默认走收费模式，不然页面没有传输设备编号，不能登录页面
            $url = "http://{$_SERVER['HTTP_HOST']}/index.php/api/Login/ChargeMode?number={$number}&index={$index}";
            Header("location:" . $url); // 前往收费模式地址
            die;
        }

    }
```

**收费模式代码移为如下：**

``` php

    /**
     * 收费模式
     * @param string $code
     * @param string $pid
     * @param string $index
     * @return array
     * @author: iszmxw <mail@54zm.com>
     * @Date：2019/11/16 14:31
     */
    public function ChargeMode($code = '', $pid = '', $index = '')
    {
        $code   = $_GET['code'];
        $number = input('number');
        $index  = input('index/d', 1);
        $weixin = new Weixin();
        $openid = $weixin->GetOpenid($code, $pid);
        if ($openid) {
            // 获取access_token
            $access_token = $weixin->get_access_token();
            if ($access_token) {
                $subscribe_msg = "https://api.weixin.qq.com/cgi-bin/user/info?access_token={$access_token}&openid={$openid}";
                $subscribe     = json_decode($weixin->httpGet($subscribe_msg));
                $zyxx          = $subscribe->subscribe;
                // 首先用户必须关注系统唯一公众号，注册成为会员
                if ($zyxx != 1) {
                    $url = 'http://' . $_SERVER['HTTP_HOST'] . '/dist/index.html#/nologin';
                    Header("location:" . $url);
                    die;
                }
            }
            // 获取会员信息
            $userinfo = M('users')->where((['openid' => $openid]))->find();
            $url      = "http://{$_SERVER['HTTP_HOST']}/dist/index.html#/saoma?index={$index}&number={$number}&openid={$openid}";
            if ($number) {
                // 判断是否有在充电
                $user_id = M("users")->where(['openid' => $openid])->value("user_id");
                $order   = M("power_order")->where("user_id=$user_id AND pay_status=2")->field("pay_time,time,key,order_sn,t_id,password")->order("pay_time desc")->find();
                if ($order) {
                    $time = $order['pay_time'] + ($order['time'] * 60);
                    $ts   = time();
                    if ($ts < $time) {
                        $url = 'http://' . $_SERVER['HTTP_HOST'] . '/dist/index.html#/duihuan?index=1&number=' . $number . '&openid=' . $openid . '&key=' . $order['key'] . '&order_sn=' . $order['order_sn'] . '&id=' . $order['t_id'] . '&password=' . $order['password'];
                    } else {
                        $url = 'http://' . $_SERVER['HTTP_HOST'] . '/dist/index.html#/taocan?index=1&number=' . $number . '&openid=' . $openid;
                    }
                } else {
                    $url = 'http://' . $_SERVER['HTTP_HOST'] . '/dist/index.html#/taocan?index=1&number=' . $number . '&openid=' . $openid;
                }
            }

            if ($userinfo) {
                Header("location:" . $url);
                die;
            } else {
                $data        = $weixin->get_user_data($code);
                $green_power = M("lc_subcommission")->where(['id' => 1])->value("power");
                M('users')->insert([
                    'head_pic'      => $data['headimgurl'],
                    'nickname'      => $data['nickname'],
                    'token'         => $data['access_token'],
                    'token_express' => $data['token_express'],
                    'openid'        => $data['openid'],
                    'province'      => $data['province'],
                    'city'          => $data['city'],
                    'sex'           => $data['sex'],
                    'subscribe'     => $data['subscribe'],
                    'oauth_child'   => 'mp',
                    'user_no'       => getUserNo(),
                    'reg_time'      => time(),
                    'green_power'   => $green_power
                ]);
                Header("location:" . $url . "");
                die;
            }
        } else {
            return returnBad('请求openid失败', 302);
        }
    }

```
