# 新增控制器

[[toc]]

## 签名

::: tip 简短描述
signature()为签名函数，用于请求免费二维码的签名，二维码都是从粉丝万岁平台请求而来</br>
这里不再进行详细描述
:::

**签名方法.**

> 用于请求二维码签名

```php
    /**
     * 获取签名
     * @param $app_secret
     * @return string
     * @author: iszmxw <mail@54zm.com>
     * @Date：2019/11/14 9:20
     */
    public static function signature($app_secret)
    {
        $array = [
            time(),     // 时间戳
            'jdx',      // 随机字符串
            $app_secret // app_secret
        ];
        sort($array, SORT_STRING);
        $str = implode($array);
        return md5($str);
    }
```

## 获取二维码

::: tip 简短描述
getQrcode()方法为获取免费公众号二维码
:::

**获取二维码方法.**

> 用于请求获取二维码

```php
    /**
     * 获取二维码
     * @param $ip
     * @param $auth_open_id
     * @param $nickname
     * @param $sex
     * @return mixed
     * @author: iszmxw <mail@54zm.com>
     * @Date：2019/11/14 11:17
     */
    public static function getQrcode($ip, $auth_open_id, $nickname, $sex)
    {
        $config     = config('FSWS');// 获取配置参数
        $appid      = $config['APPID'];
        $app_secret = $config['APP_SECRET'];
        $url        = $config['URL'];
        $key        = $config['KEY'];
        $signature  = self::signature($app_secret);
        $data       = [
            'key'           => $key,
            'develop_appid' => $appid,
            'timestamp'     => time(),
            'nonce'         => 'jdx',
            'signature'     => $signature,
            'auth_open_id'  => $auth_open_id,
            'nickname'      => $nickname,
            'sex'           => $sex,
            'ip'            => $ip,
        ];
        $res        = httpRequest($url, 'POST', $data);
        return $res;
    }
```

## 免费模式用户授权获取用户基本信息

::: tip 简短描述
getCodeUrl()</br>
中间跳转获取CODE，需要用到code换取用户的信息，来创建订单，</br>
这个和原有的授权信息不一样，需要获取详细信息，比如昵称，性别，等所有才重写了</br>
:::

**免费模式用户授权获取用户基本信息.**

> 免费模式用户授权获取用户基本信息

```php
    /**
     * 中间跳转获取CODE，需要用到code换取用户的信息，来创建订单
     * @param Request $request
     * @author: iszmxw <mail@54zm.com>
     * @Date：2019/11/14 13:52
     */
    public function getCodeUrl(Request $request)
    {
        $number                  = $request->get('number');
        $index                   = $request->get('index');
        $redirectUrl             = "http://{$_SERVER['HTTP_HOST']}/index.php/api/FreeMode/CreateOrder?number={$number}&index={$index}"; // 请求第三方公众号二维码，创建免费订单地址
        $urlObj["appid"]         = config('APPID');
        $urlObj["redirect_uri"]  = "$redirectUrl";
        $urlObj["response_type"] = "code";
        $urlObj["scope"]         = "snsapi_userinfo";
        $urlObj["state"]         = "STATE" . "#wechat_redirect";
        $bizString               = $this->ToUrlParams($urlObj);
        $url                     = "https://open.weixin.qq.com/connect/oauth2/authorize?" . $bizString;
        Header("Location: $url"); // 跳转到微信授权页面 需要用户确认登录的页面
        exit();
    }
```

## 创建免费订单方法

::: tip 简短描述
getQrcode()方法为创建免费模式订单，请求到二维码信息后就可以为免费设备进行订单记录
:::

**创建订单方法.**

> 用于创建免费模式订单

```php
    /**
     * 创建免费订单
     * @param Request $request
     * @return array
     * @author: iszmxw <mail@54zm.com>
     * @Date：2019/11/14 14:55
     */
    public function CreateOrder(Request $request)
    {
        $ip                   = $request->ip();
        $param                = $request->param();
        $code                 = $param['code'];
        $number               = $param['number'];
        $index                = $param['index'];
        $urlObj["appid"]      = config('appid');
        $urlObj["secret"]     = config('secret');
        $urlObj["code"]       = $code;
        $urlObj["grant_type"] = "authorization_code";
        $bizString            = $this->ToUrlParams($urlObj);
        $url                  = "https://api.weixin.qq.com/sns/oauth2/access_token?" . $bizString;
        $data                 = httpRequest($url, 'POST');// 获取网页授权access_token和用户openid
        $data                 = json_decode($data, true);
        $user_info_url        = "https://api.weixin.qq.com/sns/userinfo?access_token={$data['access_token']}&openid={$data['openid']}&lang=zh_CN";
        $user_info            = httpRequest($user_info_url, 'GET');// 获取微信用户信息
        $user_info            = json_decode($user_info, true);// 获取微信用户信息
        if ($user_info['errcode']) { // 获取用户信息失败，返回错误信息
            // 或者重新进入获取免费二维码流程
            $url = "http://{$_SERVER['HTTP_HOST']}/index.php/api/FreeMode/getCodeUrl?number={$number}&index={$index}";
            Header("Location: $url");
            exit();
        } else {
            $openid   = $user_info['openid'];
            $nickname = $user_info['nickname'];
            $sex      = $user_info['sex'];
            $head_pic = $user_info['headimgurl'];
            // 获取二维码前首先检查用户，是否已经有免费的订单了，有的话，直接查询历史订单并且返回该订单信息
            $order_res = M("power_order_free")->where(['openid' => $openid])->order('id', 'desc')->find();
            if (time() < ($order_res['create_time'] + ($order_res['time'] * 60))) {
                // 用户还未使用该密码，可以更新设备密码
                if ($order_res['pay_status'] == 1) {
                    // 如果订单还在可使用状态下，那么可以继续获取密码
                    $charge_param['key']    = 1;        // 设置密码第一位
                    $charge_param['number'] = $number;  // 设置密码第一位
                    $chargeLogic            = new ChargeLogic();
                    $password               = $chargeLogic->getChargeCode($charge_param);
                    $order_res['password']  = $password; // 更新密码
                    $res                    = M("power_order_free")->update($order_res);
                    if ($res) {
                        // 创建成功，跳转前端显示视图，前端获取二维码信息
                        self::RedirectFreeQrCode($openid, $number);
                    } else {
                        die("网络错误！！");
                    }
                }
            }
            $QrCode = self::getQrcode($ip, $openid, $nickname, $sex); // 获取微信二维码
            $QrCode = json_decode($QrCode, true);
            if ($QrCode['code'] === 20000) {
                // 获取二维码成功，给用户下免费订单
                // 创建唯一订单号
                $order_sn = 'QR' . date('Ymd') . substr(implode(NULL, array_map('ord', str_split(substr(uniqid(), 7, 13), 1))), 0, 8) . rand(10000, 99000);
                // 如果订单还在可使用状态下，那么可以继续获取密码
                $charge_param['key']    = 1;        // 设置密码第一位
                $charge_param['number'] = $number;  // 设置密码第一位
                $chargeLogic            = new ChargeLogic();
                $password               = $chargeLogic->getChargeCode($charge_param);
                $order                  = [ // 收集订单信息
                    'order_sn'    => $order_sn,
                    'openid'      => $openid,
                    'nickname'    => $nickname,
                    'head_pic'    => $head_pic,
                    'ip'          => $ip,
                    'appid'       => $QrCode['data']['appid'],
                    'appname'     => $QrCode['data']['appname'],
                    'qrcode_url'  => $QrCode['data']['qrcode_url'],
                    'code'        => $QrCode['data']['code'],
                    'number'      => $number,
                    'price'       => $QrCode['data']['bidding'] / 100,
                    'pay_price'   => $QrCode['data']['bidding'] / 100,
                    'time'        => 60, // 单位为分钟
                    'key'         => $charge_param['key'],
                    'password'    => $password,
                    'create_time' => time(),
                    'pay_status'  => 1,
                ];
                $order_res              = M("power_order_free")->add($order);
                if ($order_res) {
                    // 创建成功，跳转前端显示视图，前端获取二维码信息
                    self::RedirectFreeQrCode($openid, $number);
                } else {
                    die("网络错误！！");
                }
            } else {
                // 没有请求到二维码，获取二维码失败，返回默认页面
                // 这里处理为，走默认的扫码支付模式
                $url = "http://{$_SERVER['HTTP_HOST']}/index.php/api/Login/ChargeMode?number={$number}&index={$index}";
                Header("location:" . $url); // 前往收费模式地址
                die;
            }
        }
    }
```

## 跳转到免费关注二维码页面

::: tip 简短描述
RedirectFreeQrCode()</br>
跳转到免费关注二维码页面
:::

**跳转到免费关注二维码页面.**

> 跳转到免费关注二维码页面

```php
    /**
     * 跳转到免费关注二维码页面
     * @param $openid
     * @param $number
     * @author: iszmxw <mail@54zm.com>
     * @Date：2019/11/14 17:21
     */
    public static function RedirectFreeQrCode($openid, $number)
    {
        $url = "http://{$_SERVER['HTTP_HOST']}/dist/index.html#/free_qr_code?openid={$openid}&number={$number}";
        Header("location:" . $url);
        die;
    }
```

## H5相关接口==>获取订单中的公众号二维码

::: tip 简短描述
getFreeQrCode()</br>
获取订单中的公众号二维码
:::

**获取订单中的公众号二维码.**

> 获取订单中的公众号二维码

```php
    /**
     * 获取订单中的公众号二维码
     * @param Request $request
     * @return array|\think\response\Json
     * @author: iszmxw <mail@54zm.com>
     * @Date：2019/11/14 17:47
     */
    public function getFreeQrCode(Request $request)
    {
        $openid = $request->post('openid');
        $number = $request->post('number');
        if (empty($openid)) {
            return returnBad("请传入openid", 500);
        }
        if (empty($number)) {
            return returnBad("请传入设备编号", 500);
        }
        $where = ['openid' => $openid, 'number' => $number];
        $order = M('power_order_free')->where($where)->order('id', 'desc')->find();
        if ($order) {
            return returnOk(['qrcode_url' => $order['qrcode_url'], 'code' => $order['code']]);
        } else {
            return returnBad("数据不存在，请您重新扫描设备", 500);
        }
    }
```

## H5相关接口==>获取充电订单信息中转链接

::: tip 简短描述
getFreeQrCode()</br>
获取充电订单信息，此链接，用户点击后，会授权获取用户信息，</br>
然后直接根据用户信息获取免费模式订单最新的一条信息给到用户.
:::

**获取订单中的公众号二维码.**

> 获取订单中的公众号二维码

```php
    /**
     * 获取订单中的公众号二维码
     * @param Request $request
     * @return array|\think\response\Json
     * @author: iszmxw <mail@54zm.com>
     * @Date：2019/11/14 17:47
     */
    public function getFreeQrCode(Request $request)
    {
        $openid = $request->post('openid');
        $number = $request->post('number');
        if (empty($openid)) {
            return returnBad("请传入openid", 500);
        }
        if (empty($number)) {
            return returnBad("请传入设备编号", 500);
        }
        $where = ['openid' => $openid, 'number' => $number];
        $order = M('power_order_free')->where($where)->order('id', 'desc')->find();
        if ($order) {
            return returnOk(['qrcode_url' => $order['qrcode_url'], 'code' => $order['code']]);
        } else {
            return returnBad("数据不存在，请您重新扫描设备", 500);
        }
    }
```

## H5相关接口==>获取密码

::: tip 简短描述
password()</br>
获取密码，直接通过openid获取充电密码</br>
然后直接根据用户openid获取免费模式订单最新的一条密码信息给到用户.
:::

**获取密码.**

> 获取密码

```php
    /**
     * 获取密码
     * @param Request $request
     * @return \think\response\View
     * @author: iszmxw <mail@54zm.com>
     * @Date：2019/11/14 18:16
     */
    public function password(Request $request)
    {
        $param  = $request->param();
        $openid = $param['openid'];
        if ($openid) {
            $order = M("power_order_free")->where(['openid' => $openid])->order('id', 'desc')->find();
            if (is_null($order['pay_time'])) {
                $data['pay_status'] = 2;
                $data['pay_time']   = time();
                $re                 = M("power_order_free")->where(['id' => $order['id']])->update($data);
                if ($re) {
                    // 处理分润
                    self::Divided($order);
                }
            }
            return json(['code' => 200, 'msg' => '密码获取成功', 'data' => ['number' => $order['password']]]);
        } else {
            return json(['code' => 500, 'msg' => '获取密码失败，请传入openid']);
        }
    }
```

## 分润函数

::: tip 简短描述
Divided()</br>
分润函数，此函数仅仅针对免费模式的分润</br>
该函数的分润模式是从原有的扫码支付分润搬运过来，</br>
唯一不同的有两点：</br>
一就是新怎了openid这个字段，主要用于代替记录pay_user_id的作用</br>
二就是免费的分润模式调用的设备独有的分润百分比字段</br>
:::

**免费订单列表.**

> 免费订单列表

```php
    /**
     * 分润函数,该分润方法转自原有的分润方法
     * 控制器目录位置application->api->controller->Weixin.php
     * 函数位置   power_notify（）方法里面
     * 大约410行位置开始
     * 这里修改了添加日志的方法，修改了sd_shou_log表的字段，
     * 添加了openid字段，代替原有的pay_user_id字段的含义，但原有的pay_user_id字段还是并存的
     * @param $order
     * @author: iszmxw <mail@54zm.com>
     * @Date：2019/11/18 16:49
     */
    public static function Divided($order)
    {
        /*******************************************分润处理开始*********************************************************/
        // 酒店分润处理查找分润
        // 查找设备绑定的酒店和分销商
        $order_sn            = $order['order_sn'];
        $money               = $order['pay_price']; // 订单金额
        $number              = $order['number'];    // 设备编号
        $lc_equipment_number = M("lc_equipment_number")->where(['number' => $order['number']])->field("j_user_id,f_user_id")->find();
        // 查找酒店的分润比例
        // 这里进行替换，因为是免费的模式，所以免费模式查询设备免费的相关分润百分比
//        $hotel     = M('lc_apply')->where(['user_id' => $lc_equipment_number['j_user_id']])->value("one_level");
        $hotel = M('lc_device_rate')->where(['number' => $number])->value('rate');
        // 公共可分润比例
        $subcommission = M("lc_subcommission")->where(['id' => 1])->value("agent");
        $subcommission = intval($subcommission);
        $hotel         = intval($hotel);
        if ($hotel > 0) {
            $hotel_bl = number_format($hotel / 100, 2);//酒店可得分润比例
            $j_money  = number_format($money * $hotel_bl, 2);//酒店可获得分润金额
            if ($j_money > 0) {
                M("users")->where(['user_id' => $lc_equipment_number['j_user_id']])->setInc('user_money', $j_money);//往酒店人员零钱添加分润金额
                // 添加分润记录
                // 添加分润记录(收入记录)
                $pay_user_id = M("users")->where(['openid' => $order['openid']])->value('id');
                // 未注册的用户可能没有pay_user_id，一般免单的新用户都是没有的
                $array = ['user_id' => $lc_equipment_number['j_user_id'], 'money' => $money, 'allf_money' => $j_money, 'pay_user_id' => $pay_user_id, 'openid' => $order['openid'], 'time' => time(), 'type' => 1, 'order_sn' => $order_sn, 'subcommission' => $hotel, 'number' => $number];
                M("shou_log")->add($array);
            }
        }

        // 分销商比例分成
        // 1.查找身份
        $f_level            = M("users")->where(['user_id' => $lc_equipment_number['f_user_id']])->field('level')->find();
        $f_level['agent_f'] = M("lc_apply")->where(['user_id' => $lc_equipment_number['f_user_id']])->value("one_level");
        if ($f_level['level'] == 5) {// 是总代理
            // 2,查看是否用的是公共分润比例
            $f_bili = intval($f_level['agent_f']);
            if ($f_bili > 0) {// 是,得到最终比例（总-酒店=代理）
                $result_bili = $f_bili - $hotel;
            } else {// 否
                $result_bili = $subcommission - $hotel;
            }
            if ($result_bili > 0) {
                $total_bl = number_format($result_bili / 100, 2);//总代理可得分润比例
                $z_money  = number_format($money * $total_bl, 2);//总代理可获得分润金额
                if ($z_money > 0) {
                    M("users")->where(['user_id' => $lc_equipment_number['f_user_id']])->setInc('user_money', $z_money);//往总代理零钱添加分润金额
                    // 添加分润记录(收入记录)
                    $array = ['user_id' => $lc_equipment_number['f_user_id'], 'money' => $money, 'allf_money' => $z_money, 'openid' => $order['openid'], 'time' => time(), 'type' => 3, 'order_sn' => $order_sn, 'subcommission' => $result_bili, 'number' => $number];
                    M("shou_log")->add($array);

                }
            }
        } else {// 不是总代理身份
            // 查找分销商分成比例
            $f_fcbili = M('lc_apply')->where(['user_id' => $lc_equipment_number['f_user_id']])->value("one_level");
            // 可分成 = 自己所有-分配给酒店
            $f_fcbilis = intval($f_fcbili) - $hotel;
            if ($f_fcbilis > 0) {
                $f_fcbiliv = number_format($f_fcbilis / 100, 2);//分销商可得分润比例
                $f_money   = number_format($money * $f_fcbiliv, 2);//分销商可获得分润金额
                if ($f_money > 0) {
                    M("users")->where(['user_id' => $lc_equipment_number['f_user_id']])->setInc('user_money', $f_money);//往分代人员零钱添加分润金额
                    //添加分润记录
                    //添加分润记录(收入记录)
                    $array = ['user_id' => $lc_equipment_number['f_user_id'], 'money' => $money, 'allf_money' => $f_money, 'openid' => $order['openid'], 'time' => time(), 'type' => 2, 'order_sn' => $order_sn, 'subcommission' => $f_fcbilis, 'number' => $number];
                    M("shou_log")->add($array);
                }
            }

            // 查找上级总代理
            $entry_uid = M('lc_apply')->where(['user_id' => $lc_equipment_number['f_user_id']])->value("entry_uid");
            if ($entry_uid) {
                $one_level          = M("lc_apply")->where(['user_id' => $entry_uid])->value('one_level');
                $f_level['agent_f'] = $one_level;
                $f_bili             = intval($f_level['agent_f']);
                if ($f_bili > 0) {//是,得到最终比例（总-分销商=自己）
                    $result_bili = $f_bili - $f_fcbili;
                } else {//否
                    $result_bili = $subcommission - $f_fcbili;
                }

                if ($result_bili > 0) {
                    $total_bl = number_format($result_bili / 100, 2);//总代理可得分润比例
                    $z_money  = number_format($money * $total_bl, 2);//总代理可获得分润金额
                    if ($z_money > 0) {
                        M("users")->where(['user_id' => $entry_uid])->setInc('user_money', $z_money);//往总代理零钱添加分润金额
                        //添加分润记录(收入记录)
                        $array = ['user_id' => $entry_uid, 'money' => $money, 'allf_money' => $z_money, 'openid' => $order['openid'], 'time' => time(), 'type' => 3, 'order_sn' => $order_sn, 'subcommission' => $result_bili, 'number' => $number];
                        M("shou_log")->add($array);
                    }
                }
            }
        }
        /*******************************************分润处理结束*********************************************************/
    }
```
