$('body').on('click', '.img[data-plat]', function(){
  var i = $(this).data('plat');
  $('.shade, #plat'+i).show();
  $('body').css("overflow","hidden");
})


/**关闭弹出层**/
$('.close').on('click',function(){
  $('.plat, .shade').hide();
  $('body').css("overflow","auto");
});

/**浮窗的跳转**/
$('body').on('click','[data-link]',function(){
  var class_name = $(this).data('link');
  var offset_top = $('.' + class_name).offset().top;
  $('html,body').stop().animate({scrollTop:offset_top},1000);
});

$(window).scroll(function (){
  // 让浮动层距离窗口顶部，始终保持50pX
  var offsetTop = $(window).scrollTop() + 50 +"px";            
  $(".slidebar").animate({top : offsetTop },{ duration:60 , queue: false });
});