/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n    if (window.innerWidth <= 768) {\n        const burger = document.querySelector(\".header__btn-burger\");\n        const menu = document.querySelector(\".header__menu\");\n        const header = document.querySelector(\".header\");\n\n        document.body.append(menu);\n        menu.style.paddingTop = header.clientHeight + \"px\";\n\n        burger.addEventListener(\"click\", () => {\n            burger.classList.toggle(\"active\");\n            menu.classList.toggle(\"active\");\n            document.body.classList.toggle(\"lock\");\n        });\n    }\n\n    if (window.innerWidth <= 576) {\n        if (document.querySelector(\"[src-mob]\")) {\n            document.querySelectorAll(\"[src-mob]\").forEach(img => {\n                img.src = img.getAttribute(\"src-mob\");\n            })\n        }\n    }\n});\n\n//# sourceURL=webpack://project-name/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;