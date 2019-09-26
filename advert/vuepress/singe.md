# 签名

[[toc]]

## 签名生成

::: tip 签名
:tada:每次请求数据的必要条件之一，请求前请先生成一个签名，最好封装一个自己的方法，每次调用即可
以下用PHP作为示例，仅供参考，其他语言可以自行封装
:::

**PHP示例。**

``` php
$data['appkey'] = "商户的appkey";
$data['timestamp'] = "时间戳";
$data['nonce'] = "随机字符串";
sort($data, SORT_STRING);       // 对数组内元素按照字符串进行排序
$str = implode($data);          // 将数组中元素拼接成一个字符串
return (sha1($str));             // 最后md5加密得到签名
```

**Java示例。**

``` java
$data['appkey'] = "商户的appkey";
$data['timestamp'] = "时间戳";
$data['nonce'] = "随机字符串";
sort($data, SORT_STRING);       // 对数组内元素按照字符串进行排序
$str = implode($data);          // 将数组中元素拼接成一个字符串
return (sha1($str));            // 最后md5加密得到签名
```
