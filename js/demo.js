var s = {
    "1001": "miao1",
    "1002": "miao2",
    "1003": "miao3",
    "1004": "miao4",
    "1005": "miao5",
    "1006": "miao6",
    "1007": "miao7",
    "1008": "miao8",
    "1009": "miao9",
}

// 每组有person 2人
function fen(person){
    var d = {};  //json,  最后需要的
    var l = [];  // 对应的需要显示的内容
    for(var va in s){
        l.push({
            [va]: s[va]
        })
    }
    var num = 1;
    var a = 0;
    var b = a + person;
    for(var i=0; i<l.length; i++){
        var m = l.slice(a, b);
        a = b;
        b = a + person;
        d[num] = m;
        num += 1;
        if(m.length < person){
            break;
        } 
    }
    return d;
}


var txt_dict = {};

var a = 0;

var m = "move_btn 2s infinite";

$(function(){
    // 调用函数, 参数为每组的人数
    txt_dict = fen(4);
    var pic_array = ["/pic/pic1.jpg", "/pic/pic2.jpg", "/pic/pic3.jpg"];
    for(var va in txt_dict){
        $('.box_son').append('<div class="box_name data-'+va+'"></div>');
        for(var m=0;m<txt_dict[va].length;m++){
            // $(".data-"+va).append(
            //     '<ul class="box_ul data'+va+'-'+m+'">'
            //     +'<li class="box_li">'
            //     +txt_dict[va][m]+'</li></ul>'
            // );
            for(var t in txt_dict[va][m]){
                $(".data-"+va).append(
                    '<ul class="box_ul data'+va+'-'+m+'">'
                    +'<li class="box_li" data-id="'+t+'">'
                    +txt_dict[va][m][t]+'</li></ul>'
                );
            }
        }
    }

    $('.id_btn').removeClass("move_btn");
})

// 向右移动 
function right_move(){
    // 当  a=0; a+=1 后 a=1 ; 则,隐藏 data-1
    // 当  a=1; a+=1 后 a=2 ; 则,隐藏 data-2    --> 此时只剩下标签3
    var len = Object.keys(txt_dict).length;
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