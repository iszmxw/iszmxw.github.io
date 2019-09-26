# 编译扩展包，打包为PHP可以调用的扩展

**最后进行PHP扩展的编译和安装了。**
> 1、首先执行 `phpize` 程序，生成configure脚本：

```powershell
phpize
```

> 2、然后进行编译和安装

```c
./configure --with-php-config=/www/server/php/56/bin/php-config
make -ldl # 按照动态库安装，由于引入了libbcm.so动态库
make install
```

> 3、修改PHP配置文件，加载安装的扩展

```c
[root@izwz92vqrxu3bz3edk0mytz iszmxw]# php --ini
Configuration File (php.ini) Path: /www/server/php/56/etc
Loaded Configuration File:         /www/server/php/56/etc/php.ini
[root@izwz92vqrxu3bz3edk0mytz iszmxw]# vim /www/server/php/56/etc/php.ini # 修改配置文件,添加扩展引用
[root@izwz92vqrxu3bz3edk0mytz iszmxw]# /etc/init.d/php-fpm-56 restart # 重启php
```

**最后编辑网站中的PHP文件使用该方法，尝一下，看是否可以运行。**

```c
[root@izwz92vqrxu3bz3edk0mytz 119.23.59.129]# vim /www/wwwroot/119.23.59.129/index.php 

<?php
var_dump(bcm_cal(36,1,168.5, 63.5, 600));
```

> 然后退出保存，查看运行结果，php /www/wwwroot/119.23.59.129/index.php

```php
[root@izwz92vqrxu3bz3edk0mytz iszmxw]# php /www/wwwroot/119.23.59.129/index.php 
array(14) {
  ["BMI"]=>
  float(22.365257263184)
  ["PBF"]=>
  float(31.741285324097)
  ["VFA"]=>
  float(0)
  ["PBW"]=>
  float(53.480243682861)
  ["SM"]=>
  float(0)
  ["BMC"]=>
  float(2.4272799491882)
  ["BMR"]=>
  float(1306.2365722656)
  ["Protein"]=>
  float(9.7693014144897)
  ["TBW"]=>
  float(33.959953308105)
  ["Minerals"]=>
  float(2.6440012454987)
  ["BFM"]=>
  float(20.155715942383)
  ["FFM"]=>
  float(43.344284057617)
  ["BodyAge"]=>
  float(0)
  ["TotalScore"]=>
  float(0)
}

```

> 看到上面的结果则证明大工告成了顺便`phpinfo()`看一下扩展，扩展也加载成功

![iszmxw](http://iszmxw.github.io/bcm/file/images/QQ截图20190926174132.png "QQ截图20190926174132.png")
