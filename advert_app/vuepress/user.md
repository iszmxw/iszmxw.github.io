# 用户中心接口


::: tip 接口列表
> 1、注册用户</br>
> 2、用户登录</br>
> 3、用户修改密码</br>
> 4、用户退出
:::


[[toc]]

## 1、注册用户


**URL.**
> 接口地址：http://127.0.0.1/api/app/user/register

**请求方式.**
> post | get

**请求参数.**

| 字段名   | 变量名      | 必填 | 类型   |
|----------|-------------|------|--------|
| 用户名   | username    | 是   | string |
| 登录密码 | password    | 是   | number |
| 重复密码 | re_password | 是   | string |
| 用户昵称 | nickname    | 是   | string |

**请求实例：：**

```json
{
  "username":18576409426,
  "password":"admin",
  "re_password":"admin",
  "nickname":"追梦小窝"
}
```

**响应参数：**

| 字段名     | 变量名  | 类型    | 实例值 |
|------------|---------|---------|--------|
| 返回码     | code    | int     | 200    |
| 返回码含义 | message | varchar | OK     |

**响应实例：：**

```json
{
    "code": 200,
    "message": "恭喜您注册成功！"
}
```

---


## 2、用户登录


**URL.**
> 接口地址：http://127.0.0.1/api/app/user/login

**请求方式.**
> post | get

**请求参数.**

| 字段名   | 变量名   | 必填 | 类型   |
|----------|----------|------|--------|
| 用户名   | username | 是   | string |
| 登录密码 | password | 是   | number |

**请求实例：：**

```json
{
  "username":18576409426,
  "password":"admin"
}
```

**响应参数：**

| 字段名       | 变量名  | 类型    | 实例值                           |
|--------------|---------|---------|----------------------------------|
| 返回码       | code    | int     | 200                              |
| 返回码含义   | message | varchar | 登录成功！                       |
| 返回token    | token   | varchar | a6f4aa20308c11eab91b7470fdcb52a0 |
| 返回用户信息 | user    | varchar | array                            |

**响应实例：：**

```json
{
    "code": 200,
    "message": "登录成功！",
    "data": {
        "user": {
            "id": 1,
            "username": "18576409426",
            "password": "eyJpdiI6Im0waW9YcEtaVFdoOHFicEN0UVwvOWJBPT0iLCJ2YWx1ZSI6IndzRjhjNVZMNDZzQXVhdGpUdVgzZFE9PSIsIm1hYyI6IjhlN2ZjNDMyMmI5ZmYxNDBkODM1YTA1NWUzZWIwMWQyZTQxMzQ5NDUzZTFjMDFjNjc5ZTM3N2ViODM5NjEwOWYifQ==",
            "nickname": "追梦小窝",
            "avatar": "/user/images/avatars/avatar.png",
            "status": 1,
            "created_at": "1578318070",
            "updated_at": "1578318070",
            "deleted_at": null,
            "login_time": 1578319883,
            "refresh_time": 1578319883
        },
        "token": "6b5cea52308e11eaac8a7470fdcb52a0"
    }
}
```

---


## 3、用户修改密码


**URL.**
> 接口地址：http://127.0.0.1/api/app/user/password

**请求方式.**
> post | get

**请求参数.**

| 字段名       | 变量名   | 必填 | 类型   |
|--------------|----------|------|--------|
| token        | token    | 是   | string |
| 登录密码     | password | 是   | string |
| 重复登录密码 | password | 是   | string |

**请求实例：：**

```json
{
  "token":"1dc747de308d11ea8f1f7470fdcb52a0",
  "password":"admin",
  "re_password":"admin",
  
}
```

**响应参数：**

| 字段名     | 变量名  | 类型    | 实例值                 |
|------------|---------|---------|------------------------|
| 返回码     | code    | int     | 200(500)               |
| 返回码含义 | message | varchar | 操作成功！（操作失败） |

**响应实例：：**

```json
{
    "code": 200,
    "message": "操作成功！"
}
```

---

## 4、用户退出


**URL.**
> 接口地址：http://127.0.0.1/api/app/user/logout

**请求方式.**
> post | get

**请求参数.**

| 字段名 | 变量名 | 必填 | 类型   |
|--------|--------|------|--------|
| token  | token  | 是   | string |

**请求实例：：**

```json
{
    "token": "1dc747de308d11ea8f1f7470fdcb52a0"
}
```

**响应参数：**

| 字段名     | 变量名  | 类型    | 实例值   |
|------------|---------|---------|----------|
| 返回码     | code    | int     | 200(500) |
| 返回码含义 | message | varchar | success  |

**响应实例：：**

```json
{
    "code": 200,
    "message": "success"
}
```

---