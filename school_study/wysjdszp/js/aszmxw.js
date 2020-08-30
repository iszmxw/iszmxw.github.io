/* spig.js
 * 修改作者：Cosplay //版权归原作者所有
 * 个人专用，请勿转载，谢谢
 * 2014-12-5
 */
//右键菜单
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        if(e.which==3){
        showMessage("秘密通道:<br /><a href=\"javascript:sc(window.location,document.title)\" title=\"添加收藏\">收藏</a>  <a href=\"javascript:sw_index(this,window.location)\" title=\"设为首页\">设为</a>  <a href=\"https://www.54zm.cn\" title=\"返回首页\">首页</a>",10000);
}
});
$("#spig").bind("contextmenu", function(e) {
    return false;
});
});

//鼠标在消息上时
jQuery(document).ready(function ($) {
    $("#message").hover(function () {
       $("#message").fadeTo("100", 1);
     });
});


//鼠标在上方时
jQuery(document).ready(function ($) {
    //$(".mumu").jrumble({rangeX: 2,rangeY: 2,rangeRot: 1});
    $(".mumu").mouseover(function () {
       $(".mumu").fadeTo("300", 0.3);
       msgs = ["看我的隐身术，你看不到我", "我会隐身哦！嘿嘿！", "就算你看着我我也不会告诉你我是追梦小窝的小跟班的！", "把手拿开我才出来！","放尊重点，不然我的主人知道了你就玩完了"];
       var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i]);
    });
    $(".mumu").mouseout(function () {
        $(".mumu").fadeTo("300", 1)
    });
});

//开始
jQuery(document).ready(function ($) {
    if (isindex) { //如果是主页
        var now = (new Date()).getHours();
        if (now > 0 && now <= 6) {
            showMessage(visitor + ' 你是夜猫子呀？还不睡觉，明天起的来么你？', 6000);
        } else if (now > 6 && now <= 11) {
            showMessage(visitor + ' 早上好，欢迎来到追梦小窝的地盘！早起的鸟儿有虫吃噢 嘿嘿！', 6000);
        } else if (now > 11 && now <= 14) {
            showMessage(' 欢迎来到追梦小窝！我是追梦小窝的小跟班：小窝,嘻嘻!', 6000);
        } else if (now > 14 && now <= 18) {
            showMessage(visitor + ' 中午的时光真难熬！还好有你在！', 6000);
        } else {
            showMessage(visitor + ' 欢迎来到追梦小窝！我是追梦小窝的小跟班：小窝,嘻嘻!', 6000);
        }
    }
    else {
        showMessage('欢迎' + visitor + '来到追梦小窝的地盘《' + title + '》', 6000);
    }
    $(".spig").animate({
        top: $(".spig").offset().top + 300,
        left: document.body.offsetWidth - 160
    },
	{
	    queue: false,
	    duration: 1000
	});
});

//鼠标在某些元素上方时
jQuery(document).ready(function ($) {
    $('.file_list li a').click(function () {//标题被点击时
        showMessage('正在招《<span style="color:#0099cc;">' + $(this).text() + '</span>》请稍候...');
    });
    $('.tags ul li').mouseover(function () {
        showMessage('要看看《<span style="color:#0099cc;">' + $(this).text() + '</span>》这个标签么？');
    });
    $('.page_no_link:eq(1)').mouseover(function(){
        showMessage('要翻到上一页吗?');
    });
    $('.page_no_link:eq(2)').mouseover(function(){
        showMessage('要翻到下一页吗?');
    });
    $('.page_no_link').mouseover(function () {
        showMessage('去 <span style="color:#0099cc;">' + $(this).text() + '</span> 逛逛');
    });
    $('.menu').mouseover(function () {
        showMessage('<span style="color:#0099cc;">' + visitor + '</span> 打开菜单有惊喜哦');
    });
    $("input[type='submit']").mouseover(function () {
        showMessage('确认提交了么？');
    });
    $('.back_top').mouseover(function () {
        showMessage('点击使用刻刻帝第四弹返回顶部哦~');
    });
    $('#go-prev').mouseover(function () {
        showMessage('点它可以后退哦！');
    });
    $('#go-next').mouseover(function () {
        showMessage('点它可以前进哦！');
    });
    $('#refresh').mouseover(function () {
        showMessage('点它可以重新载入此页哦！');
    });
    $('.cosplay_tx').mouseover(function () {
        showMessage('点它就可以回到首页啦！');
    });
	
	$('.search_test').focus(function () {
        showMessage('请输入你想搜索的关键词吧...');
    });
	
    $('#addfav').mouseover(function () {
        showMessage('点它可以把此页加入书签哦！');
    });
    $('#nav-two a').mouseover(function () {
        showMessage('嘘，从这里可以进入控制面板的哦！');
    });
    $('.post-category a').mouseover(function () {
        showMessage('点击查看此分类下得所有文章');
    });
    $('.post-heat a').mouseover(function () {
        showMessage('点它可以直接跳到评论列表处.');
    });
    $('#tho-shareto span a').mouseover(function () {
        showMessage('你知道吗?点它可以分享本文到'+$(this).attr('title'));
    });
    $('#switch-to-wap').mouseover(function(){
        showMessage('点击可以切换到手机版面');
    });
});


//无聊讲点什么
jQuery(document).ready(function ($) {

    window.setInterval(function () {
        msgs = ["陪我聊天吧！","好无聊哦，你都不陪我玩！", "…@……!………", "^%#&*!@*(&#)(!)(", "我可爱吧！嘻嘻!~^_^!~~","你猜小窝在干嘛呢？","来玩个游戏吧”"];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i], 10000);
    }, 35000);
});

//无聊动动
jQuery(document).ready(function ($) {
    window.setInterval(function () {
        msgs = ["十之弹~ 你的记忆己读取完毕", "我飘过来了！~", "我飘过去了", "我得意地飘！~飘！~"];
        var i = Math.floor(Math.random() * msgs.length);
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetHeight/2*(1+s[i1])
        },
			{
			    duration: 2000,
			    complete: showMessage(msgs[i])
			});
    }, 45000);
});

//评论资料

jQuery(document).ready(function ($) {
   /* $("#author").click(function () {
        showMessage("留下你的尊姓大名！");
        $(".spig").animate({
            top: $("#author").offset().top - 70,
            left: $("#author").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
    $("#email").click(function () {
        showMessage("留下你的邮箱，不然就是无头像人士了！");
        $(".spig").animate({
            top: $("#email").offset().top - 70,
            left: $("#email").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
    $("#url").click(function () {

        showMessage("快快告诉我你的家在哪里，好让我去参观参观！");
        $(".spig").animate({
            top: $("#url").offset().top - 70,
            left: $("#url").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
    $("#comment").click(function () {
        showMessage("认真填写哦！不然会被认作垃圾评论的！我的乖乖~");
        $(".spig").animate({
            top: $("#comment").offset().top - 70,
            left: $("#comment").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });*/
	 $("input[name='content']").click(function () {
        showMessage("我会在看着的，认真填写哦！");
        $(".spig").animate({
            top: $("#comment").offset().top - 70,
            left: $("#comment").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
});


var spig_top = 50;
//滚动条移动
jQuery(document).ready(function ($) {
    var f = $(".spig").offset().top;
    $(window).scroll(function () {
        $(".spig").animate({
            top: $(window).scrollTop() + f +360
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
});

//鼠标点击时
jQuery(document).ready(function ($) {
    var stat_click = 0;
    $(".mumu").click(function () {
        if (!ismove) {
            stat_click++;
            if (stat_click > 4) {
                msgs = ["你有完没完呀？", "你已经摸我" + stat_click + "次了", "四之弹(时间倒流)~ 你摸不到我的"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            } else {
                msgs = ["我飞~我飞~我飞呀飞呀飞呀飞！", "一之弹(时间加速)~~", "别摸我，再摸我就要用刻刻帝了哟！", "再这样我真的告诉主人了！", "不要摸我了，我会告诉主人的！", "小心我吞噬了你"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            }
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetHeight/2*(1+s[i1])
            },
			{
			    duration: 500,
			    complete: showMessage(msgs[i])
			});
        } else {
            ismove = false;
        }
    });
});
//显示消息函数 
function showMessage(a, b) {
    if (b == null) b = 10000;
    jQuery("#message").hide().stop();
    jQuery("#message").html(a);
    jQuery("#message").fadeIn();
    jQuery("#message").fadeTo("1", 1);
    jQuery("#message").fadeOut(b);
};

//拖动
var _move = false;
var ismove = false; //移动标记
var _x, _y; //鼠标离控件左上角的相对位置
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        _move = true;
        _x = e.pageX - parseInt($("#spig").css("left"));
        _y = e.pageY - parseInt($("#spig").css("top"));
     }); 
	 

    $(document).mousemove(function (e) {
        if (_move) {
            var x = e.pageX - _x; 
            var y = e.pageY - _y;
            var wx = $(window).width() - $('#spig').width();
            var dy = $(document).height() - $('#spig').height();
            if(x >= 0 && x <= wx && y > 0 && y <= dy) {
                $("#spig").css({
                    top: y,
                    left: x
                }); //控件新位置
            ismove = true;
            }
        }
    }).mouseup(function () {
        _move = false;
    });
});