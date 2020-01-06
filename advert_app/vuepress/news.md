# 新闻中心接口


::: tip 接口列表
> 1、新闻栏目列表</br>
> 2、新闻列表</br>
> 3、新闻详情</br>
:::


[[toc]]

## 1、新闻栏目列表


**URL.**
> 接口地址：http://127.0.0.1/api/app/news/category_list

**请求方式.**
> post | get

**请求参数.**

| 字段名 | 变量名 | 必填 | 类型   |
|--------|--------|------|--------|
| token  | token  | 否   | string |

**请求实例：：**

```json
{
  "token":"a6f4aa20308c11eab91b7470fdcb52a0"
}
```

**响应参数：**

| 字段名     | 变量名  | 类型    | 实例值 |
|------------|---------|---------|--------|
| 返回码     | code    | int     | 200    |
| 返回码含义 | message | varchar | OK     |
| 返回数据   | data    | varchar | array  |

**响应实例：：**

```json
{
    "code": 200,
    "message": "ok",
    "data": [
        {
            "id": 1,
            "category": "头条"
        },
        {
            "id": 2,
            "category": "新闻"
        },
        {
            "id": 3,
            "category": "国内"
        },
        {
            "id": 4,
            "category": "国际"
        },
        {
            "id": 5,
            "category": "政治"
        },
        {
            "id": 6,
            "category": "财经"
        },
        {
            "id": 7,
            "category": "体育"
        },
        {
            "id": 8,
            "category": "娱乐"
        },
        {
            "id": 9,
            "category": "军事"
        },
        {
            "id": 10,
            "category": "教育"
        },
        {
            "id": 11,
            "category": "科技"
        },
        {
            "id": 12,
            "category": "NBA"
        },
        {
            "id": 13,
            "category": "股票"
        },
        {
            "id": 14,
            "category": "星座"
        },
        {
            "id": 15,
            "category": "女性"
        },
        {
            "id": 16,
            "category": "健康"
        },
        {
            "id": 17,
            "category": "育儿"
        }
    ]
}
```

---


## 2、新闻列表


**URL.**
> 接口地址：http://127.0.0.1/api/app/news/news_list

**请求方式.**
> post | get

**请求参数.**

| 字段名   | 变量名      | 必填 | 类型   |
|----------|-------------|------|--------|
| token    | token       | 否   | string |
| 栏目id   | category_id | 否   | string |
| 第几页   | page        | 否   | string |
| 获取条数 | limit       | 否   | string |

**请求实例：：**

```json
{
  "token":"1dc747de308d11ea8f1f7470fdcb52a0",
  "page": 1,
  "limit":10
}
```

**响应参数：**

| 字段名     | 变量名  | 类型   | 实例值     |
|------------|---------|--------|------------|
| 返回码     | code    | int    | 200        |
| 返回码含义 | message | string | 登录成功！ |
| 返回数据   | data    | array  | []         |

**响应实例：：**

```json
{
    "code": 200,
    "message": "ok",
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 2523,
                "title": "明道哥哥自杀案细节曝光 疑用药物迷昏妻儿后勒毙",
                "images": [
                    "https://cms-bucket.ws.126.net/2020/0106/133352c9p00q3onlj002nc0009c005uc.png"
                ],
                "time": "2020-01-06 19:23:08",
                "readed": 0,
                "category_id": "1",
                "category": "头条",
                "author_name": "网易娱乐"
            },
            {
                "id": 2522,
                "title": "中国航发差距有多大：可靠性和维修性落后欧美60年",
                "images": [
                    "https://n.sinaimg.cn/mil/677/w429h248/20200106/0c2f-imrkkfy2104462.jpg"
                ],
                "time": "2020-01-06 11:12:00",
                "readed": 0,
                "category_id": "1",
                "category": "头条",
                "author_name": "新浪军事"
            },
            {
                "id": 2521,
                "title": "医生误开癫痫药给女童 院方:医生是人不是神 会处理",
                "images": [
                    "https://cms-bucket.ws.126.net/2020/0106/05901f12p00q3ophd002qc0009c005uc.png"
                ],
                "time": "2020-01-06 20:04:19",
                "readed": 0,
                "category_id": "1",
                "category": "头条",
                "author_name": "梨视频"
            },
            {
                "id": 2520,
                "title": "又一涉秦岭违建问题干部被通报：18年间收700余万",
                "images": [
                    "https://cms-bucket.ws.126.net/2020/0106/1536bf13p00q3opkl002vc0009c005uc.png"
                ],
                "time": "2020-01-06 20:05:18",
                "readed": 0,
                "category_id": "1",
                "category": "头条",
                "author_name": "澎湃新闻"
            },
            {
                "id": 2519,
                "title": "苏莱曼尼遇刺伊朗清真寺升起血红色旗帜 是何含义?",
                "images": [
                    "https://cms-bucket.ws.126.net/2020/0106/972cea8ap00q3op860020c0009c005uc.png"
                ],
                "time": "2020-01-06 19:58:01",
                "readed": 0,
                "category_id": "1",
                "category": "头条",
                "author_name": "澎湃新闻"
            },
            {
                "id": 2518,
                "title": "蓬佩奥为解释美军对伊行为连上5个专访 接连翻车",
                "images": [
                    "https://n.sinaimg.cn/spider202016/604/w1922h1082/20200106/36af-imrkkfy3273920.jpg"
                ],
                "time": "2020-01-06 15:48:10",
                "readed": 0,
                "category_id": "1",
                "category": "头条",
                "author_name": "观察者网"
            },
            {
                "id": 2517,
                "title": "伊拉克总理刚刚披露的两个信息，让美国形象瞬间雪崩",
                "images": [
                    "https://n.sinaimg.cn/sinacn20200106s/611/w428h183/20200106/ddbf-imrkkfy3491442.jpg"
                ],
                "time": "2020-01-06 16:32:00",
                "readed": 0,
                "category_id": "1",
                "category": "头条",
                "author_name": "环球时报"
            },
            {
                "id": 2516,
                "title": "76岁李谷一获聘为\"湖南省文史馆馆员\" 省长发聘书",
                "images": [
                    "https://cms-bucket.ws.126.net/2020/0106/572e1b4dp00q3oocu002pc0009c005uc.png"
                ],
                "time": "2020-01-06 19:39:04",
                "readed": 0,
                "category_id": "1",
                "category": "头条",
                "author_name": "长安街知事"
            },
            {
                "id": 2515,
                "title": "蔡英文台南辅选现场人数突破15万 一张图曝光真相",
                "images": [
                    "https://n.sinaimg.cn/spider202016/200/w600h400/20200106/16e9-imrkkfy2790304.jpg"
                ],
                "time": "2020-01-06 13:35:00",
                "readed": 0,
                "category_id": "1",
                "category": "头条",
                "author_name": "中国台湾网"
            },
            {
                "id": 2514,
                "title": "苏莱马尼葬礼举行 伊朗最高领导人含泪祈祷(图)",
                "images": [
                    "https://n.sinaimg.cn/spider202016/420/w786h434/20200106/cc1b-imrkkfy2932065.jpg"
                ],
                "time": "2020-01-06 14:34:00",
                "readed": 0,
                "category_id": "1",
                "category": "头条",
                "author_name": "澎湃新闻"
            },
            {
                "id": 2513,
                "title": "550公里高速通行费3870元？收费员:不知有两同名站",
                "images": [
                    "https://cms-bucket.ws.126.net/2020/0106/d4af2b09p00q3odqi003dc0009c005uc.png"
                ],
                "time": "2020-01-06 15:50:29",
                "readed": 0,
                "category_id": "1",
                "category": "头条",
                "author_name": "905交通广播"
            },
            {
                "id": 2512,
                "title": "广州地陷第36天:53岁失联者遗体在地下21米处找到",
                "images": [
                    "https://cms-bucket.ws.126.net/2020/0106/537ddfedp00q3omb0003ic0009c005uc.png"
                ],
                "time": "2020-01-06 18:56:04",
                "readed": 0,
                "category_id": "1",
                "category": "头条",
                "author_name": "上游新闻"
            },
            {
                "id": 2511,
                "title": "支付宝年度账单来了 网友：我哪儿来这么多钱？",
                "images": [
                    "https://n.sinaimg.cn/tech/transform/667/w400h267/20200106/baee-imrkkfy2114344.jpg"
                ],
                "time": "2020-01-06 10:31:00",
                "readed": 0,
                "category_id": "1",
                "category": "头条",
                "author_name": "中国新闻网"
            },
            {
                "id": 2510,
                "title": "即将临盆孕妇离家出走 已失联百余小时",
                "images": [
                    "https://n.sinaimg.cn/baby/transform/500/w300h200/20200106/c215-imrkkfy3142949.jpg"
                ],
                "time": "2020-01-06 15:20:00",
                "readed": 0,
                "category_id": "1",
                "category": "头条",
                "author_name": "澎湃新闻"
            },
            {
                "id": 2509,
                "title": "乳牙磕伤不用管？专家：会影响恒牙发育",
                "images": [
                    "https://n.sinaimg.cn/baby/transform/500/w300h200/20200103/6e00-imrkkfx1296783.jpg"
                ],
                "time": "2020-01-06 14:45:00",
                "readed": 0,
                "category_id": "1",
                "category": "头条",
                "author_name": "信息时报"
            }
        ],
        "first_page_url": "http://advert.test/api/app/news/news_list?page=1",
        "from": 1,
        "last_page": 169,
        "last_page_url": "http://advert.test/api/app/news/news_list?page=169",
        "next_page_url": "http://advert.test/api/app/news/news_list?page=2",
        "path": "http://advert.test/api/app/news/news_list",
        "per_page": 15,
        "prev_page_url": null,
        "to": 15,
        "total": 2523
    }
}
```

---


## 3、新闻详情


**URL.**
> 接口地址：http://127.0.0.1/api/app/news/news_detail

**请求方式.**
> post | get

**请求参数.**

| 字段名 | 变量名 | 必填 | 类型   |
|--------|--------|------|--------|
| token  | token  | 否   | string |
| 文章id | id     | 是   | string |

**请求实例：：**

```json
{
  "token":"1dc747de308d11ea8f1f7470fdcb52a0",
  "id":2523
  
}
```

**响应参数：**

| 字段名     | 变量名  | 类型    | 实例值 |
|------------|---------|---------|--------|
| 返回码     | code    | int     | 200    |
| 返回码含义 | message | varchar | ok     |
| 返回数据   | data    | array   | []     |

**响应实例：：**

```json
{
    "code": 200,
    "message": "ok",
    "data": {
        "id": 2523,
        "category_id": "1",
        "uniquekey": null,
        "title": "明道哥哥自杀案细节曝光 疑用药物迷昏妻儿后勒毙",
        "date": "2020-01-06 19:23:08",
        "category": "头条",
        "author_name": "网易娱乐",
        "url": "http://3g.163.com/ent/20/0106/19/F27TSLJH00038FO9.html",
        "images": "[\"https:\\/\\/cms-bucket.ws.126.net\\/2020\\/0106\\/133352c9p00q3onlj002nc0009c005uc.png\"]",
        "content": "<div class=\"content\">\n            <div class=\"page js-page on\">\n              <div class=\"photo\">\n                  <a href=\"http://cms-bucket.ws.126.net/2020/0106/f9fd2475p00q3onl100hgc000kf00dwc.png\">\n                      <img alt=\"\" src='http://cms-bucket.ws.126.net/2020/0106/f9fd2475p00q3onl100hgc000kf00dwc.png'>\n                      <span></span>\n                  </a>\n              </div><div class=\"photo\">\n                  <a href=\"http://cms-bucket.ws.126.net/2020/0106/f87e5238p00q3onfx00iqc000g500bgc.png\">\n                      <img alt=\"\" src='http://cms-bucket.ws.126.net/2020/0106/f87e5238p00q3onfx00iqc000g500bgc.png'>\n                      <span></span>\n                  </a>\n              </div><p><b>网易娱乐1月6日报道</b>  据台媒，艺人明道的林姓胞兄5日被发现陈尸在台北内湖山区，警方到场发现，一旁树下还有已遭林勒毙的妻儿。检警自林的手机发现有疑似欠债250万台币遭黑道追讨讯息，加上家中有交代后事纸条，研判他勒毙妻儿后轻生，至于3人死因及轻生原因、是否加工自杀，士林地检署6日相验遗体调查。</p><p>民众昨天下午1时向警方报案，指内湖安泰街土地公庙后方登山步道，有男子轻生。警察消防赶往现场，在树旁又发现1名妇人与男童，2人被毯子盖住，脖子上有勒痕，3人遗体均已僵硬。</p><p><b>传讯友人 称早就不想活</b></p><p>警方从男子的包包找到证件，查出他是42岁林姓男子，另2名死者是他40岁妻子与12岁儿子，通知家属发现，林竟是艺人明道的胞兄，近年曾经因欠债闹上新闻。警察勘验，林的妻儿脖子有疑似束带的勒痕，一旁有保温瓶与矿泉水，2人并肩躺在一起，盖著毯子，3人共乘的机车则停在土地公庙旁。因现场无打斗迹象，初步研判是林先勒毙妻儿再轻生。至于有无先在水里下药迷昏妻儿后再行凶、或加工自杀，尚待化验查清。</p><p>警方在林的手机查出他给友人的讯息，提到他欠了约250万赌债，无力偿还且遭黑道追讨，“早就不想活了...”，是否林因被逼债走投无路，绝望带著妻儿轻生，警方仍在查证。</p><p><b>告知父去爬山 再无音讯</b></p><p>警方通知林的家属前往指认，林的七旬老父虽已行动不便，仍在亲友陪同下至现场悲痛认尸。林父告诉警方，他夫妻与儿子一家同住内湖，知道儿子在外有欠债，虽有投资店面当二房东收租，但入不敷出，过得很辛苦。</p><p>林4日下午传简讯给父亲，告知要带妻小去爬山，就没再回家。林手机有地图查询纪录，也在登山口拍了土地公庙的照片传给父亲，警方昨漏夜调阅监视画面，查清3人前往山区的路线。警方也在林家中找到几张他交代后事的纸条，研判他有轻生念头。</p><p>明道昨也接获警方通知，但因他有急事，并未前往认尸、製作笔录。仅透过公司发出声明表示，非常震惊与难过！将尽力协助检警查清真相，安慰家人。</p>\n              <div class=\"otitle_editor\">\n \n                <p class=\"editor\">(责任编辑：韩冲_NBJ11345)</p>\n              </div>\n            </div>\n          </div>\n        </div>",
        "readed": 0,
        "created_at": "1578315579",
        "updated_at": "1578315579",
        "deleted_at": null
    }
}
```

---