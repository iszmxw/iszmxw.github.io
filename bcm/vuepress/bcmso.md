# 对接动态so库

## 对接前准备

::: tip 条件
1、需要准备编译后的so文件libbcm.so，下面是准备好了的文件点击下载即可
2、linux服务器一台，我这里用的是阿里云服务器
3、PHP运行环境准备一个，我这里用的是PHP7.2版本
:::

**文件地址.**
> [http://iszmxw.github.io/bcm/file/so/bcm.so.zip](http://iszmxw.github.io/bcm/file/so/bcm.so.zip)

**安装PHP运行环境所需要的软件.**
> 这里我们所使用的是宝塔面板 `BT-Panel 5.2.0` </br>
> Nginx使用的是`Nginx 1.12`, PHP安装的`PHP7.2`</br>
> 安装好后，我们创建一个站点，运用`phpinfo()`以及`php -m`检测php的扩展以及一些基本参数

**效果如下.**

![iszmxw](http://iszmxw.github.io/bcm/file/images/QQ截图20190916164805.png "QQ截图20190916164805.png")
![iszmxw](http://iszmxw.github.io/bcm/file/images/QQ截图20190916170144.png "QQ截图20190916170144.png")

**根据动态库创建PHP扩展：**

```powershell
# cd到PHP安装包的目录
cd /www/server/php/72/src/ext/
# 新增一个扩展初始结构目录
./ext_skel --extname=iszmxw
# 进入到新增的扩展目录
cd iszmxw/
# 查看扩展目录所在位置
pwd
/www/server/php/72/src/ext/iszmxw
# 下面上传动态库文件到服务器中，使用xftp即可上传，这里不再赘述了。（上传到自己建立的一个目录即可）

```

**生成动态库的lib库.**
> 我这里将文件上传到了新建的网站目录中

```powershell
# 将文件755
[root@izwz92vqrxu3bz3edk0mytz 119.23.59.129]# chmod 755 *
[root@izwz92vqrxu3bz3edk0mytz 119.23.59.129]# ll -a
total 24
drwxr-xr-x 2 www  www  4096 Sep 16 17:16 .
drwxr-xr-x 4 root root 4096 Sep 16 16:45 ..
-rwxr-xr-x 1 root root  262 Sep 16 17:16 Cal.h
-rwxr-xr-x 1 root root   17 Sep 16 16:46 index.php
-rwxr-xr-x 1 root root 7904 Sep 16 17:16 libbcm.so
# 将so文件放到系统中
[root@izwz92vqrxu3bz3edk0mytz 119.23.59.129]# su
[root@izwz92vqrxu3bz3edk0mytz 119.23.59.129]# echo /usr/local/lib > /etc/ld.so.conf.d/local.conf
[root@izwz92vqrxu3bz3edk0mytz 119.23.59.129]# cp libbcm.so /usr/local/lib
[root@izwz92vqrxu3bz3edk0mytz 119.23.59.129]# /sbin/ldconfig
```

**下面开始准备更改php扩展.**
> 使用php扩展调用动态库，由于上一步的操作，将bcm动态链接到lib库，即可方便的调用了

```powershell
# cd到扩展目录
cd /www/server/php/72/src/ext/iszmxw
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
./configure --with-php-config=/www/server/php/72/bin/php-config
make LDFLAGS=-lbcm # 按照动态库安装
make install
```
