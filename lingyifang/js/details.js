$(function(){
    selectgoods();
    
});
//添加商品购物车
function cart_add(obj,e) {
    stopPropagation(e);
    $.showIndicator();
    var url = $("#shopping_cart_add").val();
    var $this = $(obj);
    var goods_id = $this.data("goodsid");
    var goods_name = $this.data("goodsname");
    var stock = $this.data("goodsstock");
    var goods_thumb = $this.data("goodsthumb");
    var goods_price = $this.data("goodsprice");
    var weight = $this.data("goodsweight");
    var freight_price = $this.data("goodsfreight_price");
    var fansmanage_id = $("#fansmanage_id").val();//联盟主组织ID
    var _token = $("#_token").val();
    var store_id = $("#store_id").val();//店铺ID
    var zerone_user_id = $("#zerone_user_id").val();//用户零壹ID
    var user_id = $("#shop_user_id").val();//用户店铺ID
    var data = {
        fansmanage_id: fansmanage_id,
        zerone_user_id: zerone_user_id,
        user_id: user_id,
        store_id: store_id,
        goods_id: goods_id,
        goods_price: goods_price,
        goods_name: goods_name,
        goods_thumb: goods_thumb,
        weight: weight,
        freight_price: freight_price,
        num: 1,
        stock: stock,
        _token: _token
    };
    $.post(
        url,
        data,
        function (json) {
            console.log(json);
            if (json.status == 1) {
                //删除点击加号按钮的当前状态
                $(".cart_border").removeClass('action');
                //添加点击加号按钮的当前状态
                $this.parent().addClass('action');
                //等于数量1的情况下显示数量和减号按钮
                if (json.data.num == 1) {
                    $this.parent().addClass('cart_border');
                    $this.parent().children('a').removeClass('gs_hide').addClass('gs_show');
                }
                //设置点击数量
                $(".goods_id" + json.data.goods_id).text(json.data.num);
                //购物车总价格
                totalprice(json.data.goods_price, true);
                //购物车总数
                totalnum(1, true);
                //库存减一
                var stock_add = $("#stock"+json.data.goods_id).text();
                $("#stock"+json.data.goods_id).text(--stock_add);
                $.hideIndicator();
            } else if (json.status == 0) {
                alert(json.msg);
                $.hideIndicator();
            }
        }
    );
}

//减少商品购物车
function cart_reduce(obj,status,e) {
    stopPropagation(e);
    //status 判断事件是在购物车里面执行
    $.showIndicator();
    var url = $("#shopping_cart_reduce").val();
    var $this = $(obj);
    var goods_id = $this.data("goodsid");
    var goods_name = $this.data("goodsname");
    var stock = $this.data("goodsstock");
    var goods_thumb = $this.data("goodsthumb");
    var goods_price = $this.data("goodsprice");
    var freight_price = $this.data("goodsfreight_price");
    var weight = $this.data("goodsweight");
    var fansmanage_id = $("#fansmanage_id").val();//联盟主组织ID
    var _token = $("#_token").val();
    var store_id = $("#store_id").val();//店铺ID
    var zerone_user_id = $("#zerone_user_id").val();//用户零壹ID
    var user_id = $("#shop_user_id").val();//用户店铺ID
    var data = {
        fansmanage_id: fansmanage_id,
        zerone_user_id: zerone_user_id,
        user_id: user_id,
        store_id: store_id,
        goods_id: goods_id,
        goods_price: goods_price,
        goods_name: goods_name,
        goods_thumb: goods_thumb,
        freight_price: freight_price,
        weight: weight,
        num: 1,
        stock: stock,
        _token: _token
    };
    $.post(
        url,
        data,
        function (json) {
            if (json.status == 1) {
                //数量小于的情况下显示数量和减号按钮
                if (json.data.num == 0) {
                    //数量为0隐藏减号和数量按钮
                    $this.removeClass('gs_show').addClass('gs_hide');
                    $this.next().removeClass('gs_show').addClass('gs_hide');
                    //在购物车点击减号按钮的情况下隐藏商品列表减号和数量按钮
                    $(".goods_id" + json.data.goods_id).removeClass('gs_show').addClass('gs_hide');
                    $(".goods_id" + json.data.goods_id).prev().removeClass('gs_show').addClass('gs_hide');
                    $(".goods_id" + json.data.goods_id).parent().removeClass('cart_border').addClass('action');
                }
                //购物车减到0的时候remove li
                if (json.data.num == 0 && status) {
                    $this.closest('li').remove();
                }
                //设置点击数量
                $(".goods_id" + json.data.goods_id).text(json.data.num);
                //购物车总价格
                totalprice(json.data.goods_price, false);
                //购物车总数
                totalnum(1, false);
                //库存添加
                var stock_del = $("#stock"+json.data.goods_id).text();
                $("#stock"+json.data.goods_id).text(++stock_del);
                $.hideIndicator();
            } else if (json.status == 0) {
                alert(json.msg);
                $.hideIndicator();
            }
        }
    );
}
//清空购物车
function cart_empty() {
    $.showIndicator();
    var url = $("#shopping_cart_empty").val();
    var fansmanage_id = $("#fansmanage_id").val();//联盟主组织ID
    var _token = $("#_token").val();
    var store_id = $("#store_id").val();//店铺ID
    var zerone_user_id = $("#zerone_user_id").val();//用户零壹ID
    var user_id = $("#shop_user_id").val();//用户店铺ID
    var data = {
        fansmanage_id: fansmanage_id,
        zerone_user_id: zerone_user_id,
        user_id: user_id,
        store_id: store_id,
        _token: _token
    };
    $.post(
        url,
        data,
        function (json) {
            if (json.status == 1) {
                $.toast("清空成功");
                location.reload();
                // //隐藏购物车的减号按钮
                // $(".delect_cart_btn").each(function (index, el) {
                //     var $this = $(this);
                //     $this.removeClass("gs_show").addClass('gs_hide');
                //     if ($this.parent().hasClass('cart_border')) {
                //         $this.parent().removeClass('cart_border').addClass('action');
                //     }
                // });
                // //清空商品列表的数量
                // $(".delect_cart_inpt").each(function (index, el) {
                //     var $this = $(this);
                //     $this.removeClass("gs_show").addClass('gs_hide');
                //     $this.text("0");
                //     if ($this.parent().hasClass('cart_border')) {
                //         $this.parent().removeClass('cart_border').addClass('action');
                //     }
                // });
                // //清空购物车总数
                // $("#goods_totalnum").text("0");
                // $("#goods_totalnum").attr('data-totalnum', '0');
                // //清空价格
                // var _this = $("#cart_price");
                // _this.attr('data-totalprice', "0");
                // _this.html("您还未选购商品哦~");
                // //隐藏提示框
                // hide('alert');
                // //隐藏购物车
                // $("#cart").click();
                // $.hideIndicator();
                // $.toast("清空成功");
            } else if (json.status == 0) {
                alert(json.msg);
            }
        }
    );
}
//商品
function goods_box(name, details, stock, price, thumb, number, goods_id, weight, freight_price) {
    var url = $("#request").val();
    var str = "";
    //购物车存在商品数量显示数量和减号
    if (number > 0) {
        str +='<a href="javascript:;" class="cart_box delect_cart_btn gs_show"' +
            'data-goodsid="' + goods_id + '"' +
            'data-goodsname="' + name + '"' +
            'data-goodsstock="' + stock + '"' +
            'data-goodsweight="' + weight + '"' +
            'data-goodsfreight_price="' + freight_price + '"' +
            'data-goodsthumb="' + url + '/' + thumb + '"' +
            'data-goodsprice="' + price + '" onclick="cart_reduce(this)">-</a>' +
            '<a href="javascript:;" class="cart_box delect_cart_inpt gs_show goods_id' + goods_id + '">' + number + '</a>';
    } else {
        str += '<div class="goods_btn action">' +
            '<a href="javascript:;" class="cart_box delect_cart_btn gs_hide"' +
            'data-goodsid="' + goods_id + '"' +
            'data-goodsname="' + name + '"' +
            'data-goodsstock="' + stock + '"' +
            'data-goodsthumb="' + url + '/' + thumb + '"' +
            'data-goodsprice="' + price + '" onclick="cart_reduce(this)">-</a>' +
            '<a href="javascript:;" class="cart_box delect_cart_inpt gs_hide goods_id' + goods_id + '"">' + number + '</a>';
    }


    str += '<a href="javascript:;" class="cart_box add_cart_btn"' +
        'data-goodsid="' + goods_id + '"' +
        'data-goodsname="' + name + '"' +
        'data-goodsstock="' + stock + '"' +
        'data-goodsweight="' + weight + '"' +
        'data-goodsfreight_price="' + freight_price + '"' +
        'data-goodsthumb="' + url + '/' + thumb + '"' +
        'data-goodsprice="' + price + '" onclick="cart_add(this)">+</a>';
    return str;
}
//购物车总价格
function totalprice(price, status) {
    //del判断是减少商品还是添加,true为添加
    var $this = $("#cart_price");
    var old_price = $this.data("totalprice");
    var total;
    if (status) {
        total = accAdd(price, old_price);
    } else {
        total = accSub(old_price, price);
    }
    //记录总价格的值
    $this.attr('data-totalprice', Number(total).toFixed(2));
    $this.html("金额总计<em>&yen;" + Number(total).toFixed(2) + "</em>");
}

//购物车总数
function totalnum(count, status) {
    //del判断是减少商品还是添加,true为添加
    var $this = $("#goods_totalnum");
    var old_num = $this.data("totalnum");
    var total = (status == true) ? parseInt(count) + parseInt(old_num) : parseInt(old_num) - parseInt(count);
    //记录总价格的值
    $this.attr('data-totalnum', total);
    $this.text(total);
    //购物车弹出状态的total(两个)
    $("#total").attr('data-totalnum', total);
    $("#total").text(total);
}
function addVal(name,price,details,thumb){
    $("#goodsname").text(name);
    $("#goodsprice").html("&yen"+price);
    if (thumb.length >= 0) {
        var url = $("#request").val();
        var str = "";
        var photos = [];
        for(var i = 0; i <= thumb.length -1; i++){
            str +='<div class="swiper-slide">'+
                        '<a href="javascript:;"><img src="' + url + '/' + thumb[i].thumb + '"></a>'+
                    '</div>';
            photos.push(url + '/' + thumb[i].thumb);
        }
        $("#swiper-wrapper").append(str);
        /*=== 默认为 standalone ===*/
          var myPhotoBrowserStandalone_swiper = $.photoBrowser({
              photos : photos
          });
          //点击时打开图片浏览器
          $(document).on('click','#swiper-wrapper',function () {
            myPhotoBrowserStandalone_swiper.open();
          });
    }
    $("#goodsneirong").html(details);
    $("#goodsneirong p").each(function(){
        if ($(this).find('br').length || $(this).find('br').length == 0) {
            $(this).find('br').remove();
        }
    });
    //匹配图片（g表示匹配所有结果i表示区分大小写）
    var imgReg = /<img.*?(?:>|\/>)/gi;
    //匹配src属性
    var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
    var arr = details.match(imgReg);
    if (arr) {
        console.log(arr);
        var photos1 = [];
        for (var i = 0; i < arr.length; i++) {
             var src = arr[i].match(srcReg);
             //获取图片地址
             photos1.push(src[1]);
         }
         /*=== 默认为 standalone ===*/
           var myPhotoBrowserStandalone = $.photoBrowser({
               photos : photos1
           });
           //点击时打开图片浏览器
           $(document).on('click','#goodsneirong',function () {
             myPhotoBrowserStandalone.open();
           });
    }
    var swiper =  new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            renderFraction: function(currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' + '/' + '<span class="' + totalClass + '"></span>';
            },
        },
         autoplay: {
            disableOnInteraction: false,
          }, 
             paginationClickable:true,
    //          loop:true
     });

}
//跳转提交订单
function order() {
    var url = $("#order").val();
    var totalnum = $("#goods_totalnum").text();
    if (totalnum > 0) {
        window.location.href = url;
    } else {
        $.toast("您还没选购商品喔~~");
    }
}
//查询商品和购物车列表
function selectgoods(){
    $.showIndicator();
    //获取购物车商品
    var fansmanage_id = $("#fansmanage_id").val();//联盟主组织ID
    var _token = $("#_token").val();
    var store_id = $("#store_id").val();//店铺ID
    var total_price = 0;//购物车总价格
    var cart_list_url = $("#shopping_cart_list").val();
    var shop_user_id = $("#shop_user_id").val();//用户店铺ID
    var zerone_user_id = $("#zerone_user_id").val();//用户零壹ID

    $.ajax({
        url: cart_list_url,    //请求的url地址
        dataType: "json",   //返回格式为json
        async: false, //请求是否异步，默认为异步，这也是ajax重要特性
        data: {
            'fansmanage_id': fansmanage_id,
            '_token': _token,
            'store_id': store_id,
            'user_id': shop_user_id,
            'zerone_user_id': zerone_user_id
        },    //参数值
        type: "POST",   //请求方式
        beforeSend: function () {
            //请求前的处理
        },
        success: function (json) {
            if (json.status == 1) {
                var str = "";
                var cart_num = [];
                for (var i = 0; i <= json.data.goods_list.length - 1; i++) {
                    str += cart_list_box(json.data.goods_list[i].goods_name, json.data.goods_list[i].goods_price,
                        json.data.goods_list[i].num, json.data.goods_list[i].goods_id, json.data.goods_list[i].stock,
                        json.data.goods_list[i].goods_thumb, json.data.goods_list[i].weight,
                        json.data.goods_list[i].freight_price);
                    //计算购物车总价格
                    total_price += accMul(json.data.goods_list[i].goods_price, json.data.goods_list[i].num);
                    //记录购物车列表数量,渲染商品列表赋值商品列表存在购物车的数量
                    cart_num[json.data.goods_list[i].goods_id] = json.data.goods_list[i].num;
                }
                //购物车总价格
                var _this = $("#cart_price");
                _this.attr('data-totalprice', Number(total_price).toFixed(2));//记录总价格的值
                _this.html("金额总计<em>&yen;" + Number(total_price).toFixed(2) + "</em>");
                //购物车总数
                var total = json.data.total;
                var _this1 = $("#goods_totalnum");
                _this1.attr('data-totalnum', total);
                _this1.text(total);
                //购物车弹出状态的total(两个)
                var _this2 = $("#total");
                _this2.attr('data-totalnum', total);
                _this2.text(total);
                //购物车列表渲染
                var $cart_list = $("#cart_list");
                $cart_list.empty();
                $cart_list.append(str);
            } else if (json.status == 0) {
                console.log(json.msg);
            }
            //获取商品列表
            var url = $("#goods_detail_url").val();
            var goods_id = getUrlParam("goodsId");
            if (!goods_id) {
                return;
            }
            $.post(
                url,
                {'goods_id': goods_id, 'store_id': store_id, '_token': _token},
                function (json) {
                    console.log(json, "商品详情");
                    if (json.status == 1) {
                        var number = 0;
                        if (cart_num && cart_num[json.data.goods.id]) {
                            number = cart_num[json.data.goods.id];
                        }
                        var name = json.data.goods.name;
                        var details = (json.data.goods.details) ? json.data.goods.details : "";
                        var freight_price = json.data.goods.freight_price;
                        var id = json.data.goods.id;
                        var price = json.data.goods.price;
                        var stock = json.data.goods.stock;
                        var thumb = json.data.goods.thumb;
                        var weight = json.data.goods.weight;
                        var str_goods_box = goods_box(name, details, stock, price, thumb, number, id, weight, freight_price);
                        $("#str_goods_box").append(str_goods_box);
                        addVal(name,price,details,thumb);
                        $.hideIndicator();
                    } else if (json.status == 0) {
                        console.log(json.msg);
                    }
                }
            );
        },complete: function () {
             
        },
        error: function () {
            //alert(JSON.stringify(json));
        }
    });
}
//调用：accMul(arg1,arg2)
//返回值：arg1乘以arg2的精确结果 
function accMul(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length;
    }
    catch (e) {
    }
    try {
        m += s2.split(".")[1].length;
    }
    catch (e) {
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}

//调用：accAdd(arg1,arg2)
//返回值：arg1加上arg2的精确结果  
function accAdd(arg1, arg2) {

    var r1, r2, m, c;

    try {
        r1 = arg1.toString().split(".")[1].length
    } catch (e) {
        r1 = 0
    }

    try {
        r2 = arg2.toString().split(".")[1].length
    } catch (e) {
        r2 = 0
    }

    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
        var cm = Math.pow(10, c);
        if (r1 > r2) {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", "")) * cm;
        }
        else {
            arg1 = Number(arg1.toString().replace(".", "")) * cm;
            arg2 = Number(arg2.toString().replace(".", ""));
        }
    }
    else {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", ""));
    }
    return (arg1 + arg2) / m;
}

function accSub(arg1, arg2) {
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split(".")[1].length
    } catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2));
    //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}
//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}
//隐藏alert
// $("#alert").click(function(e){
//     stopPropagation(e);
//     if(!$(e.target).is(".popup_alert_hook *") && !$(e.target).is(".popup_alert_hook")){
//         $(".popup_alert_hook").removeClass('fadeInUp').addClass("fadeOutDown");
//            setTimeout(function(){
//               $(".popup_alert").css({display: 'none'});
//          },250);
//     }
// });
//因为冒泡了，会执行到下面的方法。
function stopPropagation(e) {
    var ev = e || window.event;
    if (ev.stopPropagation) {
        ev.stopPropagation();
    }
    else if (window.event) {
        window.event.cancelBubble = true;//兼容IE
    }
}

function show(obj) {
    $("#" + obj).css({display: 'flex'});
    $("#" + obj + " .popup_alert_hook").addClass('fadeInUp');
}

function hide(obj) {
    $("#" + obj).css({display: 'none'});
    $("#" + obj + " .popup_alert_hook").removeClass('fadeInUp').addClass("fadeOutDown");
}

function showcart(obj, em) {
    var goods_totalnum = $("#goods_totalnum").text();
    if (goods_totalnum <= 0) {
        $.toast("请先选购商品");
        return;
    }
    $.showIndicator();
    //获取购物车商品
    var total_price = 0;//购物车总价格
    var fansmanage_id = $("#fansmanage_id").val();//联盟主组织ID
    var _token = $("#_token").val();
    var store_id = $("#store_id").val();//店铺ID
    var cart_list_url = $("#shopping_cart_list").val();
    var shop_user_id = $("#shop_user_id").val();//用户店铺ID
    var zerone_user_id = $("#zerone_user_id").val();//用户零壹ID
    $.post(
        cart_list_url,
        {
            'fansmanage_id': fansmanage_id,
            '_token': _token,
            'store_id': store_id,
            'user_id': shop_user_id,
            'zerone_user_id': zerone_user_id
        },
        function (json) {
            $.hideIndicator();
            if (json.status == 1) {
                var str = "";
                for (var i = 0; i <= json.data.goods_list.length - 1; i++) {
                    str += cart_list_box(json.data.goods_list[i].goods_name, json.data.goods_list[i].goods_price,
                        json.data.goods_list[i].num, json.data.goods_list[i].goods_id, json.data.goods_list[i].stock,
                        json.data.goods_list[i].goods_thumb, json.data.goods_list[i].weight,
                        json.data.goods_list[i].freight_price);
                    //计算购物车总价格
                    total_price += accMul(json.data.goods_list[i].goods_price, json.data.goods_list[i].num);
                }
                //购物车总价格
                //记录总价格的值
                var _this = $("#cart_price");
                _this.attr('data-totalprice', Number(total_price).toFixed(2));
                _this.html("金额总计<em>&yen;" + Number(total_price).toFixed(2) + "</em>");
                //购物车总数
                var total = json.data.total;
                var _this1 = $("#goods_totalnum");
                _this1.attr('data-totalnum', total);
                _this1.text(total);
                //购物车弹出状态的total(两个)
                var _this2 = $("#total");
                _this2.attr('data-totalnum', total);
                _this2.text(total);
                //购物车列表渲染
                var $cart_list = $("#cart_list");
                $cart_list.empty();
                $cart_list.append(str);
                $(em).hide();//隐藏掉在下边的购物车按钮
                $("#" + obj).css({display: 'flex'});
                $("#" + obj + " .popup_alert_hook").addClass('fadeInUp');
            } else if (json.status == 0) {
                console.log(json.msg);
            }
        }
    );
}
//购物车列表
function cart_list_box(name, price, num, goods_id, stock, thumb, weight, freight_price) {
    var url = $("#request").val();
    str = '<li>' +
        '<span>' + name + '</span>' +
        '<span>&yen;' + price + '</span>' +
        '<div class="cart_alert_btn">' +
        '<div class="goods_btn cart_border">' +
        '<a href="javascript:;" class="cart_box delect_cart_btn"' +
        'data-goodsid="' + goods_id + '"' +
        'data-goodsname="' + name + '"' +
        'data-goodweight="' + weight + '"' +
        'data-goodsfreight_price="' + freight_price + '"' +
        'data-goodsstock="' + stock + '"' +
        'data-goodsthumb="' + url + '/' + thumb + '"' +
        'data-goodsprice="' + price + '" onclick="cart_reduce(this,true)">-</a>' +
        '<a href="javascript:;" class="cart_box delect_cart_inpt goods_id' + goods_id + '">' + num + '</a>' +
        '<a href="javascript:;" class="cart_box add_cart_btn"' +
        'data-goodsid="' + goods_id + '"' +
        'data-goodsname="' + name + '"' +
        'data-goodsweight="' + weight + '"' +
        'data-goodsfreight_price="' + freight_price + '"' +
        'data-goodsstock="' + stock + '"' +
        'data-goodsthumb="' + url + '/' + thumb + '"' +
        'data-goodsprice="' + price + '" onclick="cart_add(this)">+</a>' +
        '</div>' +
        '</div>' +
        '</li>';
    return str;
}
function goodsclass(obj) {
    $("#" + obj).css({display: 'flex'});
    $("#" + obj + " .popup_alert_hook").removeClass('fadeOutUp').addClass('fadeInDown');
}

function hidegoodsclass(obj) {
    $("#" + obj + " .popup_alert_hook").removeClass('fadeInDown').addClass('fadeOutUp');
    setTimeout(function () {
        $("#" + obj).css({display: 'none'});
    }, 250);
}

function hidecart(obj, em) {
    $(em).hidden();
    $("#" + obj).css({display: 'none'});
    $("#" + obj + " .popup_alert_hook").removeClass('fadeInUp').addClass("fadeOutDown");
}

$("#cart").click(function (e) {
    //stopPropagation(e);
    if (!$(e.target).is(".popup_alert_hook *") && !$(e.target).is(".popup_alert_hook")) {
        $(".popup_alert_hook").removeClass('fadeInUp').addClass("fadeOutDown");
        setTimeout(function () {
            $(".popup_alert").css({display: 'none'});
        }, 250);
        $("#cart_btn_b").show();
    }
})
