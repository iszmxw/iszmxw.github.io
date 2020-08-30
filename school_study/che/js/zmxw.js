// JavaScript 文档

//侧边菜单栏效果
$("a#navmenu").click(function(){
	$("#cbl-style").animate({right:'0'},50);
	$("ul#cbl-nav").animate({left:'0px'},800);
	$("body#cehual").animate({left:'200px'},800);
	});
$("#cbl-style").click(function(){
	$("ul#cbl-nav").animate({left:'-200px'},800);
	$("body#cehual").animate({left:'0px'},800);
	$("#cbl-style").animate({right:'100%'},50);
	});
$("ul#cbl-nav").click(function(e){
	e.stopPropagation();
	});	




//轮播图样式效果
var index = 0;
$(".contant .banner ul li").click(function(){
    var index = $(this).index()
	$(".contant .banner a").eq(index).animate({top:'0px'}).siblings('a').animate({top:'-120px'});
	});
function autoplay(){
    if(index>2){index = 0};
	$(".contant .banner ul li:eq("+index+")").click()
	index++;
	}
setInterval("autoplay()", 1500);//自动切换轮播图



//图层会话框效果
function tuceng(){//弹出图层函数
$("div.mnks span.mnks1 a").click(function(){
	$("#tuceng").fadeIn('1500')
	});
$("#tuceng").click(function(){
	$(this).fadeOut('1500')
	});
$(".huihua").click(function(e){
	e.stopPropagation();
	});
}
tuceng();




//点击切换科目一到科目四效果
$(".contant ul.kemu li").click(function(){
	var index = $(this).index()
	index = index+1;
	$("span#kemu-lb"+index).show('1500').siblings("span").hide('1500');
	$(this).addClass("on").siblings().removeClass("on");
	});
	
