# 文档声明

::: tip 注意

关于此次新增免费扫码获取充电密码流程

---

:tada: 1、成为粉丝万岁平台的合作商户</br>
:tada: 2、利用合作身份进行请求获取二维码</br>

>所有的免费二维码都来自于粉丝万岁平台，粉丝万岁平台有一定的公众号</br>
>当请求不出公众号的时候证明此时候，这个用户已经关注完了所有发放的公众号，平台暂时没有新的
>资源了，这个时候设备虽然是免费模式，但是由于请求不到资源会，会返回走默认的扫码支付获取充电密码模式

关于此次修改的变动新增了一些数据库字段和数据表

# **sd_lc_equipment_number**
> 变动：新增字段

| 字段名称        | 字段类型           | 备注  |
| ------------- |:-------------:| -----:|
| mode_type      | tinyint(1) | 设备模式。0-默认走原有的支付模式，1-走扫码关注公众号免费推送充电密码模式|


# **sd_lc_device_rate**
> 变动：新增整张数据表
> 目的：解决免费模式的设备分润百分比

| 字段名称        | 字段类型           | 备注  |
| ------------- |:-------------:| -----:|
| id            | int(11)       | 主键  |
| number        | varchar(255)  | 设备编号|
| rate          | varchar(255)  | 设备免费模式的分润百分比 |
| create_time   | datetime(0)   | 创建时间 |
| update_time   | datetime(0)   | 跟新时间 |


# **sd_shou_log**
> 变动：新增字段
> 目的：免费模式扫码产生的订单，免费模式用户首次可能不会关注系统的主体公众号，
> 从而没有注册到users表中，这时只能记录openid

| 字段名称        | 字段类型           | 备注  |
| ------------- |:-------------:| -----:|
| openid        | varchar(100)  | 支付者的openid  |


# **sd_power_order_free**
> 变动：新增整张数据表
> 目的：免费模式扫码产生的订单

| 字段名称        | 字段类型           | 备注  |
| ------------- |:-------------:| -----:|
| id            | int(11)       | 主键  |
| order_sn      | varchar(255)  | 订单唯一编号|
| openid        | varchar(255)  | 下单用户openid |
| nickname      | varchar(255)  | 下单用户的昵称 |
| head_pic      | varchar(255)  | 头像 |
| ip            | varchar(255)  | 下单用户ip |
| appid         | varchar(50)   | 下单即将关注消费的公众号appid |
| appname       | varchar(100)  | 下单即将关注消费的公众号名称 |
| qrcode_url    | varchar(255)  | 下单即将关注消费的公众号二维码 |
| code          | varchar(15)   | 回复验证码，公众号出链接 |
| number        | varchar(32)   | 设备编号，在哪个设备上下的单 |
| price         | decimal(11,2) | 下单用户关注公众号的价格 |
| pay_price     | decimal(11,2) | 实付金额 |
| time          | int(11)       | 充电时长（分钟） |
| key           | int(11)       | 密码key(密码第一位) |
| password      | varchar(32)   | 设备密码 |
| create_time   | varchar(32)   | 创建时间 |
| pay_time      | varchar(32)   | 支付时间 |
| pay_status    | tinyint(2)    | 支付状态，1：未支付，2已支付 |


:tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada::tada:
:::
