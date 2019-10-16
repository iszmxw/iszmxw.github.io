/********************
 * 基于jquery模拟移动端列表左右滑动删除
 * author:yaohuitao@100tal.com
 * ******************/
$(function(){
    function prevent_default(e) {
        e.preventDefault();
    }
    function disable_scroll() {
        $(document).on('touchmove', prevent_default);
    }
    function enable_scroll() {
        $(document).off('touchmove', prevent_default);
    }
    //滑动删除
    var Drags={};
    Drags.dragtag=false;//拖动状态
    Drags.dragstart=true;//拖动开始标志
    Drags.datatransx=0;
    $('.pay-list .pay-each')
        .on('touchstart mousedown', function(e) {
            if(!($(e.target).hasClass("pay-order-swiper")||$(e.target).parents().hasClass("pay-order-swiper"))){
                closeallswipe();     //点击还原
                if(e.originalEvent.targetTouches){
                    Drags.dragx=e.originalEvent.targetTouches[0].pageX;
                    Drags.dragy=e.originalEvent.targetTouches[0].pageY;
                }else{
                    Drags.dragx = e.pageX;
                    Drags.dragy=e.pageY;
                }
                if($(e.currentTarget).attr("data-transX")){
                    Drags.datatransx=parseInt($(e.currentTarget).attr("data-transX"));
                }
                Drags.dragtag=true;
                Drags.dragstart=true;
            }
        })
        .on('touchmove mousemove', function(e) {
            if(Drags.dragtag){
                $(e.currentTarget).removeClass('animatedh');
                $(e.currentTarget).addClass('dragstart');   //添加禁止选择
                var change=0;
                if(e.originalEvent.targetTouches){
                    change = e.originalEvent.targetTouches[0].pageX-Drags.dragx;
                    changey = e.originalEvent.targetTouches[0].pageY-Drags.dragy;
                }else{
                    change = e.pageX-Drags.dragx;
                    changey = e.pageY-Drags.dragy;
                }

                if(Drags.dragstart){
                    if(Math.abs(changey)<20){
                        showswiperfbn();
                    }
                }else{
                    showswiperfbn();
                }
                function showswiperfbn(){
                    if(Math.abs(change)>20){
                        Drags.dragstart=false;
                        if(change<-20){
                            change=change+Drags.datatransx+20;
                        }else{
                            change=change+Drags.datatransx-20;
                        }
                        change = Math.min(Math.max(-300, change), 0);
                        $(e.currentTarget).css('transform', 'translate3D('+change+'px,0px,0px)');
                        $(e.currentTarget).attr("data-transX",change);
                        disable_scroll();
                    }
                }
            }
        })
        .on('touchend mouseup', function(e) {
            var left = parseInt($(e.currentTarget).attr("data-transX"));
            var new_left;
            if($(e.currentTarget).hasClass("open")){
                if (left > -110) {
                    new_left = 0;
                    $(e.currentTarget).removeClass('open');
                }else{
                    new_left = -50;
                }
            }else{
                if (left < -20) {
                    new_left = -50;
                    $(e.currentTarget).addClass('open');
                }else{
                    new_left = 0;
                }
            }
            $(e.currentTarget).removeClass('dragstart');
            $(e.currentTarget).css('transform', 'translate3D('+new_left+'px,0px,0px)');
            $(e.currentTarget).attr("data-transX",new_left);
            $(e.currentTarget).addClass('animatedh');
            Drags.dragtag=false;
            enable_scroll()
        });

    function closeallswipe(){
        $('.pay-list .pay-each').css('transform', 'translate3D(0px,0px,0px)');
        $('.pay-list .pay-each').removeClass('open');
        $('.pay-list .pay-each').addClass('animatedh');
        $('.pay-list .pay-each').attr("data-transX",0);
    }

});
  
