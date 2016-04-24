$(function(){
	//search样式
	$('#search_course').click(
        function () {
            $('#search_course').addClass("on");
            $('#search_school').removeClass("on");
            $('#search_teacher').removeClass("on");
            $('#search_info').removeClass("on");
            $('#search_course_li').show();
            $('#search_school_li').hide();
            $('#search_teacher_li').hide();
            $('#search_info_li').hide();
        }
    );
    $('#search_school').click(
        function () {
            $('#search_school').addClass("on");
            $('#search_course').removeClass("on");
            $('#search_teacher').removeClass("on");
            $('#search_info').removeClass("on");
            $('#search_school_li').show();
            $('#search_course_li').hide();
            $('#search_teacher_li').hide();
            $('#search_info_li').hide();
        }
    );
    $('#search_teacher').click(
        function () {
            $('#search_teacher').addClass("on");
            $('#search_school').removeClass("on");
            $('#search_course').removeClass("on");
            $('#search_info').removeClass("on");
            $('#search_teacher_li').show();
            $('#search_school_li').hide();
            $('#search_course_li').hide();
            $('#search_info_li').hide();
        }
    );
    $('#search_info').click(
        function () {
            $('#search_info').addClass("on");
            $('#search_school').removeClass("on");
            $('#search_teacher').removeClass("on");
            $('#search_course').removeClass("on");
            $('#search_info_li').show();
            $('#search_school_li').hide();
            $('#search_teacher_li').hide();
            $('#search_course_li').hide();
        }
    );
    $('.hot_close').click(function () {
        $('.hot_search').fadeOut(100);
    });
    $(".search_input").focus(function () {
        $('.hot_search').fadeIn(100);
    }).blur(function () {
        setTimeout(function () {
            $('.hot_search').fadeOut(100);
        }, 100)
    });
    //search表单
    var place = [
        "搜索您想学的科目、老师试试",
        "搜索您想学习的学校",
        "搜索您喜欢的老师",
        "搜索您想学习的资料"
    ];
    var domanic = document.getElementById("search_form").action;
	/*    var url = window.location.href;
    if (url.indexOf("xuexiao") > 0) {
        de(1, "xuexiao");
    } else if (url.indexOf("laoshi") > 0) {
        de(2, "laoshi");
    } else if (url.indexOf("kecheng") > 0) {
        de(0, "kecheng");
    }else if (url.indexOf("ziliao") > 0) {
        de(0, "ziliao");
    } else {
        de(0, "kecheng");
    }*/
    function de(i, cate) {
        $('.search_tab').find('a').eq(i).addClass('selected').siblings().removeClass('selected');
        document.getElementById("search_form").attributes["action"].value = domanic + cate + '/';
        $('.search_input').attr('placeholder', decodeURI(place[i]));
        $('.hot_search').find('li').eq(i).show().siblings().hide();
    }
     $('.search_tab a').click(function () {
        var i = $(this).index();
        $('.search_input').val('');
        $('.search_input').attr('placeholder', decodeURI(place[i]));
        if ($(this).attr("id") == 'search_course')
            document.getElementById("search_form").attributes["action"].value = domanic + '/kecheng/';
        if ($(this).attr("id") == 'search_school')
            document.getElementById("search_form").attributes["action"].value = domanic + '/xuexiao/';
        if ($(this).attr("id") == 'search_teacher')
            document.getElementById("search_form").attributes["action"].value = domanic + '/laoshi/';
         if ($(this).attr("id") == 'search_info')
            document.getElementById("search_form").attributes["action"].value = domanic + '/资料/';
    });


});

//placeholder 兼容 IE
$(function () {
    if (!('placeholder' in document.createElement('input'))) {
        $('input[placeholder],textarea[placeholder]').each(function () {
            var that = $(this),
                text = decodeURI(that.attr('placeholder'));
            setTimeout(function () {
                that.val('').addClass('phcolor');
                that.val(text);
            }, 0);
            that.focus(function () {
                if (that.val() === text) {
                    locatePoint(this);
                }
            })
                .blur(function () {
                    if (that.val() === "") {
                        that.val(text).addClass('phcolor');
                    }
                })
                .keydown(function () {
                    if (that.val() === text) {
                        that.val("").removeClass('phcolor');
                    }
                })
                .keyup(function () {
                    if (window.event.keyCode === 8 && that.val() === "") {
                        that.val(text).addClass('phcolor');
                        locatePoint(this);
                    }

                });

            function locatePoint(txt) {
                if (txt.setSelectionRange) {
                    setTimeout(function () {
                        txt.setSelectionRange(0, 0);
                    }, 0);
                } else {
                    var range = txt.createTextRange();
                    range.moveEnd("character", 0 - range.text.length);
                    range.select();
                }
            }

        });
    }
});



$('.small_type').find('li').mouseover(function () {
    $(this).addClass('current');
    $(this).children(".sub_type").show();
}).mouseout(function () {
    $(this).removeClass('current');
    $(this).children(".sub_type").hide();
});

$('.score span').raty({
    score: function() {
       return $(this).attr('data-score');
    },
    readOnly: true,
});



function navClip(nav,box,active){
    console.log(nav);
    console.log(box);
    console.log(active);
    var $box=$('.'+box),$nav=$('.'+nav);
    var nav_t=$nav.offset().top;
    var foot_t=$('#footer').offset().top;
    var nav_h=parseInt($nav.css('margin-bottom'))+parseInt($nav.outerHeight());
    var aNav=[];
    $box.each(function(){
        aNav.push($(this).offset().top);
    });
    $(window).scroll(function(){
        var nav_top=$(document).scrollTop();
        $nav.css({'position':'relative'});$('body').css('padding-top',0);
        if( nav_top>nav_t){
            $nav.css({'position':'fixed','top':0,'z-index':1});
            $('body').css('padding-top',nav_h)
        }
        for(var i=0;i<$nav.find('li').length;i++){
            if(nav_top>(aNav[i]-110)){
                $nav.find('li').eq(i).addClass(active).siblings().removeClass(active);
            }
        }

        if(nav_top>foot_t){
            $nav.css({'position':'relative'});
            $('body').css('padding-top',0)}
    });

    $nav.find('li').click(function(){
        var n=$(this).index();
        $('html, body').stop().animate({scrollTop:(aNav[n]-100+nav_h)}, 500)
    });

}