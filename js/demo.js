var txt_dict = {
    "1": "content1111111111111111111111111111111111111",
    "2": "content2222222222222222222222222222222222222",
    "3": "contene3333333333333333333333333333333333333",
};

var a = 0;
var len = Object.keys(txt_dict).length;
var m = "move_btn 2s infinite";

$(function(){
    var pic_array = ["/pic/pic1.jpg", "/pic/pic2.jpg", "/pic/pic3.jpg"];
    for(var va in txt_dict){
        $(".box_ul").append(
            '<li class=".box_li data-'+va+'">'+txt_dict[va]+'</li>'
        );
    }

    $('.id_btn').removeClass("move_btn");
})

// 向右移动 
function right_move(){
    // 当  a=0; a+=1 后 a=1 ; 则,隐藏 data-1
    // 当  a=1; a+=1 后 a=2 ; 则,隐藏 data-2    --> 此时只剩下标签3

    if(a >= 0 & a < len - 1){
        a += 1;
        $('.data-'+a).hide();
        $('.id_btn').addClass("move_btn");
    }
    // 此条件只是为了去除动画
    // 当 a=2 时, 右侧按钮特效消失
    if(a == len - 1){
        $('.id_btn_right').removeClass("move_btn");
    }
}

// 向左移动
function left_move(){
    // 当 a=2, 显示 data-2; a -= 1 之后 a=1;
    // 当 a=1, 显示 data-1; a -= 1 之后 a=0;

    if(a>=1){
        $('.data-'+a).show();
        $('.id_btn_right').addClass("move_btn");
        a -= 1;
    }
    // 此条件只是为了去除动画
    // 当 a=0 时, 左侧按钮特效消失
    if(a == 0){
        $('.id_btn').removeClass("move_btn");
    }
}