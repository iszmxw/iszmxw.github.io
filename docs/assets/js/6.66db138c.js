(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{178:function(t,s,a){"use strict";a.r(s);var v=a(0),_=Object(v.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"广告"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#广告","aria-hidden":"true"}},[t._v("#")]),t._v(" 广告")]),t._v(" "),a("h2",{attrs:{id:"广告获取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#广告获取","aria-hidden":"true"}},[t._v("#")]),t._v(" 广告获取")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("接口描述")]),t._v(" "),a("p",[t._v("获取广告接口，通过此接口可以获取到广告数据，需要传入一些字段")])]),t._v(" "),a("p",[a("strong",[t._v("URL.")])]),t._v(" "),a("blockquote",[a("p",[t._v("接口地址：http://ad.10wan.ren/open/iszmxw/get_ad")])]),t._v(" "),a("p",[a("strong",[t._v("请求方式.")])]),t._v(" "),a("blockquote",[a("p",[t._v("post | get")])]),t._v(" "),a("p",[a("strong",[t._v("请求参数.")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名")]),t._v(" "),a("th",[t._v("变量名")]),t._v(" "),a("th",[t._v("必填")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("实例值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("设备UUID")]),t._v(" "),a("td",[t._v("device_uuid")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("3e3add4a720c11e9ab2100163e0488d6")]),t._v(" "),a("td",[t._v("设备的对应UUID")])]),t._v(" "),a("tr",[a("td",[t._v("开发者APPID")]),t._v(" "),a("td",[t._v("develop_appid")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("jbh200453e0488d6")]),t._v(" "),a("td",[t._v("合作商开发者的appid")])]),t._v(" "),a("tr",[a("td",[t._v("时间戳")]),t._v(" "),a("td",[t._v("timestamp")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("1557200022")]),t._v(" "),a("td",[t._v("用于签名的时间戳")])]),t._v(" "),a("tr",[a("td",[t._v("随机字符串")]),t._v(" "),a("td",[t._v("nonce")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("123456")]),t._v(" "),a("td",[t._v("用于签名的随机字符串")])]),t._v(" "),a("tr",[a("td",[t._v("签名")]),t._v(" "),a("td",[t._v("sign")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("e06416850b0439ec3bf57443b6db92fd")]),t._v(" "),a("td",[t._v("签名后的字符串，获取方式详见接口权限文档")])]),t._v(" "),a("tr",[a("td",[t._v("lng")]),t._v(" "),a("td",[t._v("lng")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("varchar")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("oleiaYv6i50I7ADTlmIGN4WO-2RGM")]),t._v(" "),a("td",[t._v("设备的lng")])]),t._v(" "),a("tr",[a("td",[t._v("lat")]),t._v(" "),a("td",[t._v("lat")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("varchar")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("设备的lat")])]),t._v(" "),a("tr",[a("td",[t._v("ad_num")]),t._v(" "),a("td",[t._v("ad_num")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("12")]),t._v(" "),a("td",[t._v("请求广告的数量")])])])]),t._v(" "),a("p",[a("strong",[t._v("请求实例：：")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"device_uuid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3e3add4a720c11e9ab2100163e0488d6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"develop_appid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jbh200453e0488d6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timestamp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1557200022")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nonce"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jbh12345"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sign"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e06416850b0439ec3bf57443b6db92fd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lng"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lat"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sex"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ad_num"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("响应参数：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名")]),t._v(" "),a("th",[t._v("变量名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("实例值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("返回码")]),t._v(" "),a("td",[t._v("code")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("200")]),t._v(" "),a("td",[t._v("接口返回状态")])]),t._v(" "),a("tr",[a("td",[t._v("返回码含义")]),t._v(" "),a("td",[t._v("message")]),t._v(" "),a("td",[t._v("varchar")]),t._v(" "),a("td",[t._v("OK")]),t._v(" "),a("td",[t._v("接口返回状态说明")])]),t._v(" "),a("tr",[a("td",[t._v("返回数据")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("接口返回的数据")])]),t._v(" "),a("tr",[a("td",[t._v("开发者appid")]),t._v(" "),a("td",[t._v("appid")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("ad1f5d4bc06f19b")]),t._v(" "),a("td",[t._v("开发者传入的appid")])]),t._v(" "),a("tr",[a("td",[t._v("开发者appkey")]),t._v(" "),a("td",[t._v("appkey")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("a9404de85f62c037360e1be873134a00")]),t._v(" "),a("td",[t._v("开发者传入的appkey")])]),t._v(" "),a("tr",[a("td",[t._v("请求数据的签名")]),t._v(" "),a("td",[t._v("sign")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("74df3901db4d71c8a7146ef4cfcce5a4")]),t._v(" "),a("td",[t._v("开发者传入的sign")])]),t._v(" "),a("tr",[a("td",[t._v("广告信息")]),t._v(" "),a("td",[t._v("adinfo")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("接口返回的广告信息")])]),t._v(" "),a("tr",[a("td",[t._v("广告id")]),t._v(" "),a("td",[t._v("ad_id")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("7")]),t._v(" "),a("td",[t._v("广告id")])]),t._v(" "),a("tr",[a("td",[t._v("上报地址")]),t._v(" "),a("td",[t._v("track_url")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("http://ad.10wan.ren/open/ads/track/a93349874847c1d3da6.vue")]),t._v(" "),a("td",[t._v("广告上报地址，播放完了即可上报")])]),t._v(" "),a("tr",[a("td",[t._v("广告类型")]),t._v(" "),a("td",[t._v("type")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("IMAGE")]),t._v(" "),a("td",[t._v("IMAGE、VIDEO返回的广告类型，只有视频和图片")])]),t._v(" "),a("tr",[a("td",[t._v("广告宽")]),t._v(" "),a("td",[t._v("width")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("544")]),t._v(" "),a("td",[t._v("广告的宽")])]),t._v(" "),a("tr",[a("td",[t._v("广告高")]),t._v(" "),a("td",[t._v("height")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("352")]),t._v(" "),a("td",[t._v("广告的高")])]),t._v(" "),a("tr",[a("td",[t._v("过期时间")]),t._v(" "),a("td",[t._v("expire_time")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("300")]),t._v(" "),a("td",[t._v("广告的过期时间")])]),t._v(" "),a("tr",[a("td",[t._v("广告地址")]),t._v(" "),a("td",[t._v("url")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("http://files.fensiwansui.com/images/15673929631589.jpg")]),t._v(" "),a("td",[t._v("广告播放地址")])]),t._v(" "),a("tr",[a("td",[t._v("文件hash")]),t._v(" "),a("td",[t._v("hash")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("d8d647dbd71fc6c1c35e8ea982117d51")]),t._v(" "),a("td",[t._v("文件hash")])])])]),t._v(" "),a("p",[a("strong",[t._v("响应实例：：")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OK"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"appid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ad1f5d4bc06f19b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"appkey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a9404de85f62c037360e1be873134a00"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sign"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"74df3901db4d71c8a7146ef4cfcce5a4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"adinfo"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ad_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"track_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://ad.10wan.ren/open/ads/track/a9334987ece78b6fe8bf130ef00b74847c1d3da6.vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"width"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("544")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"height"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("352")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expire_time"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IMAGE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hash"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d8d647dbd71fc6c1c35e8ea982117d51"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://files.fensiwansui.com/images/15673929631589.jpg"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ad_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"track_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://ad.10wan.ren/open/ads/track/b7eb6c689c037217079766fdb77c3bac3e51cb4c.vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"width"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1280")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"height"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("740")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expire_time"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IMAGE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hash"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d382cbcbdc060f944256228c9a2033b2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://files.fensiwansui.com/images/15675600195032.jpg"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            ......\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"广告上报"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#广告上报","aria-hidden":"true"}},[t._v("#")]),t._v(" 广告上报")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("接口描述")]),t._v(" "),a("p",[t._v("广告上报，获取广告播放完广告进行广告上报，证明已经播放完成了")])]),t._v(" "),a("p",[a("strong",[t._v("URL.")])]),t._v(" "),a("blockquote",[a("p",[t._v("此地址仅供参考，请以实际返回的地址为准")]),t._v(" "),a("p",[t._v("接口地址：http://ad.10wan.ren/open/ads/track/a93349874847c1d3da6.vue")])]),t._v(" "),a("p",[a("strong",[t._v("请求方式.")])]),t._v(" "),a("blockquote",[a("p",[t._v("post | get")])]),t._v(" "),a("p",[a("strong",[t._v("请求参数.")])]),t._v(" "),a("blockquote",[a("p",[t._v("无需携带参数，直接请求即可")])]),t._v(" "),a("p",[a("strong",[t._v("响应参数：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名")]),t._v(" "),a("th",[t._v("变量名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("实例值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("返回码")]),t._v(" "),a("td",[t._v("code")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("200")]),t._v(" "),a("td",[t._v("接口返回状态")])]),t._v(" "),a("tr",[a("td",[t._v("返回码含义")]),t._v(" "),a("td",[t._v("message")]),t._v(" "),a("td",[t._v("varchar")]),t._v(" "),a("td",[t._v("OK")]),t._v(" "),a("td",[t._v("接口返回状态说明")])])])]),t._v(" "),a("p",[a("strong",[t._v("响应实例：：")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"上报成功"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=_.exports}}]);