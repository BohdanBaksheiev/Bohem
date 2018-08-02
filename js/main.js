$(function(){
  $('.j-mainSlider').slick({
  		autoplay: true,
  		arrows: false,
  		adaptiveHeight: true
  });


});

$(function(){
	$(".toggleMobMenu").on("click",function(){
		$(".menuContent").stop().slideToggle();
	});

	$(".searchIcon").on("click",function(){
		$(".header__form").stop().slideToggle();
	});

});