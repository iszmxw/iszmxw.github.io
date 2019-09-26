# 对接动态so库

**下面开始准备更改php扩展。**
> 使用php扩展调用动态库，由于上一步的操作，将bcm动态链接到lib库，即可方便的调用了

```powershell
# cd到扩展目录
cd /www/server/php/56/src/ext/iszmxw
# 查看扩展目录下有如下默认文件以及目录
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
```

**1、首先编辑 `config.m4` 文件，去掉第16行和第18行的注释（注释符号为 dnl 。）.**
> 修改后的结果如下

```c
PHP_ARG_ENABLE(iszmxw, whether to enable iszmxw support,
dnl Make sure that the comment is aligned:
[  --enable-iszmxw           Enable iszmxw support])
```

**2、然后打开 php_iszmxw.h，在 `PHP_FUNCTION(confirm_iszmxw_compiled);` 之下加入函数声明：**

```c
PHP_FUNCTION(confirm_iszmxw_compiled);   /* For testing, remove later. */
PHP_FUNCTION(bcm_cal);
```

**3、然后打开 iszmxw.c，在 `PHP_FE(confirm_iszmxw_compiled, NULL)` 下方加入以下内容。**

```c
const zend_function_entry iszmxw_functions[] = {
        PHP_FE(confirm_iszmxw_compiled, NULL)           /* For testing, remove later. */
        PHP_FE(bcm_cal,   NULL)       /* For testing, remove later. */
        PHP_FE_END      /* Must be the last line in iszmxw_functions[] */
};
```

**4、在次打开 iszmxw.c，在 `#include "php_iszmxw.h"` 下方加入以下内容。**

```c
// 添加引用一些声明
#include <stdio.h>
#include <stdlib.h>
#include <dlfcn.h>
#include "Cal.h"

typedef void (*ptr_fun)(Infor *in); //

```

**5、最后在 iszmxw.c 的最末尾书写`bcm_cal`函数的内容：**

```c
Infor infor;
/**
 * bcm_cal
 * */
PHP_FUNCTION(bcm_cal)
{
    void *handle;
    char *error;
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
        infor.gender = MALE;
    }
    else
    {
        infor.gender = FEMALE;
    }

    handle = dlopen("libbcm.so", RTLD_NOW);
    if (!handle)
    {
        printf("dlopen error !!!\r\n");
        exit(1);
    }
    dlerror();
    ptr_fun pf = (ptr_fun)dlsym(handle, "BCM_Cal");
    if (dlerror() != NULL)
    {
        printf("dlsym error!!!\r\n");
        exit(1);
    }
    pf(&infor);
    array_init(return_value);
    add_assoc_double(return_value, "BMI", infor.BMI);           // BMI 体格指数
    add_assoc_double(return_value, "PBF", infor.PBF);           // PBF体脂肪率
    add_assoc_double(return_value, "VFA", infor.VFA);           // VFA内脏脂肪指数
    add_assoc_double(return_value, "PBW", infor.PBW);           // PBW体水分率
    add_assoc_double(return_value, "SM", infor.SM);             // SM骨骼肌
    add_assoc_double(return_value, "BMC", infor.BMC);           // 骨矿含量
    add_assoc_double(return_value, "BMR", infor.BMR);           // 基础代谢
    add_assoc_double(return_value, "Protein", infor.Protein);   // 蛋白质
    add_assoc_double(return_value, "TBW", infor.TBW);           //总水分重量
    add_assoc_double(return_value, "Minerals", infor.Minerals); //无机盐
    add_assoc_double(return_value, "BFM", infor.BFM);           //脂肪重量
    add_assoc_double(return_value, "FFM", infor.FFM);           //去脂体重
    add_assoc_double(return_value, "BodyAge", infor.BodyAge);   //身体年龄
    add_assoc_double(return_value, "TotalScore", infor.TotalScore); //综合评分
    dlclose(handle); //关闭调用动态库句柄
}
```

> 最后将`Cal.h`传入到扩展的目录下面，保证引用不会出错
