const select = (eml, block = document) => block.querySelector(eml),
	selectAll = (eml, block = document) => block.querySelectorAll(eml),
	header = select('.header'),
	headerScroll = 'header-scroll';

window.addEventListener('scroll', () => {
	if (window.scrollY >= header.offsetHeight * 2) {
		header.classList.add(headerScroll);
	} else {
		header.classList.remove(headerScroll);
	}
});

const popularCarousel = select('#popular-home .popular-carousel'),
	testtiContent = select('.testi-content'),
	owlCarousel = select('.owl-carousel'),
	cursorCarousel = selectAll('.cursor-carousel'),
	carouselActive = 'carousel-active';

const mouseDown = (eml1, block = carouselActive) => {
	eml1.classList.add(block);
};

const mouseUp = (eml1, block = carouselActive) => {
	eml1.classList.remove(block);
};

cursorCarousel.forEach((eml) => {
	eml.addEventListener('mousedown', () => {
		mouseDown(eml);
	});
	eml.addEventListener('mouseup', () => {
		mouseUp(eml);
	});
});

$(popularCarousel).slick({
	autoplay: true,
	autoplaySpeed: 2000,
	prevArrow:
		"<button class='btn-carousel btn-carousel_left'><i class= 'fas fa-chevron-left' aria-hidden='true'></i></button>",
	nextArrow:
		"<button class='btn-carousel btn-carousel_right'><i class='fas fa-chevron-right' aria-hidden='true'></i></button>",
	responsive: [
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			},
		},
	],
});

$(testtiContent).slick({
	autoplay: true,
	autoplaySpeed: 2000,
	prevArrow:
		"<button class='btn-carousel btn-carousel_left'><i class= 'fas fa-chevron-left' aria-hidden='true'></i></button>",
	nextArrow:
		"<button class='btn-carousel btn-carousel_right'><i class='fas fa-chevron-right' aria-hidden='true'></i></button>",
	responsive: [
		{
			breakpoint: 1400,
			settings: {
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			},
		},
	],
});

$(owlCarousel).slick({
	arrows: false,
	autoplay: true,
	autoplaySpeed: 3000,
	cssEase: 'ease-in',
	easing: 'linear',
	responsive: [
		{
			breakpoint: 1400,
			settings: {
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
	],
});

const btnBackTop = select('.btn-backTop'),
	btnBackTopScroll = 'btn-backTop_scroll',
	slider = selectAll('.slider');
window.addEventListener('scroll', (e) => {
	if (window.scrollY >= slider.clientHeight) {
		btnBackTop.classList.add(btnBackTopScroll);
	} else {
		btnBackTop.classList.remove(btnBackTopScroll);
	}
});

const blogForm = selectAll('.blog-form'),
	blogFormIcon = selectAll('.blog-form_icon'),
	blogFormList = selectAll('.blog-form_list'),
	blogFormListItems = selectAll('.blog-form_list--items'),
	blogFormListContainer = selectAll('.blog-form_list ul'),
	blogFormListTitle = selectAll('.blog-form_list--title'),
	blogFormJs = 'blog-form_js';

blogFormList.forEach((eml) => {
	blogFormListTitle.forEach((eml1) => {
		eml1.addEventListener('click', (e) => {
			if (eml.contains(eml1) && eml1 == e.target) {
				eml.classList.toggle(blogFormJs);
				blogFormListItems.forEach((eml2) => {
					if (eml.contains(eml2)) {
						eml2.addEventListener('click', () => {
							eml1.innerHTML = eml2.innerHTML;
							eml.classList.remove(blogFormJs);
						});
					}
				});
			} else {
				eml.classList.remove(blogFormJs);
			}
		});
	});
});

blogFormListContainer.forEach((eml2) => {
	eml2.addEventListener('click', (e) => {
		e.stopPropagation();
	});
});

window.addEventListener('click', (e) => {
	blogFormList.forEach((eml) => {
		blogFormListTitle.forEach((eml1) => {
			if (e.target !== eml1 && eml.contains(eml1)) {
				eml.classList.remove(blogFormJs);
			}
		});
	});
});

const loader = select('.preloader');
const loaderFunc = () => {
	setTimeout(() => {
		loader.style.opacity = '0';
		loader.style.visibility = 'hidden';
	}, 5200);
};

loaderFunc();

let map;

function initMap() {
	var options = {
		center: { lat: 16, lng: 108 },
		zoom: 8,
	};
	map = new google.maps.Map(document.getElementById('map'), options);
}

const form = select('.form'),
	formGroup = selectAll('.form-group'),
	formItems = selectAll('.form-items'),
	btnForm = select('.btn-form');

function removeTextForm() {
	selectAll('.form-warning').forEach((eml) => {
		return eml.remove();
	});
}

btnForm.addEventListener('click', (e) => {
	e.preventDefault();
	removeTextForm();
	formItems.forEach((eml1) => {
		let text = eml1.getAttribute('data-validation-required-message');
		let value = eml1.value.trim();
		if (value === '') {
			setErrorForm(eml1, text);
			selectAll('.form-warning').forEach((eml2) => {
				if (eml1.parentNode.contains(eml2)) {
					eml1.addEventListener('click', () => {
						eml2.remove();
					});
				}
			});
		}
		if (value !== '') {
			setSuccessForm(eml1);
		}
	});
});

function setErrorForm(input, text) {
	let elements = input.parentNode;
	let p = document.createElement('p');
	p.className = 'form-warning';
	let node = document.createTextNode(text);
	p.appendChild(node);
	elements.appendChild(p);
	elements.classList.add('error');
	elements.classList.remove('successForm');
}

function setSuccessForm(input) {
	let elements = input.parentNode;
	elements.classList.add('successForm');
	elements.classList.remove('error');
}
