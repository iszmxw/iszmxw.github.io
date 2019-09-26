# 对接动态so库

**下面开始准备更改php扩展.**
> 使用php扩展调用动态库，由于上一步的操作，将bcm动态链接到lib库，即可方便的调用了

```powershell
# cd到扩展目录
cd /www/server/php/56/src/ext/iszmxw
# 查看扩展目录下有如下默认文件以及目录
[root@izwz92vqrxu3bz3edk0mytz iszmxw]# ll -a
total 44
drwxr-xr-x  3 root root 4096 Sep 16 17:08 .
drwxrwxr-x 77 root root 4096 Sep 16 17:08 ..
-rw-r--r--  1 root root 2824 Sep 16 17:08 config.m4
-rw-r--r--  1 root root  352 Sep 16 17:08 config.w32
-rw-r--r--  1 root root    7 Sep 16 17:08 CREDITS
-rw-r--r--  1 root root    0 Sep 16 17:08 EXPERIMENTAL
-rw-r--r--  1 root root  392 Sep 16 17:08 .gitignore
-rw-r--r--  1 root root 5152 Sep 16 17:08 iszmxw.c
-rw-r--r--  1 root root  502 Sep 16 17:08 iszmxw.php
-rw-r--r--  1 root root 2315 Sep 16 17:08 php_iszmxw.h
drwxr-xr-x  2 root root 4096 Sep 16 17:08 tests
```

**首先编辑 `config.m4` 文件，去掉第16行和第18行的注释（注释符号为 dnl 。）.**
> 修改后的结果如下

```c
PHP_ARG_ENABLE(iszmxw, whether to enable iszmxw support,
dnl Make sure that the comment is aligned:
[  --enable-iszmxw           Enable iszmxw support])
```

**然后打开 php_iszmxw.h，在 `PHP_FUNCTION(confirm_iszmxw_compiled);` 之下加入函数声明：**

```c
PHP_FUNCTION(confirm_iszmxw_compiled);   /* For testing, remove later. */
PHP_FUNCTION(bcm_cal);
```

**打开 iszmxw.c，在 `PHP_FE(confirm_iszmxw_compiled, NULL)` 下方加入以下内容。**

```c
const zend_function_entry iszmxw_functions[] = {
        PHP_FE(confirm_iszmxw_compiled, NULL)           /* For testing, remove later. */
        PHP_FE(bcm_cal,   NULL)       /* For testing, remove later. */
        PHP_FE_END      /* Must be the last line in iszmxw_functions[] */
};
```

**然后在 iszmxw.c 的最末尾书写`bcm_cal`函数的内容：**

```c
Infor infor;
/**
 * 返回传入的年龄
 */
PHP_FUNCTION(bcm_cal)
{
    int isage;
    int isgender;
    double isheight;
    double isweight;
    double isresistance;
    int result;

    if (zend_parse_parameters(ZEND_NUM_ARGS() TSRMLS_CC, "llddd", &isage, &isgender, &isheight, &isweight, &isresistance) == FAILURE)
    {
        return;
    }

    infor.age = isage;
    infor.height = isheight;
    infor.weight = isweight;
    infor.resistance = isresistance;

    if (isgender == 1)
    {
        infor.gender = male;
    }
    else
    {
        infor.gender = female;
    }

    BCM_Cal(&infor);
    result = infor.TBW;
    RETURN_DOUBLE(result);
}
```

> 由于引入了`Infor infor;`,则需要在`iszmxw.c`顶部引用下面代码

```c
#include "Cal.h"
```

> 最后将`Cal.h`传入到扩展的目录下面

**最后进行PHP扩展的编译和安装了。**
> 1、首先执行 `phpize` 程序，生成configure脚本：

```powershell
phpize
```

> 2、然后进行编译和安装

```c
./configure --with-php-config=/www/server/php/56/bin/php-config
make LDFLAGS=-lbcm # 按照动态库安装
make install
```

> 3、修改PHP配置文件，加载安装的扩展

```c
[root@izwz92vqrxu3bz3edk0mytz iszmxw]# php --ini
Configuration File (php.ini) Path: /www/server/php/56/etc
Loaded Configuration File:         /www/server/php/56/etc/php.ini
[root@izwz92vqrxu3bz3edk0mytz iszmxw]# vim /www/server/php/56/etc/php.ini # 修改配置文件
[root@izwz92vqrxu3bz3edk0mytz iszmxw]# /etc/init.d/php-fpm-56 restart # 重启php
```

**最后编辑网站中的PHP文件使用该方法，尝一下，看是否可以运行。**

```c
[root@izwz92vqrxu3bz3edk0mytz 119.23.59.129]# vim /www/wwwroot/119.23.59.129/index.php 

<?php
echo "bcm_cal=". bcm_cal(36,1,168.5, 63.5, 600)."<br>";
```

> 然后退出保存，查看运行结果，php /www/wwwroot/119.23.59.129/index.php

```c
[root@izwz92vqrxu3bz3edk0mytz 119.23.59.129]# php /www/wwwroot/119.23.59.129/index.php
in so ：TBW = resistance = 600.000000
bcm_cal=600<br>[root@izwz92vqrxu3bz3edk0mytz 119.23.59.129]#
```
