// White Devil @ Devilshalani javascript ES6
const bannerTextElem = document.querySelector('#banner-text');
const inputBxs = document.querySelectorAll('.inputBx');
const menuBx = document.querySelector('.menuBx');
const toggle = document.querySelector('.toggle');
const menu = document.querySelectorAll('.menu');
const links = document.querySelectorAll('.link');
const scrollTop = document.querySelector('.scrollTop');

const bannerText = [
	' white devil',
	' a web developer',
	' a web designer',
	' a hacker',
	' a youtuber'
];

// banner
const shalaniType = shalani => {
	let text = '';
	let textCount = 0;
	let letterCount = 0;
	let letter;
	(function shalaniTypingTiming(shalani) {{
		text = bannerText[textCount];
		letter = text.slice(0, ++letterCount);
		bannerTextElem.textContent = letter;
		if (letter.length === text.length) {
			letter = 0;
			letterCount = 0;
			textCount++;
		}
		if (textCount === bannerText.length) {
			textCount = 0;
		}
		setTimeout(shalaniTypingTiming, 400)
	})();
}

// scrollTop button display
const shalaniscrollTop = shalani => {
	let scrollValue = window.scrollY;
	let innerValue = window.innerHeight;
	if (scrollValue >= innerValue) {
		scrollTop.classList.add('shalani');
	} else {
		scrollTop.classList.remove('shalani');
	}

	scrollTop.addEventListener("click", (shalani) => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	});
}

const shalaniCheck = shalani => {
    if (window.innerWidth >= 800) {
		let s = skrollr.init();
    } else {
		let s = null;
    }
}

// menu bar classList
const shalaniMenu = shalani => {
	menuBx.classList.toggle('shalani');
	toggle.classList.toggle('shalani');
};

// menu item content
const shalaniMenuItems = shalani => {
	menu.forEach(item => {
		let text = item.children[0].textContent;
		item.setAttribute("data-shalani-menu", text);
	});
}

// section scroll view 
const shalaniScrollSection = shalani => {
	links.forEach(link => {
		link.addEventListener("click", (e) => {
			e.preventDefault();
			let className = link.hash;
			let section = document.querySelector(className);
			section.scrollIntoView();
		})
	})
}

// contect form
const shalaniBorder = shalani => {
	shalani.addEventListener("mouseenter", (e) => {
        shalani.classList.add('shalani'); 
	});
	shalani.addEventListener("mouseleave", (e) => {
        shalani.classList.remove('shalani'); 
	});
}

inputBxs.forEach(box => {shalaniBorder(box)});
toggle.addEventListener("click", shalaniMenu);
window.addEventListener("scroll", shalaniscrollTop);
shalaniType();
shalaniCheck();
shalaniMenuItems();
shalaniScrollSection();


// developered by : white devil @ devilshalani
// github https://github.com/Devilshalani/
// youtube drvil devilshalani 
