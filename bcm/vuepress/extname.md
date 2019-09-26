# 对接前准备

::: tip 条件
1、需要准备编译后的so动态库文件libbcm.so，下面是准备好了的文件点击下载即可
2、linux服务器一台，我这里用的是阿里云服务器
3、PHP运行环境准备一个，我这里用的是PHP5.6.40版本
:::

**文件地址.**
> [http://iszmxw.github.io/bcm/file/so/BCM-SO.zip](http://iszmxw.github.io/bcm/file/so/BCM-SO.zip)

**安装PHP运行环境所需要的软件.**
> 这里我们所使用的是宝塔面板 `BT-Panel 5.2.0` </br>
> Nginx使用的是`Nginx 1.12`, PHP安装的`PHP5.6.40`</br>
> 安装好后，我们创建一个站点，运用`phpinfo()`以及`php -m`检测php的扩展以及一些基本参数

**效果如下.**

![iszmxw](http://iszmxw.github.io/bcm/file/images/QQ截图20190916164805.png "QQ截图20190916164805.png")

**根据动态库创建PHP扩展：**

```powershell
# cd到PHP安装包的目录
cd /www/server/php/56/src/ext/
# 新增一个扩展初始结构目录
./ext_skel --extname=iszmxw
# 进入到新增的扩展目录
cd iszmxw/
# 查看扩展目录所在位置
pwd
/www/server/php/56/src/ext/iszmxw
# 下面上传动态库文件到服务器中，使用xftp即可上传，这里不再赘述了。（上传到自己建立的一个目录即可）

```

**生成动态库的lib库.**
> 我这里将文件上传到了新建的扩展目录中

```powershell
[root@izwz92vqrxu3bz3edk0mytz iszmxw]# ll -a
total 68
drwxr-xr-x  4 root root  4096 Sep 26 17:15 .
drwxr-xr-x 80 www  www   4096 Sep 25 18:16 ..
-rw-r--r--  1 root root   671 Sep 26 10:16 Cal.h
-rw-r--r--  1 root root  2042 Sep 26 10:16 config.m4
-rw-r--r--  1 root root   296 Sep 26 10:16 config.w32
-rw-r--r--  1 root root     6 Sep 26 10:16 CREDITS
-rw-r--r--  1 root root     0 Sep 26 10:16 EXPERIMENTAL
-rw-r--r--  1 root root   398 Sep 26 10:16 .gitignore
drwxr-xr-x  2 root root  4096 Sep 25 18:19 include
-rw-r--r--  1 root root  7468 Sep 26 10:16 iszmxw.c
-rw-r--r--  1 root root   502 Sep 26 10:16 iszmxw.php
-rw-r--r--  1 root root 13112 Sep 26 10:16 libbcm.so
-rw-r--r--  1 root root  2751 Sep 26 10:16 php_iszmxw.h
drwxr-xr-x  2 root root  4096 Sep 25 18:16 tests
# 将so文件放到系统中
[root@izwz92vqrxu3bz3edk0mytz 119.23.59.129]# su
[root@izwz92vqrxu3bz3edk0mytz 119.23.59.129]# echo /usr/local/lib > /etc/ld.so.conf.d/local.conf
[root@izwz92vqrxu3bz3edk0mytz 119.23.59.129]# cp libbcm.so /usr/local/lib
[root@izwz92vqrxu3bz3edk0mytz 119.23.59.129]# /sbin/ldconfig
```
