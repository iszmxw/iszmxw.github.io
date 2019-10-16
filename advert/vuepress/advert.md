# 广告

## 广告获取

::: tip 接口描述
获取广告接口，通过此接口可以获取到广告数据，需要传入一些字段 </br>
测试服请求地址： `http://ad.10wan.ren`</br>
正式服请求地址： `http://www.12345.live`</br>
业务请求时，请替换127.0.0.1为真实地址即可
:::

**URL.**
> 接口地址：http://127.0.0.1/api/open/developp/get_advert

**请求方式.**
> post | get

**请求参数.**

| 字段名      | 变量名      | 必填 | 类型    | 默认值 | 实例值                           | 描述                                     |
|-------------|-------------|------|---------|--------|----------------------------------|------------------------------------------|
| 开发者APPID | appid       | 是   | string  | 无     | ad1f5d4bc06f19b                  | 合作商开发者的appid                      |
| 时间戳      | timestamp   | 是   | number  | 无     | 1557200022                       | 用于签名的时间戳                         |
| 随机字符串  | nonce       | 是   | string  | 无     | 123456                           | 用于签名的随机字符串                     |
| 签名        | sign        | 是   | string  | 无     | e06416850b0439ec3bf57443b6db92fd | 签名后的字符串，获取方式详见接口权限文档 |
| 设备UUID    | device_uuid | 是   | string  | 无     | 3e3add4a720c11e9ab2100163e0488d6 | 设备的对应UUID                           |
| lng         | lng         | 是   | varchar | 无     | oleiaYv6i50I7ADTlmIGN4WO-2RGM    | 设备的lng                                |
| lat         | lat         | 是   | varchar | 无     |                                  | 设备的lat                                |
| ad_num      | ad_num      | 是   | int     | 无     | 12                               | 请求广告的数量                           |

**请求实例：：**

```json
{
  "appid":"ad1f5d4bc06f19b",
  "timestamp":1557200022,
  "nonce":"jbh12345",
  "sign":"e06416850b0439ec3bf57443b6db92fd",
  "device_uuid":"3e3add4a720c11e9ab2100163e0488d6",
  "lng":"",
  "lat":"",
  "ad_num": 12
}
```

**响应参数：**

| 字段名         | 变量名      | 类型    | 实例值                                                      | 描述                                       |
|----------------|-------------|---------|-------------------------------------------------------------|--------------------------------------------|
| 返回码         | code        | int     | 200                                                         | 接口返回状态                               |
| 返回码含义     | message     | varchar | OK                                                          | 接口返回状态说明                           |
| 返回数据       | data        | array   |                                                             | 接口返回的数据                             |
| 开发者appid    | appid       | string  | ad1f5d4bc06f19b                                             | 开发者传入的appid                          |
| 开发者appkey   | appkey      | string  | a9404de85f62c037360e1be873134a00                            | 开发者传入的appkey                         |
| 请求数据的签名 | sign        | string  | 74df3901db4d71c8a7146ef4cfcce5a4                            | 开发者传入的sign                           |
| 广告信息       | adinfo      | array   |                                                             | 接口返回的广告信息                         |
| 广告id         | ad_id       | int     | 7                                                           | 广告id                                     |
| 上报地址       | track_url   | string  | http://127.0.0.1/api/open/develop/track/a93349874847c1d3da6.vue | 广告上报地址，播放完了即可上报             |
| 广告类型       | type        | string  | IMAGE                                                       | IMAGE、VIDEO返回的广告类型，只有视频和图片 |
| 广告宽         | width       | string  | 544                                                         | 广告的宽                                   |
| 广告高         | height      | string  | 352                                                         | 广告的高                                   |
| 过期时间       | expire_time | int     | 300                                                         | 广告的过期时间                             |
| 广告地址       | url         | string  | http://files.fensiwansui.com/images/15673929631589.jpg      | 广告播放地址                               |
| 文件hash       | hash        | string  | d8d647dbd71fc6c1c35e8ea982117d51                            | 文件hash                                   |

**响应实例：：**

```json
{
    "code": 0,
    "message": "OK",
    "data": {
        "appid": "ad1f5d4bc06f19b",
        "appkey": "a9404de85f62c037360e1be873134a00",
        "sign": "74df3901db4d71c8a7146ef4cfcce5a4",
        "adinfo": [
            {
                "ad_id": 7,
                "track_url": "http://127.0.0.1/api/open/develop/track/a9334987ece78b6fe8bf130ef00b74847c1d3da6.vue",
                "width": 544,
                "height": 352,
                "expire_time": 300,
                "type": "IMAGE",
                "hash": "d8d647dbd71fc6c1c35e8ea982117d51",
                "url": "http://files.fensiwansui.com/images/15673929631589.jpg"
            },
            {
                "ad_id": 8,
                "track_url": "http://127.0.0.1/api/open/develop/track/b7eb6c689c037217079766fdb77c3bac3e51cb4c.vue",
                "width": 1280,
                "height": 740,
                "expire_time": 300,
                "type": "IMAGE",
                "hash": "d382cbcbdc060f944256228c9a2033b2",
                "url": "http://files.fensiwansui.com/images/15675600195032.jpg"
            }
            ......
        ]
    }
}
```

---

## 广告上报

::: tip 接口描述
广告上报，获取广告播放完广告进行广告上报，证明已经播放完成了
:::

**URL.**
> 此地址仅供参考，请以实际返回的地址为准
>
> 接口地址：http://127.0.0.1/api/open/develop/track/a93349874847c1d3da6.vue

**请求方式.**
> post | get

**请求参数.**
> 无需携带参数，直接请求即可

**响应参数：**

| 字段名     | 变量名  | 类型    | 实例值 | 描述             |
|------------|---------|---------|--------|------------------|
| 返回码     | code    | int     | 200    | 接口返回状态     |
| 返回码含义 | message | varchar | OK     | 接口返回状态说明 |

**响应实例：：**

```json
{
    "code": 200,
    "message": "上报成功"
}
```
