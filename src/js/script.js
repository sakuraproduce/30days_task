
$(function(){
	$('.js-header-icon').on('click', function () {
		$(this).toggleClass('header-icon-open');
		$('.header-nav-drawer').toggleClass('header-nav-drawer-open');
	});

	$('.js-header-item-drawer').click(function() {
		$('.header-icon').toggleClass('header-icon-open');
		$('.header-nav-drawer').toggleClass('header-nav-drawer-open');
	})

	//ページ内リンク
	$('.js-header-item, .js-header-item-drawer, .mv-btn, .totop').click(function(){
		let id = $(this).attr('href');
		let headerHeight = $('header').outerHeight()
		let position = $(id).offset().top-headerHeight;
		// console.log(id);
		// console.log(headerHeight);
		$('html,body').animate({
			'scrollTop': position
		},500);
	});

	//スクロールしたらフローティングボタン表示
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 100) {
			$('.footer-totop').show();
		} else {
			$('.footer-totpo').hide();
		}
	});

	//リンクにactiveクラス
	$('.js-header-item').click(function(){
		$('.js-header-item').removeClass('js-header-item-active');
		$(this).addClass('js-header-item-active');

	})

  //ファイルアップロード
	$('#file_upload').change(function() {
		let file1 = $('#file_upload');
		let file2 = file1[0].files;
		let fileName = file2[0].name;
		$('#fileName').text(fileName);
	})

	$('#fileName').click(function() {
		$('#file_upload').val('');
		$('#fileName').text('');
	})

	//Swiperでスライダー
	var swiper = new Swiper('.swiper-container', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		loop: true,
		pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
	});

	//Q&Aアコーディオン(if+hasClass+addClass+removeClass+slideUp+slideDown)
	$('.js-qa-item').click(function(){
		let answer = $(this).find('.qa-answer');
		if($(answer).hasClass('qa-answer-active')) {
			$(answer).removeClass('qa-answer-active');
			$(answer).slideUp('slow');
			$(this).children('.qa-icon').removeClass('qa-icon-minus');

		} else {
			$(answer).addClass('qa-answer-active');
			$(answer).slideDown('slow');
			$(this).children('.qa-icon').addClass('qa-icon-minus');

		}
	})

	//Q&Aアコーディオン（slideToggle,toggleClass）
	$('.js-qa-item-2col').click(function(){
		$(this).find('.qa-answer-2col').slideToggle();
		$(this).find('.qa-icon-2col').toggleClass('qa-icon-2col-top');
	})

	$('#contact-policy-show').click(function(){
		$('.policy').fadeIn();
		return false
	})

	$('.policy-close').click(function(){
		$('.policy').fadeOut();
		return false
	})
})

//スライダーでリサイズ時のページネーションが崩れるのを防ぐため、resize追加
$(window).on('load resize', function(){
		var swiper = new Swiper('.swiper2', {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 28,
			breakpoints: {
				1060: {
					slidesPerView: 2,
					slidesPerGroup: 2,
					spaceBetween: 20
				},
				767: {
					slidesPerView: 1,
					slidesPerGroup: 1,
					spaceBetween: 0
				}
			},
			navigation: {
				nextEl: '.next2',
				prevEl: '.prev2',
			},
			loop: true,
			pagination: {
				el: '.page2',
				type: 'bullets',
				clickable: true,
			},

		});
	})
