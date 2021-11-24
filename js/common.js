$(function() {

	$(".animation_1").animated("fadeIn", "fadeOutDown");

	//скролл на айди
   $('.mnu  a').on('click', function(event){
		event.preventDefault();
		var hr = $(this).attr('href');
		$('body, html').animate({scrollTop : $(hr).offset().top - 100} ,1000);

		//закрыть меню на моб при клике
		var ww = $(window).width();
		if(ww < 991){
			$(".sandwich").removeClass("active");
			$('.mnu').hide();
		}

	})

	 $(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
		$(this).toggleClass("active");
		$('.mnu').toggle();
	});

   $(window).on('scroll', function(){
		var sc = $(this).scrollTop();
		if(sc > 0){
			$('.header').addClass('fixed')
		}else{
			$('.header').removeClass('fixed')
		}
	})

	//параллакс по движению мыши
	let bg1 = document.querySelector('.top-box .text .t-img');
	let bg2 = document.querySelector('.info-block1 .text .img');
	let bg3 = document.querySelector('.info-block2 .text .img');
	let bg4 = document.querySelector('.zilla-box .lg-bx .ico');
	let bg5 = document.querySelector('.program-box .text .img');


	window.addEventListener('mousemove', function(e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;  
		bg1.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
		bg2.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
		bg3.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
		bg4.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
		bg5.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';

	});


});