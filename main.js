/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/drinks.js":
/*!***********************!*\
  !*** ./src/drinks.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drink: () => (/* binding */ drink)
/* harmony export */ });
/* harmony import */ var _recipies_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipies.png */ "./src/recipies.png");
/* harmony import */ var _capuccino_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capuccino.jpeg */ "./src/capuccino.jpeg");
/* harmony import */ var _milkshake_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./milkshake.jpeg */ "./src/milkshake.jpeg");
/* harmony import */ var _chocolate_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chocolate.jpeg */ "./src/chocolate.jpeg");
/* harmony import */ var _chocolateCoffee_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chocolateCoffee.jpeg */ "./src/chocolateCoffee.jpeg");
/* harmony import */ var _drinksbg1_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drinksbg1.jpeg */ "./src/drinksbg1.jpeg");
const body = document.querySelector('.body');






const drinks = document.createElement('div');
drinks.className = 'drinks';

const choice = document.createElement('div');
const choicePara = document.createElement('p');
const pricePara = document.createElement('p');
const choiceImg = document.createElement('img');
pricePara.textContent = 'Ksh 220';
choicePara.textContent = 'Capuccino Tea';
choiceImg.alt = 'Capuccino Tea';
choiceImg.id = 'drinks';
choiceImg.src = _capuccino_jpeg__WEBPACK_IMPORTED_MODULE_1__;
choice.appendChild(choicePara);
choice.appendChild(pricePara);
choice.appendChild(choiceImg);

const choice2 = document.createElement('div');
const choice2Para = document.createElement('p');
const price2Para = document.createElement('p');
const choice2Img = document.createElement('img');
price2Para.textContent = 'Ksh 200';
choice2Para.textContent = 'Milkshake';
choice2Img.id = 'drinks';
choice2Img.src = _milkshake_jpeg__WEBPACK_IMPORTED_MODULE_2__;
choice2Img.alt = 'Milkshake';
choice2.appendChild(choice2Para);
choice2.appendChild(price2Para);
choice2.appendChild(choice2Img);

const choice3 = document.createElement('div');
const choice3Para = document.createElement('p');
const price3Para = document.createElement('p');
const choice3Img = document.createElement('img');
price3Para.textContent = 'Ksh 250';
choice3Para.textContent = 'Chocolate';
choice3Img.alt = 'Chocolate';
choice3Img.id = 'drinks';
choice3Img.src = _chocolate_jpeg__WEBPACK_IMPORTED_MODULE_3__;
choice3.appendChild(choice3Para);
choice3.appendChild(price3Para);
choice3.appendChild(choice3Img);

const choice4 = document.createElement('div');
const choice4Para = document.createElement('p');
const price4Para = document.createElement('p');
const choice4Img = document.createElement('img');
price4Para.textContent = 'Ksh 300';
choice4Para.textContent = 'Chocolate Coffee';
choice4Img.alt = 'Chocolate Coffee';
choice4Img.id = 'drinks';
choice4Img.src = _chocolateCoffee_jpeg__WEBPACK_IMPORTED_MODULE_4__;
choice4.appendChild(choice4Para);
choice4.appendChild(price4Para);
choice4.appendChild(choice4Img);

const choice5 = document.createElement('div');
const choice5Para = document.createElement('p');
const price5Para = document.createElement('p');
const choice5Img = document.createElement('img');
price5Para.textContent = 'Ksh 150';
choice5Para.textContent = 'Porridge';
choice5Img.alt = 'Porridge';
choice5Img.id = 'drinks';
choice5Img.src = _drinksbg1_jpeg__WEBPACK_IMPORTED_MODULE_5__;
choice5.appendChild(choice5Para);
choice5.appendChild(price5Para);
choice5.appendChild(choice5Img);

const choice6 = document.createElement('div');
const choice6Para = document.createElement('p');
const price6Para = document.createElement('p');
const choice6Img = document.createElement('img');
price6Para.textContent = 'Ksh 250';
choice6Para.textContent = 'Espresso';
choice6Img.alt = 'Espresso';
choice6Img.id = 'drinks';
choice6Img.src = _recipies_png__WEBPACK_IMPORTED_MODULE_0__;
choice6.appendChild(choice6Para);
choice6.appendChild(price6Para);
choice6.appendChild(choice6Img);

drinks.appendChild(choice);
drinks.appendChild(choice2);
drinks.appendChild(choice3);
drinks.appendChild(choice4);
drinks.appendChild(choice5);
drinks.appendChild(choice6);

function drink() {
    body.textContent = ''
    body.appendChild(drinks)
};



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   home: () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _drinksbg2_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drinksbg2.jpeg */ "./src/drinksbg2.jpeg");
const body = document.querySelector('.body');


const image = document.createElement('img')
const about = document.createElement('div');
const title = document.createElement('h1');
const aboutheader = document.createElement('h5');
const aboutPara = document.createElement('p');
const aboutBtn = document.createElement('button');

body.className = 'body'
image.alt = 'page'
image.src = _drinksbg2_jpeg__WEBPACK_IMPORTED_MODULE_0__
image.id = 'mainImg'
about.className = 'about'
title.textContent = 'STAFOODS RESTAURANT'
aboutheader.textContent = 'About us'
aboutPara.textContent = " This is a very good restaurant. A page for dishes served in a restaurant. Practicing DOM manipulation by dynamically  rendering a simple restaurant homepage. Am using Javascript alone to generate the entire contents of the website!"
aboutBtn.textContent = 'Loyalty Programme'
aboutBtn.className = 'loyalty'

aboutBtn.addEventListener('click', ()=>{
    alert('Loyalty Programme Coming Soon')
});

function home() {
    body.textContent = '';

    about.appendChild(title);
    about.appendChild(aboutheader);
    about.appendChild(aboutPara);
    about.appendChild(aboutBtn);
    body.appendChild(image);
    body.appendChild(about);
}




/***/ }),

/***/ "./src/meals.js":
/*!**********************!*\
  !*** ./src/meals.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   meals: () => (/* binding */ meals)
/* harmony export */ });
/* harmony import */ var _recipies_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipies.png */ "./src/recipies.png");
/* harmony import */ var _pizza_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pizza.jpeg */ "./src/pizza.jpeg");
/* harmony import */ var _pasta_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pasta.jpeg */ "./src/pasta.jpeg");
/* harmony import */ var _vermicelli_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vermicelli.jpeg */ "./src/vermicelli.jpeg");
/* harmony import */ var _porkStew_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./porkStew.jpeg */ "./src/porkStew.jpeg");
/* harmony import */ var _shrimp_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shrimp.jpeg */ "./src/shrimp.jpeg");
/* harmony import */ var _grilledTuna_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grilledTuna.jpeg */ "./src/grilledTuna.jpeg");
/* harmony import */ var _bowl_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bowl.jpeg */ "./src/bowl.jpeg");
/* harmony import */ var _grilledShrimp_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grilledShrimp.jpeg */ "./src/grilledShrimp.jpeg");
const body = document.querySelector('.body');









const foods = document.createElement('div');
foods.className = 'foods';

const choice = document.createElement('div');
const choicePara = document.createElement('p');
const pricePara = document.createElement('p');
const choiceImg = document.createElement('img');
choicePara.textContent = 'Pizza';
pricePara.textContent = 'Ksh 1000';
choiceImg.alt = 'Pizza';
choiceImg.id = 'meals';
choiceImg.src = _pizza_jpeg__WEBPACK_IMPORTED_MODULE_1__;
choice.appendChild(choicePara);
choice.appendChild(pricePara);
choice.appendChild(choiceImg);

const choice2 = document.createElement('div');
const choice2Para = document.createElement('p');
const price2Para = document.createElement('p');
const choice2Img = document.createElement('img');
choice2Para.textContent = 'Pasta';
price2Para.textContent = 'Ksh 300';
choice2Img.id = 'meals';
choice2Img.src = _pasta_jpeg__WEBPACK_IMPORTED_MODULE_2__;
choice2Img.alt = 'pasta';
choice2.appendChild(choice2Para);
choice2.appendChild(price2Para);
choice2.appendChild(choice2Img);

const choice3 = document.createElement('div');
const choice3Para = document.createElement('p');
const price3Para = document.createElement('p');
const choice3Img = document.createElement('img');
choice3Para.textContent = 'Vermicelli';
price3Para.textContent = 'Ksh 350';
choice3Img.alt = 'Vermicelli';
choice3Img.id = 'meals';
choice3Img.src = _vermicelli_jpeg__WEBPACK_IMPORTED_MODULE_3__;
choice3.appendChild(choice3Para);
choice3.appendChild(price3Para);
choice3.appendChild(choice3Img);

const choice4 = document.createElement('div');
const choice4Para = document.createElement('p');
const price4Para = document.createElement('p');
const choice4Img = document.createElement('img');
choice4Para.textContent = 'Pork Stew';
price4Para.textContent = 'Ksh 450';
choice4Img.alt = 'Pork Stew';
choice4Img.id = 'meals';
choice4Img.src = _porkStew_jpeg__WEBPACK_IMPORTED_MODULE_4__;
choice4.appendChild(choice4Para);
choice4.appendChild(price4Para);
choice4.appendChild(choice4Img);

const choice5 = document.createElement('div');
const choice5Para = document.createElement('p');
const price5Para = document.createElement('p');
const choice5Img = document.createElement('img');
choice5Para.textContent = 'Shrimp';
price5Para.textContent = 'Ksh 600';
choice5Img.alt = 'Shrimp';
choice5Img.id = 'meals';
choice5Img.src = _shrimp_jpeg__WEBPACK_IMPORTED_MODULE_5__;
choice5.appendChild(choice5Para);
choice5.appendChild(price5Para);
choice5.appendChild(choice5Img);

const choice6 = document.createElement('div');
const choice6Para = document.createElement('p');
const price6Para = document.createElement('p');
const choice6Img = document.createElement('img');
choice6Para.textContent = 'Grilled Tuna';
price6Para.textContent = 'Ksh 330';
choice6Img.alt = 'Grilled Tuna';
choice6Img.id = 'meals';
choice6Img.src = _grilledTuna_jpeg__WEBPACK_IMPORTED_MODULE_6__;
choice6.appendChild(choice6Para);
choice6.appendChild(price6Para);
choice6.appendChild(choice6Img);

const choice7 = document.createElement('div');
const choice7Para = document.createElement('p');
const price7Para = document.createElement('p');
const choice7Img = document.createElement('img');
choice7Para.textContent = 'Grilled Shrimp';
price7Para.textContent = 'Ksh 430';
choice7Img.alt = 'Grilled Shrimp';
choice7Img.id = 'meals';
choice7Img.src = _grilledShrimp_jpeg__WEBPACK_IMPORTED_MODULE_8__;
choice7.appendChild(choice7Para);
choice7.appendChild(price7Para);
choice7.appendChild(choice7Img);

const choice8 = document.createElement('div');
const choice8Para = document.createElement('p');
const price8Para = document.createElement('p');
const choice8Img = document.createElement('img');
choice8Para.textContent = 'Vegetables';
price8Para.textContent = 'Ksh 250';
choice8Img.alt = 'Vegetables';
choice8Img.id = 'meals';
choice8Img.src = _bowl_jpeg__WEBPACK_IMPORTED_MODULE_7__;
choice8.appendChild(choice8Para);
choice8.appendChild(price8Para);
choice8.appendChild(choice8Img);

const choice9 = document.createElement('div');
const choice9Para = document.createElement('p');
const price9Para = document.createElement('p');
const choice9Img = document.createElement('img');
choice9Para.textContent = 'Coming Soon';
price9Para.textContent = 'Ksh ';
choice9Img.alt = '';
choice9Img.id = 'meals';
choice9Img.src = _recipies_png__WEBPACK_IMPORTED_MODULE_0__;
choice9.appendChild(choice9Para);
choice9.appendChild(price9Para);
choice9.appendChild(choice9Img);

    foods.appendChild(choice);
    foods.appendChild(choice2);
    foods.appendChild(choice3);
    foods.appendChild(choice4);
    foods.appendChild(choice5);
    foods.appendChild(choice6);
    foods.appendChild(choice7);
    foods.appendChild(choice8);
    foods.appendChild(choice9);

function meals() {
    body.textContent = ''
    body.appendChild(foods)
   
};




/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drinksbg2_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drinksbg2.jpeg */ "./src/drinksbg2.jpeg");
const content = document.getElementById('content');


const header = document.createElement('div');
const homeBtn = document.createElement('button');
const mealsBtn = document.createElement('button');
const drinksBtn = document.createElement('button');

header.className = 'header';
homeBtn.className = 'home';
homeBtn.textContent = 'Home';
mealsBtn.textContent = 'Meals';
mealsBtn.className = 'meals';
drinksBtn.textContent = 'Drinks';
drinksBtn.className = 'drinks';

header.appendChild(homeBtn);
header.appendChild(mealsBtn);
header.appendChild(drinksBtn);
content.appendChild(header);


const body = document.createElement('div');
const image = document.createElement('img');
const about = document.createElement('div');
const title = document.createElement('h1');
const aboutheader = document.createElement('h5');
const aboutPara = document.createElement('p');
const aboutBtn = document.createElement('button');

body.className = 'body';
image.alt = 'page';
image.src = _drinksbg2_jpeg__WEBPACK_IMPORTED_MODULE_0__;
image.id = 'mainImg';
about.className = 'about';
title.textContent = 'STAFOODS RESTAURANT';
aboutheader.textContent = 'About us';
aboutPara.textContent = " This is a very good restaurant. A page for dishes served in a restaurant. Practicing DOM manipulation by dynamically  rendering a simple restaurant homepage. Am using Javascript alone to generate the entire contents of the website!"

aboutBtn.className = 'loyalty';
aboutBtn.textContent = 'Loyalty Programme';

about.appendChild(title);
about.appendChild(aboutheader);
about.appendChild(aboutPara);
about.appendChild(aboutBtn);
body.appendChild(image);
body.appendChild(about);
content.appendChild(body);


const footer = document.createElement('footer');
const left = document.createElement('div');
const right = document.createElement('p');
const footerHeader = document.createElement('p');
const connectBtns = document.createElement('div')
const twitterBtn = document.createElement('button');
const instagramBtn = document.createElement('button');
const facebookBtn = document.createElement('button');
const emailBtn = document.createElement('button');
const githubBtn = document.createElement('button');

left.className = 'left';
right.className = 'right';
right.textContent = `Images generated from Unsplash`;
footerHeader.textContent = 'Connect on';
connectBtns.className = ' Connect';
twitterBtn.textContent = 'Twitter';
instagramBtn.textContent = 'Instagram';
facebookBtn.textContent = 'Facebook';
emailBtn.textContent = 'Email';
githubBtn.textContent = 'Github';

connectBtns.appendChild(twitterBtn);
connectBtns.appendChild(instagramBtn);
connectBtns.appendChild(facebookBtn);
connectBtns.appendChild(emailBtn);
connectBtns.appendChild(githubBtn);
left.appendChild(footerHeader);
left.appendChild(connectBtns);
footer.appendChild(left);
footer.appendChild(right);
content.appendChild(footer);



/***/ }),

/***/ "./src/bowl.jpeg":
/*!***********************!*\
  !*** ./src/bowl.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45faec3d667dcfd54faa.jpeg";

/***/ }),

/***/ "./src/capuccino.jpeg":
/*!****************************!*\
  !*** ./src/capuccino.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "14336587acd7ee43633f.jpeg";

/***/ }),

/***/ "./src/chocolate.jpeg":
/*!****************************!*\
  !*** ./src/chocolate.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6a0ec6522816567966a.jpeg";

/***/ }),

/***/ "./src/chocolateCoffee.jpeg":
/*!**********************************!*\
  !*** ./src/chocolateCoffee.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "107778a3e638b1b6a44e.jpeg";

/***/ }),

/***/ "./src/drinksbg1.jpeg":
/*!****************************!*\
  !*** ./src/drinksbg1.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "abcfb16474de0c821680.jpeg";

/***/ }),

/***/ "./src/drinksbg2.jpeg":
/*!****************************!*\
  !*** ./src/drinksbg2.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4d6c8d71caade9ded99.jpeg";

/***/ }),

/***/ "./src/grilledShrimp.jpeg":
/*!********************************!*\
  !*** ./src/grilledShrimp.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2149f7d873125a530ba2.jpeg";

/***/ }),

/***/ "./src/grilledTuna.jpeg":
/*!******************************!*\
  !*** ./src/grilledTuna.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "267f9f90bff558017c66.jpeg";

/***/ }),

/***/ "./src/milkshake.jpeg":
/*!****************************!*\
  !*** ./src/milkshake.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2e6e2b504032c4d8c656.jpeg";

/***/ }),

/***/ "./src/pasta.jpeg":
/*!************************!*\
  !*** ./src/pasta.jpeg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6d07533bc976db9388c.jpeg";

/***/ }),

/***/ "./src/pizza.jpeg":
/*!************************!*\
  !*** ./src/pizza.jpeg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "747bf56d6ee3c86ad406.jpeg";

/***/ }),

/***/ "./src/porkStew.jpeg":
/*!***************************!*\
  !*** ./src/porkStew.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35f3c202664b54d77bae.jpeg";

/***/ }),

/***/ "./src/recipies.png":
/*!**************************!*\
  !*** ./src/recipies.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "949ed1d15d943a5eec11.png";

/***/ }),

/***/ "./src/shrimp.jpeg":
/*!*************************!*\
  !*** ./src/shrimp.jpeg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "529dacf71e3c0f557f01.jpeg";

/***/ }),

/***/ "./src/vermicelli.jpeg":
/*!*****************************!*\
  !*** ./src/vermicelli.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0910e017f777f7aeeab8.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _drinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drinks */ "./src/drinks.js");
/* harmony import */ var _meals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meals */ "./src/meals.js");





const homeBtn = document.querySelector('.home');
const mealsBtn = document.querySelector('.meals');
const drinksBtn = document.querySelector('.drinks');
const aboutBtn = document.querySelector('.loyalty');

homeBtn.addEventListener('click', ()=>{
    (0,_home__WEBPACK_IMPORTED_MODULE_1__.home)()

});

mealsBtn.addEventListener('click', ()=>{
   (0,_meals__WEBPACK_IMPORTED_MODULE_3__.meals)()
});

drinksBtn.addEventListener('click', ()=>{
    (0,_drinks__WEBPACK_IMPORTED_MODULE_2__.drink)()
});

aboutBtn.addEventListener('click', ()=>{
    alert('Loyalty Programme Coming Soon')
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xCb0I7QUFDVTtBQUNHO0FBQ0Q7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJDQUFJO0FBQ1I7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLEdBQUcsNkNBQUs7QUFDUixDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUksOENBQUs7QUFDVCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2RyaW5rcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lYWxzLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvZHknKTtcclxuaW1wb3J0IEljb24gZnJvbSAnLi9yZWNpcGllcy5wbmcnO1xyXG5pbXBvcnQgY2FwdWNjaW5vIGZyb20gJy4vY2FwdWNjaW5vLmpwZWcnO1xyXG5pbXBvcnQgbWlsa3NoYWtlIGZyb20gXCIuL21pbGtzaGFrZS5qcGVnXCI7XHJcbmltcG9ydCBjaG9jb2xhdGUgZnJvbSBcIi4vY2hvY29sYXRlLmpwZWdcIjtcclxuaW1wb3J0IGNob2NvbGF0ZUNvZmZlZSBmcm9tIFwiLi9jaG9jb2xhdGVDb2ZmZWUuanBlZ1wiO1xyXG5pbXBvcnQgZHJpbmtzYmcxIGZyb20gXCIuL2RyaW5rc2JnMS5qcGVnXCI7XHJcbmNvbnN0IGRyaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5kcmlua3MuY2xhc3NOYW1lID0gJ2RyaW5rcyc7XHJcblxyXG5jb25zdCBjaG9pY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgY2hvaWNlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuY29uc3QgcHJpY2VQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5jb25zdCBjaG9pY2VJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxucHJpY2VQYXJhLnRleHRDb250ZW50ID0gJ0tzaCAyMjAnO1xyXG5jaG9pY2VQYXJhLnRleHRDb250ZW50ID0gJ0NhcHVjY2lubyBUZWEnO1xyXG5jaG9pY2VJbWcuYWx0ID0gJ0NhcHVjY2lubyBUZWEnO1xyXG5jaG9pY2VJbWcuaWQgPSAnZHJpbmtzJztcclxuY2hvaWNlSW1nLnNyYyA9IGNhcHVjY2lubztcclxuY2hvaWNlLmFwcGVuZENoaWxkKGNob2ljZVBhcmEpO1xyXG5jaG9pY2UuYXBwZW5kQ2hpbGQocHJpY2VQYXJhKTtcclxuY2hvaWNlLmFwcGVuZENoaWxkKGNob2ljZUltZyk7XHJcblxyXG5jb25zdCBjaG9pY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IGNob2ljZTJQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5jb25zdCBwcmljZTJQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5jb25zdCBjaG9pY2UySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbnByaWNlMlBhcmEudGV4dENvbnRlbnQgPSAnS3NoIDIwMCc7XHJcbmNob2ljZTJQYXJhLnRleHRDb250ZW50ID0gJ01pbGtzaGFrZSc7XHJcbmNob2ljZTJJbWcuaWQgPSAnZHJpbmtzJztcclxuY2hvaWNlMkltZy5zcmMgPSBtaWxrc2hha2U7XHJcbmNob2ljZTJJbWcuYWx0ID0gJ01pbGtzaGFrZSc7XHJcbmNob2ljZTIuYXBwZW5kQ2hpbGQoY2hvaWNlMlBhcmEpO1xyXG5jaG9pY2UyLmFwcGVuZENoaWxkKHByaWNlMlBhcmEpO1xyXG5jaG9pY2UyLmFwcGVuZENoaWxkKGNob2ljZTJJbWcpO1xyXG5cclxuY29uc3QgY2hvaWNlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCBjaG9pY2UzUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuY29uc3QgcHJpY2UzUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuY29uc3QgY2hvaWNlM0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5wcmljZTNQYXJhLnRleHRDb250ZW50ID0gJ0tzaCAyNTAnO1xyXG5jaG9pY2UzUGFyYS50ZXh0Q29udGVudCA9ICdDaG9jb2xhdGUnO1xyXG5jaG9pY2UzSW1nLmFsdCA9ICdDaG9jb2xhdGUnO1xyXG5jaG9pY2UzSW1nLmlkID0gJ2RyaW5rcyc7XHJcbmNob2ljZTNJbWcuc3JjID0gY2hvY29sYXRlO1xyXG5jaG9pY2UzLmFwcGVuZENoaWxkKGNob2ljZTNQYXJhKTtcclxuY2hvaWNlMy5hcHBlbmRDaGlsZChwcmljZTNQYXJhKTtcclxuY2hvaWNlMy5hcHBlbmRDaGlsZChjaG9pY2UzSW1nKTtcclxuXHJcbmNvbnN0IGNob2ljZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgY2hvaWNlNFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmNvbnN0IHByaWNlNFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmNvbnN0IGNob2ljZTRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxucHJpY2U0UGFyYS50ZXh0Q29udGVudCA9ICdLc2ggMzAwJztcclxuY2hvaWNlNFBhcmEudGV4dENvbnRlbnQgPSAnQ2hvY29sYXRlIENvZmZlZSc7XHJcbmNob2ljZTRJbWcuYWx0ID0gJ0Nob2NvbGF0ZSBDb2ZmZWUnO1xyXG5jaG9pY2U0SW1nLmlkID0gJ2RyaW5rcyc7XHJcbmNob2ljZTRJbWcuc3JjID0gY2hvY29sYXRlQ29mZmVlO1xyXG5jaG9pY2U0LmFwcGVuZENoaWxkKGNob2ljZTRQYXJhKTtcclxuY2hvaWNlNC5hcHBlbmRDaGlsZChwcmljZTRQYXJhKTtcclxuY2hvaWNlNC5hcHBlbmRDaGlsZChjaG9pY2U0SW1nKTtcclxuXHJcbmNvbnN0IGNob2ljZTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgY2hvaWNlNVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmNvbnN0IHByaWNlNVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmNvbnN0IGNob2ljZTVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxucHJpY2U1UGFyYS50ZXh0Q29udGVudCA9ICdLc2ggMTUwJztcclxuY2hvaWNlNVBhcmEudGV4dENvbnRlbnQgPSAnUG9ycmlkZ2UnO1xyXG5jaG9pY2U1SW1nLmFsdCA9ICdQb3JyaWRnZSc7XHJcbmNob2ljZTVJbWcuaWQgPSAnZHJpbmtzJztcclxuY2hvaWNlNUltZy5zcmMgPSBkcmlua3NiZzE7XHJcbmNob2ljZTUuYXBwZW5kQ2hpbGQoY2hvaWNlNVBhcmEpO1xyXG5jaG9pY2U1LmFwcGVuZENoaWxkKHByaWNlNVBhcmEpO1xyXG5jaG9pY2U1LmFwcGVuZENoaWxkKGNob2ljZTVJbWcpO1xyXG5cclxuY29uc3QgY2hvaWNlNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCBjaG9pY2U2UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuY29uc3QgcHJpY2U2UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuY29uc3QgY2hvaWNlNkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5wcmljZTZQYXJhLnRleHRDb250ZW50ID0gJ0tzaCAyNTAnO1xyXG5jaG9pY2U2UGFyYS50ZXh0Q29udGVudCA9ICdFc3ByZXNzbyc7XHJcbmNob2ljZTZJbWcuYWx0ID0gJ0VzcHJlc3NvJztcclxuY2hvaWNlNkltZy5pZCA9ICdkcmlua3MnO1xyXG5jaG9pY2U2SW1nLnNyYyA9IEljb247XHJcbmNob2ljZTYuYXBwZW5kQ2hpbGQoY2hvaWNlNlBhcmEpO1xyXG5jaG9pY2U2LmFwcGVuZENoaWxkKHByaWNlNlBhcmEpO1xyXG5jaG9pY2U2LmFwcGVuZENoaWxkKGNob2ljZTZJbWcpO1xyXG5cclxuZHJpbmtzLmFwcGVuZENoaWxkKGNob2ljZSk7XHJcbmRyaW5rcy5hcHBlbmRDaGlsZChjaG9pY2UyKTtcclxuZHJpbmtzLmFwcGVuZENoaWxkKGNob2ljZTMpO1xyXG5kcmlua3MuYXBwZW5kQ2hpbGQoY2hvaWNlNCk7XHJcbmRyaW5rcy5hcHBlbmRDaGlsZChjaG9pY2U1KTtcclxuZHJpbmtzLmFwcGVuZENoaWxkKGNob2ljZTYpO1xyXG5cclxuZnVuY3Rpb24gZHJpbmsoKSB7XHJcbiAgICBib2R5LnRleHRDb250ZW50ID0gJydcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZHJpbmtzKVxyXG59O1xyXG5cclxuZXhwb3J0IHtkcmlua307IiwiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5Jyk7XHJcbmltcG9ydCBJY29uIGZyb20gJy4vZHJpbmtzYmcyLmpwZWcnO1xyXG5cclxuY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG5jb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbmNvbnN0IGFib3V0aGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuY29uc3QgYWJvdXRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5jb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuYm9keS5jbGFzc05hbWUgPSAnYm9keSdcclxuaW1hZ2UuYWx0ID0gJ3BhZ2UnXHJcbmltYWdlLnNyYyA9IEljb25cclxuaW1hZ2UuaWQgPSAnbWFpbkltZydcclxuYWJvdXQuY2xhc3NOYW1lID0gJ2Fib3V0J1xyXG50aXRsZS50ZXh0Q29udGVudCA9ICdTVEFGT09EUyBSRVNUQVVSQU5UJ1xyXG5hYm91dGhlYWRlci50ZXh0Q29udGVudCA9ICdBYm91dCB1cydcclxuYWJvdXRQYXJhLnRleHRDb250ZW50ID0gXCIgVGhpcyBpcyBhIHZlcnkgZ29vZCByZXN0YXVyYW50LiBBIHBhZ2UgZm9yIGRpc2hlcyBzZXJ2ZWQgaW4gYSByZXN0YXVyYW50LiBQcmFjdGljaW5nIERPTSBtYW5pcHVsYXRpb24gYnkgZHluYW1pY2FsbHkgIHJlbmRlcmluZyBhIHNpbXBsZSByZXN0YXVyYW50IGhvbWVwYWdlLiBBbSB1c2luZyBKYXZhc2NyaXB0IGFsb25lIHRvIGdlbmVyYXRlIHRoZSBlbnRpcmUgY29udGVudHMgb2YgdGhlIHdlYnNpdGUhXCJcclxuYWJvdXRCdG4udGV4dENvbnRlbnQgPSAnTG95YWx0eSBQcm9ncmFtbWUnXHJcbmFib3V0QnRuLmNsYXNzTmFtZSA9ICdsb3lhbHR5J1xyXG5cclxuYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgYWxlcnQoJ0xveWFsdHkgUHJvZ3JhbW1lIENvbWluZyBTb29uJylcclxufSk7XHJcblxyXG5mdW5jdGlvbiBob21lKCkge1xyXG4gICAgYm9keS50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICAgIGFib3V0LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIGFib3V0LmFwcGVuZENoaWxkKGFib3V0aGVhZGVyKTtcclxuICAgIGFib3V0LmFwcGVuZENoaWxkKGFib3V0UGFyYSk7XHJcbiAgICBhYm91dC5hcHBlbmRDaGlsZChhYm91dEJ0bik7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYWJvdXQpO1xyXG59XHJcbmV4cG9ydCB7aG9tZX07XHJcblxyXG4iLCJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvZHknKTtcclxuaW1wb3J0IEljb24gZnJvbSAnLi9yZWNpcGllcy5wbmcnO1xyXG5pbXBvcnQgUGl6emEgZnJvbSAnLi9waXp6YS5qcGVnJztcclxuaW1wb3J0IFBhc3RhIGZyb20gJy4vcGFzdGEuanBlZyc7XHJcbmltcG9ydCBWZXJtaWNlbGxpIGZyb20gJy4vdmVybWljZWxsaS5qcGVnJztcclxuaW1wb3J0IFBvcmsgZnJvbSAnLi9wb3JrU3Rldy5qcGVnJztcclxuaW1wb3J0IFNocmltcCBmcm9tICcuL3NocmltcC5qcGVnJztcclxuaW1wb3J0IFR1bmEgZnJvbSAnLi9ncmlsbGVkVHVuYS5qcGVnJztcclxuaW1wb3J0IFZlZ2llcyBmcm9tICcuL2Jvd2wuanBlZyc7XHJcbmltcG9ydCBHcmlsbGVkIGZyb20gJy4vZ3JpbGxlZFNocmltcC5qcGVnJztcclxuY29uc3QgZm9vZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZm9vZHMuY2xhc3NOYW1lID0gJ2Zvb2RzJztcclxuXHJcbmNvbnN0IGNob2ljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCBjaG9pY2VQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5jb25zdCBwcmljZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmNvbnN0IGNob2ljZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5jaG9pY2VQYXJhLnRleHRDb250ZW50ID0gJ1BpenphJztcclxucHJpY2VQYXJhLnRleHRDb250ZW50ID0gJ0tzaCAxMDAwJztcclxuY2hvaWNlSW1nLmFsdCA9ICdQaXp6YSc7XHJcbmNob2ljZUltZy5pZCA9ICdtZWFscyc7XHJcbmNob2ljZUltZy5zcmMgPSBQaXp6YTtcclxuY2hvaWNlLmFwcGVuZENoaWxkKGNob2ljZVBhcmEpO1xyXG5jaG9pY2UuYXBwZW5kQ2hpbGQocHJpY2VQYXJhKTtcclxuY2hvaWNlLmFwcGVuZENoaWxkKGNob2ljZUltZyk7XHJcblxyXG5jb25zdCBjaG9pY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IGNob2ljZTJQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5jb25zdCBwcmljZTJQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5jb25zdCBjaG9pY2UySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbmNob2ljZTJQYXJhLnRleHRDb250ZW50ID0gJ1Bhc3RhJztcclxucHJpY2UyUGFyYS50ZXh0Q29udGVudCA9ICdLc2ggMzAwJztcclxuY2hvaWNlMkltZy5pZCA9ICdtZWFscyc7XHJcbmNob2ljZTJJbWcuc3JjID0gUGFzdGE7XHJcbmNob2ljZTJJbWcuYWx0ID0gJ3Bhc3RhJztcclxuY2hvaWNlMi5hcHBlbmRDaGlsZChjaG9pY2UyUGFyYSk7XHJcbmNob2ljZTIuYXBwZW5kQ2hpbGQocHJpY2UyUGFyYSk7XHJcbmNob2ljZTIuYXBwZW5kQ2hpbGQoY2hvaWNlMkltZyk7XHJcblxyXG5jb25zdCBjaG9pY2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IGNob2ljZTNQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5jb25zdCBwcmljZTNQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5jb25zdCBjaG9pY2UzSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbmNob2ljZTNQYXJhLnRleHRDb250ZW50ID0gJ1Zlcm1pY2VsbGknO1xyXG5wcmljZTNQYXJhLnRleHRDb250ZW50ID0gJ0tzaCAzNTAnO1xyXG5jaG9pY2UzSW1nLmFsdCA9ICdWZXJtaWNlbGxpJztcclxuY2hvaWNlM0ltZy5pZCA9ICdtZWFscyc7XHJcbmNob2ljZTNJbWcuc3JjID0gVmVybWljZWxsaTtcclxuY2hvaWNlMy5hcHBlbmRDaGlsZChjaG9pY2UzUGFyYSk7XHJcbmNob2ljZTMuYXBwZW5kQ2hpbGQocHJpY2UzUGFyYSk7XHJcbmNob2ljZTMuYXBwZW5kQ2hpbGQoY2hvaWNlM0ltZyk7XHJcblxyXG5jb25zdCBjaG9pY2U0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IGNob2ljZTRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5jb25zdCBwcmljZTRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5jb25zdCBjaG9pY2U0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbmNob2ljZTRQYXJhLnRleHRDb250ZW50ID0gJ1BvcmsgU3Rldyc7XHJcbnByaWNlNFBhcmEudGV4dENvbnRlbnQgPSAnS3NoIDQ1MCc7XHJcbmNob2ljZTRJbWcuYWx0ID0gJ1BvcmsgU3Rldyc7XHJcbmNob2ljZTRJbWcuaWQgPSAnbWVhbHMnO1xyXG5jaG9pY2U0SW1nLnNyYyA9IFBvcms7XHJcbmNob2ljZTQuYXBwZW5kQ2hpbGQoY2hvaWNlNFBhcmEpO1xyXG5jaG9pY2U0LmFwcGVuZENoaWxkKHByaWNlNFBhcmEpO1xyXG5jaG9pY2U0LmFwcGVuZENoaWxkKGNob2ljZTRJbWcpO1xyXG5cclxuY29uc3QgY2hvaWNlNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCBjaG9pY2U1UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuY29uc3QgcHJpY2U1UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuY29uc3QgY2hvaWNlNUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5jaG9pY2U1UGFyYS50ZXh0Q29udGVudCA9ICdTaHJpbXAnO1xyXG5wcmljZTVQYXJhLnRleHRDb250ZW50ID0gJ0tzaCA2MDAnO1xyXG5jaG9pY2U1SW1nLmFsdCA9ICdTaHJpbXAnO1xyXG5jaG9pY2U1SW1nLmlkID0gJ21lYWxzJztcclxuY2hvaWNlNUltZy5zcmMgPSBTaHJpbXA7XHJcbmNob2ljZTUuYXBwZW5kQ2hpbGQoY2hvaWNlNVBhcmEpO1xyXG5jaG9pY2U1LmFwcGVuZENoaWxkKHByaWNlNVBhcmEpO1xyXG5jaG9pY2U1LmFwcGVuZENoaWxkKGNob2ljZTVJbWcpO1xyXG5cclxuY29uc3QgY2hvaWNlNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCBjaG9pY2U2UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuY29uc3QgcHJpY2U2UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuY29uc3QgY2hvaWNlNkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5jaG9pY2U2UGFyYS50ZXh0Q29udGVudCA9ICdHcmlsbGVkIFR1bmEnO1xyXG5wcmljZTZQYXJhLnRleHRDb250ZW50ID0gJ0tzaCAzMzAnO1xyXG5jaG9pY2U2SW1nLmFsdCA9ICdHcmlsbGVkIFR1bmEnO1xyXG5jaG9pY2U2SW1nLmlkID0gJ21lYWxzJztcclxuY2hvaWNlNkltZy5zcmMgPSBUdW5hO1xyXG5jaG9pY2U2LmFwcGVuZENoaWxkKGNob2ljZTZQYXJhKTtcclxuY2hvaWNlNi5hcHBlbmRDaGlsZChwcmljZTZQYXJhKTtcclxuY2hvaWNlNi5hcHBlbmRDaGlsZChjaG9pY2U2SW1nKTtcclxuXHJcbmNvbnN0IGNob2ljZTcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgY2hvaWNlN1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmNvbnN0IHByaWNlN1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmNvbnN0IGNob2ljZTdJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuY2hvaWNlN1BhcmEudGV4dENvbnRlbnQgPSAnR3JpbGxlZCBTaHJpbXAnO1xyXG5wcmljZTdQYXJhLnRleHRDb250ZW50ID0gJ0tzaCA0MzAnO1xyXG5jaG9pY2U3SW1nLmFsdCA9ICdHcmlsbGVkIFNocmltcCc7XHJcbmNob2ljZTdJbWcuaWQgPSAnbWVhbHMnO1xyXG5jaG9pY2U3SW1nLnNyYyA9IEdyaWxsZWQ7XHJcbmNob2ljZTcuYXBwZW5kQ2hpbGQoY2hvaWNlN1BhcmEpO1xyXG5jaG9pY2U3LmFwcGVuZENoaWxkKHByaWNlN1BhcmEpO1xyXG5jaG9pY2U3LmFwcGVuZENoaWxkKGNob2ljZTdJbWcpO1xyXG5cclxuY29uc3QgY2hvaWNlOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCBjaG9pY2U4UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuY29uc3QgcHJpY2U4UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuY29uc3QgY2hvaWNlOEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5jaG9pY2U4UGFyYS50ZXh0Q29udGVudCA9ICdWZWdldGFibGVzJztcclxucHJpY2U4UGFyYS50ZXh0Q29udGVudCA9ICdLc2ggMjUwJztcclxuY2hvaWNlOEltZy5hbHQgPSAnVmVnZXRhYmxlcyc7XHJcbmNob2ljZThJbWcuaWQgPSAnbWVhbHMnO1xyXG5jaG9pY2U4SW1nLnNyYyA9IFZlZ2llcztcclxuY2hvaWNlOC5hcHBlbmRDaGlsZChjaG9pY2U4UGFyYSk7XHJcbmNob2ljZTguYXBwZW5kQ2hpbGQocHJpY2U4UGFyYSk7XHJcbmNob2ljZTguYXBwZW5kQ2hpbGQoY2hvaWNlOEltZyk7XHJcblxyXG5jb25zdCBjaG9pY2U5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IGNob2ljZTlQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5jb25zdCBwcmljZTlQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5jb25zdCBjaG9pY2U5SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbmNob2ljZTlQYXJhLnRleHRDb250ZW50ID0gJ0NvbWluZyBTb29uJztcclxucHJpY2U5UGFyYS50ZXh0Q29udGVudCA9ICdLc2ggJztcclxuY2hvaWNlOUltZy5hbHQgPSAnJztcclxuY2hvaWNlOUltZy5pZCA9ICdtZWFscyc7XHJcbmNob2ljZTlJbWcuc3JjID0gSWNvbjtcclxuY2hvaWNlOS5hcHBlbmRDaGlsZChjaG9pY2U5UGFyYSk7XHJcbmNob2ljZTkuYXBwZW5kQ2hpbGQocHJpY2U5UGFyYSk7XHJcbmNob2ljZTkuYXBwZW5kQ2hpbGQoY2hvaWNlOUltZyk7XHJcblxyXG4gICAgZm9vZHMuYXBwZW5kQ2hpbGQoY2hvaWNlKTtcclxuICAgIGZvb2RzLmFwcGVuZENoaWxkKGNob2ljZTIpO1xyXG4gICAgZm9vZHMuYXBwZW5kQ2hpbGQoY2hvaWNlMyk7XHJcbiAgICBmb29kcy5hcHBlbmRDaGlsZChjaG9pY2U0KTtcclxuICAgIGZvb2RzLmFwcGVuZENoaWxkKGNob2ljZTUpO1xyXG4gICAgZm9vZHMuYXBwZW5kQ2hpbGQoY2hvaWNlNik7XHJcbiAgICBmb29kcy5hcHBlbmRDaGlsZChjaG9pY2U3KTtcclxuICAgIGZvb2RzLmFwcGVuZENoaWxkKGNob2ljZTgpO1xyXG4gICAgZm9vZHMuYXBwZW5kQ2hpbGQoY2hvaWNlOSk7XHJcblxyXG5mdW5jdGlvbiBtZWFscygpIHtcclxuICAgIGJvZHkudGV4dENvbnRlbnQgPSAnJ1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChmb29kcylcclxuICAgXHJcbn07XHJcblxyXG5leHBvcnQge21lYWxzfTtcclxuIiwiY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbmltcG9ydCBJY29uIGZyb20gJy4vZHJpbmtzYmcyLmpwZWcnO1xyXG5cclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuY29uc3QgbWVhbHNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuY29uc3QgZHJpbmtzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG5oZWFkZXIuY2xhc3NOYW1lID0gJ2hlYWRlcic7XHJcbmhvbWVCdG4uY2xhc3NOYW1lID0gJ2hvbWUnO1xyXG5ob21lQnRuLnRleHRDb250ZW50ID0gJ0hvbWUnO1xyXG5tZWFsc0J0bi50ZXh0Q29udGVudCA9ICdNZWFscyc7XHJcbm1lYWxzQnRuLmNsYXNzTmFtZSA9ICdtZWFscyc7XHJcbmRyaW5rc0J0bi50ZXh0Q29udGVudCA9ICdEcmlua3MnO1xyXG5kcmlua3NCdG4uY2xhc3NOYW1lID0gJ2RyaW5rcyc7XHJcblxyXG5oZWFkZXIuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XHJcbmhlYWRlci5hcHBlbmRDaGlsZChtZWFsc0J0bik7XHJcbmhlYWRlci5hcHBlbmRDaGlsZChkcmlua3NCdG4pO1xyXG5jb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5jb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbmNvbnN0IGFib3V0aGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuY29uc3QgYWJvdXRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5jb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuYm9keS5jbGFzc05hbWUgPSAnYm9keSc7XHJcbmltYWdlLmFsdCA9ICdwYWdlJztcclxuaW1hZ2Uuc3JjID0gSWNvbjtcclxuaW1hZ2UuaWQgPSAnbWFpbkltZyc7XHJcbmFib3V0LmNsYXNzTmFtZSA9ICdhYm91dCc7XHJcbnRpdGxlLnRleHRDb250ZW50ID0gJ1NUQUZPT0RTIFJFU1RBVVJBTlQnO1xyXG5hYm91dGhlYWRlci50ZXh0Q29udGVudCA9ICdBYm91dCB1cyc7XHJcbmFib3V0UGFyYS50ZXh0Q29udGVudCA9IFwiIFRoaXMgaXMgYSB2ZXJ5IGdvb2QgcmVzdGF1cmFudC4gQSBwYWdlIGZvciBkaXNoZXMgc2VydmVkIGluIGEgcmVzdGF1cmFudC4gUHJhY3RpY2luZyBET00gbWFuaXB1bGF0aW9uIGJ5IGR5bmFtaWNhbGx5ICByZW5kZXJpbmcgYSBzaW1wbGUgcmVzdGF1cmFudCBob21lcGFnZS4gQW0gdXNpbmcgSmF2YXNjcmlwdCBhbG9uZSB0byBnZW5lcmF0ZSB0aGUgZW50aXJlIGNvbnRlbnRzIG9mIHRoZSB3ZWJzaXRlIVwiXHJcblxyXG5hYm91dEJ0bi5jbGFzc05hbWUgPSAnbG95YWx0eSc7XHJcbmFib3V0QnRuLnRleHRDb250ZW50ID0gJ0xveWFsdHkgUHJvZ3JhbW1lJztcclxuXHJcbmFib3V0LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRoZWFkZXIpO1xyXG5hYm91dC5hcHBlbmRDaGlsZChhYm91dFBhcmEpO1xyXG5hYm91dC5hcHBlbmRDaGlsZChhYm91dEJ0bik7XHJcbmJvZHkuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG5ib2R5LmFwcGVuZENoaWxkKGFib3V0KTtcclxuY29udGVudC5hcHBlbmRDaGlsZChib2R5KTtcclxuXHJcblxyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuY29uc3QgZm9vdGVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5jb25zdCBjb25uZWN0QnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmNvbnN0IHR3aXR0ZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuY29uc3QgaW5zdGFncmFtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbmNvbnN0IGZhY2Vib29rQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbmNvbnN0IGVtYWlsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbmNvbnN0IGdpdGh1YkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxubGVmdC5jbGFzc05hbWUgPSAnbGVmdCc7XHJcbnJpZ2h0LmNsYXNzTmFtZSA9ICdyaWdodCc7XHJcbnJpZ2h0LnRleHRDb250ZW50ID0gYEltYWdlcyBnZW5lcmF0ZWQgZnJvbSBVbnNwbGFzaGA7XHJcbmZvb3RlckhlYWRlci50ZXh0Q29udGVudCA9ICdDb25uZWN0IG9uJztcclxuY29ubmVjdEJ0bnMuY2xhc3NOYW1lID0gJyBDb25uZWN0JztcclxudHdpdHRlckJ0bi50ZXh0Q29udGVudCA9ICdUd2l0dGVyJztcclxuaW5zdGFncmFtQnRuLnRleHRDb250ZW50ID0gJ0luc3RhZ3JhbSc7XHJcbmZhY2Vib29rQnRuLnRleHRDb250ZW50ID0gJ0ZhY2Vib29rJztcclxuZW1haWxCdG4udGV4dENvbnRlbnQgPSAnRW1haWwnO1xyXG5naXRodWJCdG4udGV4dENvbnRlbnQgPSAnR2l0aHViJztcclxuXHJcbmNvbm5lY3RCdG5zLmFwcGVuZENoaWxkKHR3aXR0ZXJCdG4pO1xyXG5jb25uZWN0QnRucy5hcHBlbmRDaGlsZChpbnN0YWdyYW1CdG4pO1xyXG5jb25uZWN0QnRucy5hcHBlbmRDaGlsZChmYWNlYm9va0J0bik7XHJcbmNvbm5lY3RCdG5zLmFwcGVuZENoaWxkKGVtYWlsQnRuKTtcclxuY29ubmVjdEJ0bnMuYXBwZW5kQ2hpbGQoZ2l0aHViQnRuKTtcclxubGVmdC5hcHBlbmRDaGlsZChmb290ZXJIZWFkZXIpO1xyXG5sZWZ0LmFwcGVuZENoaWxkKGNvbm5lY3RCdG5zKTtcclxuZm9vdGVyLmFwcGVuZENoaWxkKGxlZnQpO1xyXG5mb290ZXIuYXBwZW5kQ2hpbGQocmlnaHQpO1xyXG5jb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3BhZ2VMb2FkJztcclxuaW1wb3J0IHsgaG9tZSB9IGZyb20gJy4vaG9tZSc7XHJcbmltcG9ydCB7IGRyaW5rIH0gZnJvbSBcIi4vZHJpbmtzXCI7XHJcbmltcG9ydCB7IG1lYWxzfSBmcm9tICcuL21lYWxzJyA7XHJcblxyXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcclxuY29uc3QgbWVhbHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbHMnKTtcclxuY29uc3QgZHJpbmtzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyaW5rcycpO1xyXG5jb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3lhbHR5Jyk7XHJcblxyXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGhvbWUoKVxyXG5cclxufSk7XHJcblxyXG5tZWFsc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgIG1lYWxzKClcclxufSk7XHJcblxyXG5kcmlua3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgZHJpbmsoKVxyXG59KTtcclxuXHJcbmFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGFsZXJ0KCdMb3lhbHR5IFByb2dyYW1tZSBDb21pbmcgU29vbicpXHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=