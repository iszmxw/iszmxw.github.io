# 后台调整

## 设备模式修改

::: tip 功能描述
设备模式修改在设备列表页面进行修改，修改为免费模式可以设置免费模式的分润百分比，

:::

**页面位置**
> application\admin\view\subcommission\code_list.html</br>
> 此页面是原来就有的设备列表</br>
> 页面中新增加了模态框，可以用于切换和修改模式</br>

**新增加页面**
> application\admin\view\subcommission\get_device_mode.html</br>
> 该页面就是异步的模态框内容

**控制器有如下修改.**
> 控制器主要是：application\admin\controller\Subcommission.php</br>
> 位置大约在214行左右</br>
> code_list()方法中新增了如下,需要传递管理员信息admin_id，只有超级管理员才可以修改设备模式

```php
    // 设备编号列表
    public function code_list()
    {
        $admin_id = Session::get('admin_id');
        $this->assign('admin_id', $admin_id);
    }
```

**异步获取设备信息方法.**

```php
    /**
     * 异步获取设备模式信息
     * @param Request $request
     * @return \think\response\View
     * @author: iszmxw <mail@54zm.com>
     * @Date：2019/11/19 14:11
     */
    public function get_device_mode(Request $request)
    {
        $number              = $request->post('number');
        $mode_type           = $request->post('mode_type');
        $lc_equipment_number = M("lc_equipment_number")->where(['number' => $number])->field("j_user_id")->find();
        $default_rate        = M('lc_apply')->where(['user_id' => $lc_equipment_number['j_user_id']])->value("one_level");// 查找酒店的分润比例
        if ($mode_type == 1) {
            // 查询设备免费模式的分润比率
            $free_reta = M('lc_device_rate')->where(['number' => $number])->value('rate');
        } else {
            $free_reta = null;
        }
        return view('get_device_mode', ['number' => $number, 'mode_type' => $mode_type, 'default_rate' => $default_rate, 'free_reta' => $free_reta]);
    }
```

**切换设备模式方法：**

```php
    /**
     * 切换设备收费模式
     * @param Request $request
     * @return array|\think\response\Json
     * @author: iszmxw <mail@54zm.com>
     * @Date：2019/11/15 18:00
     */
    public function device_mode(Request $request)
    {
        $admin_id   = Session::get('admin_id');
        $param      = $request->param();
        $number     = $param['number'];
        $model_type = $param['model_type'];
        $reta       = $param['free_reta'];
        $where      = ['number' => $number];
        if ($admin_id != 1) {
            return json(['code' => 500, 'msg' => '操作失败，仅限超级管理员操作！']);
        }

        if ($model_type == 0) {
            $res = M('lc_equipment_number')->where($where)->update(['mode_type' => 0]);
            if ($res) {
                return json([
                    'code' => 200,
                    'msg'  => '操作成功'
                ]);
            }
        }

        if ($model_type == 1) {
            if (empty($param['free_reta'])) {
                return json(['code' => 500, 'msg' => '操作失败，你已选择免费模式，请设置分润百分比']);
            }
            Db::startTrans();
            try {
                M('lc_equipment_number')->where($where)->update(['mode_type' => 1]);
                // 查询设备免费模式的分润比率
                $free_reta = M('lc_device_rate')->where($where)->value('rate');
                if ($free_reta) {
                    // 更新分润百分比
                    M('lc_device_rate')->where($where)->update(['rate' => $reta, 'update_time' => date('Y-m-d h:i:s', time())]);
                } else {
                    // 添加分润百分比
                    $data['number']      = $number;
                    $data['rate']        = $reta;
                    $data['create_time'] = date('Y-m-d h:i:s', time());
                    M('lc_device_rate')->add($data);
                }
                Db::commit();
                return json([
                    'code' => 200,
                    'msg'  => '操作成功'
                ]);
            } catch (\Exception $e) {
                Db::rollback();
                // 记录错误日志
                Log::record($e);
                return json([
                    'code' => 500,
                    'msg'  => '操作失败，请稍后再试！'
                ]);
            }
        }

    }
```

---

## 充电订单列表

::: tip 接口描述
获取充电订单列表信息
:::


**充电订单列表.**

> 获取充电订单列表方法为power_order_free()
> 模板页面所在位置为：application\admin\view\subcommission\power_order_free.html

```php
    // 免费扫码充电订单表
    public function power_order_free()
    {
        $timegap = urldecode(I('timegap'));
        $map     = array();
        if ($timegap) {
            $gap                = explode(',', $timegap);
            $begin              = $gap[0];
            $end                = $gap[1];
            $map['create_time'] = array('between', array(strtotime($begin), strtotime($end)));
            $this->assign('begin', $begin);
            $this->assign('end', $end);
            $map['pay_status'] = 2;//查找全部已经支付的订单
        } else {
            $map['pay_status'] = 2;//查找全部已经支付的订单
        }
        $count = M('power_order_free')->where($map)->count();
        $page  = new Page($count, 10);
        $lists = M('power_order_free')->where($map)->order('create_time desc')->limit($page->firstRow . ',' . $page->listRows)->select();
        //循环查找用户头像，昵称
        foreach ($lists as $k => $v) {
            $users                 = M("users")->where(['openid' => $v['openid']])->field("head_pic")->find();
            $lists[$k]['head_pic'] = $users['head_pic'];
        }
        $this->assign('page', $page->show());
        $this->assign('pager', $page);
        $this->assign('lists', $lists);
        return $this->fetch();
    }
```
