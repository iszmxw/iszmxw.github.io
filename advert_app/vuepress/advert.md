# 广告

::: tip 接口描述
获取广告接口，通过此接口可以获取到广告数据，需要传入一些字段 </br>
:::


[[toc]]


## 单条广告获取


**URL.**
> 接口地址：http://127.0.0.1/api/app/advert/get_advert

**请求方式.**
> post | get

**请求参数.**

| 字段名   | 变量名      | 必填 | 类型   | 说明                                |
|----------|-------------|------|--------|-------------------------------------|
| token    | token       | 否   | string | 用户token                           |
| 文章id   | news_id     | 否   | string | 文章页面当前文章的id                |
| 栏目id   | category_id | 否   | string | 栏目页面当前栏目的id                |
| 请求类型 | type        | 是   | string | 栏目列表页面传：1 文章详情页面传：2 |

**请求实例：：**

```json
{
  "token":"1dc747de308d11ea8f1f7470fdcb52a0",
  "news_id": 1,
  "category_id": 1,
  "type": 2,
}
```

**响应参数：**

| 字段名                                    | 变量名      | 类型    | 实例值              |
|-------------------------------------------|-------------|---------|---------------------|
| 返回码                                    | code        | int     | 200                 |
| 返回码含义                                | message     | varchar | OK                  |
| 返回数据                                  | data        | array   | []                  |
| 广告id                                    | id          | int     | 2                   |
| 广告所属商户id                            | account_id  | int     | 2                   |
| 广告所属计划id                            | plan_id     | int     | 1                   |
| 广告所属单元id                            | unit_id     | int     | 1                   |
| 广告计划名称                              | plan_name   | string  | 小窝计划            |
| 广告单元名称                              | unit_name   | string  | 小窝单元            |
| 广告创意名称                              | idea_name   | string  | 小窝第二创意        |
| 广告标题                                  | advert_name | string  | 小窝创意标题        |
| 广告链接地址                              | link        | string  | 小窝创意标题        |
| 广告图片                                  | images      | array   | []                  |
| 广告计划投放金额                          | budget      | int     | 60000（单位分）     |
| 广告类型  1：信息流列表页 2：信息流详情页 | type        | int     | 2                   |
| 广告单元价格                              | price       | int     | 90                  |
| 广告状态 0：待开启 1：已开启              | status      | int     | 1                   |
| 广告审核，0：待审核 1：已通过 2：未通过   | is_check    | int     | 1                   |
| 广告计划开始时间                          | start_time  | string  | 2020-01-11 00:00:00 |
| 广告计划结束时间                          | end_time    | string  | 2020-01-18 00:00:00 |
| 广告点击上报id                            | id_click    | int     | 12                  |

**响应实例：：**

```json
{
    "code": 200,
    "message": "ok",
    "data": {
        "id": 2,
        "account_id": 2,
        "plan_id": 1,
        "unit_id": 1,
        "plan_name": "小窝计划",
        "unit_name": "小窝单元",
        "idea_name": "小窝第二创意",
        "advert_name": "小窝创意标题",
        "link": "http://baidu.com",
        "images": [
            "http://advert.test/uploads/advert/20200101/1577884464984.png",
            "http://advert.test/uploads/advert/20200109/1578580977180.jpg",
            "http://advert.test/uploads/advert/20200109/1578580981842.jpg"
        ],
        "budget": 60000,
        "type": 2,
        "price": 90,
        "status": 1,
        "is_check": 1,
        "start_time": "2020-01-11 00:00:00",
        "end_time": "2020-01-18 00:00:00"
    }
}
```

---




## 多条广告获取


**URL.**
> 接口地址：http://127.0.0.1/api/app/advert/get_list_advert

**请求方式.**
> post | get

**请求参数.**

| 字段名   | 变量名      | 必填 | 类型   | 说明                                |
|----------|-------------|------|--------|-------------------------------------|
| token    | token       | 否   | string | 用户token                           |
| 文章id   | news_id     | 否   | string | 文章页面当前文章的id                |
| 栏目id   | category_id | 否   | string | 栏目页面当前栏目的id                |
| 请求类型 | type        | 是   | string | 栏目列表页面传：1 文章详情页面传：2 |

**请求实例：：**

```json
{
  "token":"1dc747de308d11ea8f1f7470fdcb52a0",
  "news_id": 1,
  "category_id": 1,
  "type": 2,
}
```

**响应参数：**

| 字段名                                    | 变量名      | 类型    | 实例值              |
|-------------------------------------------|-------------|---------|---------------------|
| 返回码                                    | code        | int     | 200                 |
| 返回码含义                                | message     | varchar | OK                  |
| 返回多条数据                              | data        | array   | []                  |
| 广告id                                    | id          | int     | 2                   |
| 广告所属商户id                            | account_id  | int     | 2                   |
| 广告所属计划id                            | plan_id     | int     | 1                   |
| 广告所属单元id                            | unit_id     | int     | 1                   |
| 广告计划名称                              | plan_name   | string  | 小窝计划            |
| 广告单元名称                              | unit_name   | string  | 小窝单元            |
| 广告创意名称                              | idea_name   | string  | 小窝第二创意        |
| 广告标题                                  | advert_name | string  | 小窝创意标题        |
| 广告链接地址                              | link        | string  | 小窝创意标题        |
| 广告图片                                  | images      | array   | []                  |
| 广告计划投放金额                          | budget      | int     | 60000（单位分）     |
| 广告类型  1：信息流列表页 2：信息流详情页 | type        | int     | 2                   |
| 广告单元价格                              | price       | int     | 90                  |
| 广告状态 0：待开启 1：已开启              | status      | int     | 1                   |
| 广告审核，0：待审核 1：已通过 2：未通过   | is_check    | int     | 1                   |
| 广告计划开始时间                          | start_time  | string  | 2020-01-11 00:00:00 |
| 广告计划结束时间                          | end_time    | string  | 2020-01-18 00:00:00 |
| 广告点击上报id                            | id_click    | int     | 12                  |

**响应实例：：**

```json
{
    "code":200,
    "message":"ok",
    "data":[
        {
            "id":1,
            "account_id":2,
            "plan_id":1,
            "unit_id":1,
            "plan_name":"小窝计划",
            "unit_name":"小窝单元",
            "idea_name":"小窝第一创意",
            "advert_name":"小窝创意标题",
            "link":"http://baidu.com",
            "images":[
                "http://advert.test/uploads/advert/20200111/157872991362.jpg"
            ],
            "budget":60000,
            "type":2,
            "price":90,
            "status":1,
            "is_check":1,
            "start_time":"2020-02-29 00:00:00",
            "end_time":"2020-03-31 00:00:00",
            "id_click":313153
        },
        {
            "id":2,
            "account_id":2,
            "plan_id":1,
            "unit_id":1,
            "plan_name":"小窝计划",
            "unit_name":"小窝单元",
            "idea_name":"小窝第二创意",
            "advert_name":"小窝创意标题",
            "link":"http://baidu.com",
            "images":[
                "http://advert.test/uploads/advert/20200101/1577884464984.png",
                "http://advert.test/uploads/advert/20200109/1578580977180.jpg",
                "http://advert.test/uploads/advert/20200109/1578580981842.jpg"
            ],
            "budget":60000,
            "type":2,
            "price":90,
            "status":1,
            "is_check":1,
            "start_time":"2020-02-29 00:00:00",
            "end_time":"2020-03-31 00:00:00",
            "id_click":313154
        },
        {
            "id":6,
            "account_id":7,
            "plan_id":3,
            "unit_id":3,
            "plan_name":"22",
            "unit_name":"55",
            "idea_name":"6666",
            "advert_name":"揭秘：0门槛，闲时手机轻松赚钱",
            "link":"http://advert.54zm.com/admin/#/advert/idea_add",
            "images":[
                "http://advert.54zm.com/uploads/advert/20200129/1580293306654.jpg"
            ],
            "budget":1000000,
            "type":2,
            "price":200,
            "status":1,
            "is_check":1,
            "start_time":"2020-02-21 00:00:00",
            "end_time":"2020-03-31 00:00:00",
            "id_click":313155
        }
    ]
}
```

---




## 广告点击上报接口


**URL.**
> 接口地址：http://127.0.0.1/api/app/advert/advert_click

**请求方式.**
> post | get

**请求参数.**

| 字段名     | 变量名   | 必填 | 类型   | 说明                     |
|------------|----------|------|--------|--------------------------|
| token      | token    | 否   | string | 用户token                |
| 点击上报id | id_click | 否   | string | 当前用户点击的广告上报id |

**请求实例：：**

```json
{
  "token":"1dc747de308d11ea8f1f7470fdcb52a0",
  "id_click": 1
}
```

**响应参数：**

| 字段名     | 变量名  | 类型    | 实例值                       |
|------------|---------|---------|------------------------------|
| 返回码     | code    | int     | 200/500                      |
| 返回码含义 | message | varchar | success/error/数据传输错误！ |

**响应实例：：**

```json
{
    "code": 200,
    "message": "success",
}
```

---
