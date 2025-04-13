const burgerBtn = document.querySelector('.burger-btn');
const submenu = document.querySelector('.submenu');

burgerBtn.addEventListener('click', e => {
	if (burgerBtn.classList.contains('active')) {
		burgerBtn.classList.remove('active');
		// submenu.style.display = 'none';
		submenu.classList.remove('active');
	} else {
		burgerBtn.classList.add('active');
		// submenu.style.display = 'block';
		submenu.classList.add('active');
	}
});

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	slidesPerView: 1,
	spaceBetween: 32,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	breakpoints: {
		// when window width is >= 480px
		600: {
			slidesPerView: 2,
		},
		// when window width is >= 640px
		768: {
			slidesPerView: 3.1,
		},
	},
});

const pricingSwiper = new Swiper('.pricing-swiper', {
	direction: 'horizontal',
	slidesPerView: 1,
	spaceBetween: 32,

	// If we need pagination
	pagination: {
		el: '.pricing-swiper .swiper-pagination',
		clickable: true,
	},

	breakpoints: {
		// when window width is >= 480px
		600: {
			slidesPerView: 2,
		},
		// when window width is >= 640px
		768: {
			slidesPerView: 3.2,
		},
	},
});
