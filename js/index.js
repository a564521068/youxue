$(function(){
	 $("#kctj li").hover(function(){
        $(this).addClass("hover").siblings().removeClass("hover");
        $(this).find(".show_cont").show().end().siblings().find(".show_cont").hide();
        $(this).find(".num").addClass("span_show").end().siblings().find(".num").removeClass("span_show");
    });
	

    $('.nav-tabs a:first').tab('show');//初始化显示哪个tab 
      $('.nav-tabs a').hover(function (e) { 
        e.preventDefault();//阻止a链接的跳转行为 
        $(this).tab('show');//显示当前选中的链接及关联的content 
    });
     

});