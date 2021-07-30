const btnOpenMenuHeader = select('.header-menu_open'),
	btnCloseMenuHeader = select('.header-menu_close'),
	headerListMenu = select('.header-list'),
	headerListItemsMenu = selectAll('.header-items'),
	OpenheaderListMenu = 'header-list_trans';

let tlMenuNavbar = gsap.timeline({
	paused: 'true',
});
tlMenuNavbar
	.to(headerListMenu, {
		x: 0,
		y: 0,
		opacity: 1,
		duration: 0.8,
		ease: 'power4.inOut',
	})
	.to(headerListItemsMenu, {
		opacity: 1,
		stagger: {
			each: 0.2,
		},
		duration: 0.5,
		ease: 'back.inOut',
	})
	.to(
		btnOpenMenuHeader,
		{
			x: '-150px',
			opacity: 0,
			duration: 0.5,
			ease: 'power4.inOut',
		},
		'-=0.2'
	)
	.to(btnCloseMenuHeader, {
		opacity: 1,
		duration: 0.5,
		ease: 'power4.inOut',
	});

btnOpenMenuHeader.addEventListener('click', () => {
	tlMenuNavbar.play();
});

btnCloseMenuHeader.addEventListener('click', () => {
	tlMenuNavbar.reverse();
});

// scrollTriggerEmlPosition
const sectionTitle = selectAll('.section-title'),
	btnCarousel = selectAll('.btn-carousel'),
	blogItems = selectAll('.blog-items'),
	blogJsRight = selectAll('.blog-right_js'),
	blogJsLeft = selectAll('.blog-left_js'),
	blogJsBtn = selectAll('.blog-btns_js'),
	contactForm = selectAll('.contact-form_js_scroll'),
	blogPaddingCaption = selectAll('.blog-padding h3');

let scrollTriggerEmlPosition = (elements, position = '-50px', time = 2) => {
	elements.forEach((eml) => {
		gsap.from(eml, {
			scrollTrigger: {
				trigger: eml,
				toggleActions: 'restart none restart none',
			},
			y: position,
			opacity: 0,
			duration: time,
			ease: 'power3.inOut',
		});
	});
};
// console.log(blogJsLeft, blogJsRight);

scrollTriggerEmlPosition(sectionTitle);
scrollTriggerEmlPosition(btnCarousel);
scrollTriggerEmlPosition(blogItems);
scrollTriggerEmlPosition(blogJsRight);
scrollTriggerEmlPosition(blogJsLeft);
scrollTriggerEmlPosition(blogJsBtn, '50px');
scrollTriggerEmlPosition(blogPaddingCaption, '50px', 1.2);

// scrollTriggerItems
const popularContainer = selectAll('.popular-container'),
	popularItems = selectAll('.popular-items'),
	ourContainer = select('.our-container'),
	ourItems = selectAll('.our-items'),
	testiContainer = select('.testi-container'),
	testiItems = selectAll('.testi-items'),
	owlItem = selectAll('.owl-items'),
	blogText = select('.blog-text'),
	blogTextDesc = select('.blog-text p'),
	blogDefinition = select('.blog-definition'),
	blogDefinitionItems = selectAll('.blog-definition_items'),
	blogQuote = select('.blog-quote'),
	blogQuoteContainer = selectAll('.blog-quote_container'),
	blogTable = select('.blog-table'),
	blogTableContainer = select('.blog-table_container'),
	blogImages = select('.blog-images'),
	blogForm = select('.form'),
	blogFormJsScroll = selectAll('.blog-form_js_scroll'),
	blogImagesJs = selectAll('.blog-images_js'),
	footer = select('.footer'),
	footerItems = selectAll('.footer-items');

const scrollTriggerItems = (
	itemsTrigger,
	trigger = itemsTrigger,
	timeWait = '-=0.5',
	time = 1
) => {
	gsap.from(
		itemsTrigger,
		{
			scale: 0,
			opacity: 0,
			duration: time,
			ease: 'power3.inOut',
			scrollTrigger: {
				trigger: trigger,
				toggleActions: 'restart none restart none',
			},
			stagger: {
				each: 0.15,
			},
		},
		timeWait
	);
};

scrollTriggerItems(popularItems, popularContainer);
scrollTriggerItems(ourItems, ourContainer);
scrollTriggerItems(testiItems, testiContainer);
scrollTriggerItems(owlItem);
scrollTriggerItems(blogText, blogTextDesc, '-=1', 2);
scrollTriggerItems(blogDefinitionItems, blogDefinition);
scrollTriggerItems(blogQuoteContainer, blogQuote);
scrollTriggerItems(blogTableContainer, blogTable);
scrollTriggerItems(blogImagesJs, blogImages);
scrollTriggerItems(blogFormJsScroll, blogForm);
scrollTriggerItems(footerItems, footer);

// fresh
const freshContent = select('.fresh-content'),
	freshImg = select('.fresh-img'),
	freshTitle = select('.fresh-title'),
	freshBtn = select('.fresh-btn'),
	freshSubImg = select('.fresh-subImg');

let freshTl = gsap.timeline({
	scrollTrigger: {
		trigger: freshContent,
		toggleActions: 'restart none restart none',
	},
});

freshTl
	.from(freshImg, {
		x: '-100px',
		opacity: 0,
		duration: 2,
		ease: 'power3.inOut',
	})
	.from(
		freshTitle,
		{
			y: '-30px',
			opacity: 0,
			duration: 1.5,
			ease: 'power4.inOut',
		},
		'-=1.1'
	)
	.from(
		freshBtn,
		{
			y: '-30px',
			opacity: 0,
			duration: 1.5,
			ease: 'power4.inOut',
		},
		'-=1'
	);
gsap.from(
	freshSubImg,
	{
		scrollTrigger: {
			trigger: freshSubImg,
			toggleActions: 'restart none restart none',
			// m
		},
		x: '100px',
		opacity: 0,
		duration: 2,
		ease: 'power3.inOut',
	},
	'-=1.5'
);

// quote
// const
