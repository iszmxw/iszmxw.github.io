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
package com.test.main;

import java.security.MessageDigest;
import java.util.Arrays;

public class RtbUat {
    public static void main(String[] args) throws Exception {

        String appkey = "fb56be4d6*******************5897f2d6375";
        String timestamp = "" + (System.currentTimeMillis()) / 1000;
        String nonce = "123";

        System.out.println(getSHA1(appkey, timestamp, nonce));

    }

    public static String getSHA1(String appkey, String timestamp, String nonce) {
        String shaStr = null;
        try {

            String[] str = new String[] { appkey, timestamp, nonce };
            StringBuffer sb = new StringBuffer();

            Arrays.sort(str);
            for (int i = 0; i < 3; i++) {
                sb.append(str[i]);
            }

            String stra = sb.toString();
            MessageDigest aa = MessageDigest.getInstance("SHA-1");
            aa.update(stra.getBytes());
            byte[] digest = aa.digest();
            StringBuffer hexstr = new StringBuffer();
            String shaHex = "";
            for (int i = 0; i < digest.length; i++) {
                shaHex = Integer.toHexString(digest[i] & 0xFF);
                if (shaHex.length() < 2) {
                    hexstr.append(0);
                }
                hexstr.append(shaHex);
            }
            shaStr = (hexstr.toString());

        } catch (Exception e) {
            e.printStackTrace();
        }
        return shaStr;
    }
}

```
