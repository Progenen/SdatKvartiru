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

eval("document.addEventListener('DOMContentLoaded', function () {\r\n    if (window.innerWidth <= 768) {\r\n        const burger = document.querySelector(\".header__btn-burger\");\r\n        const menu = document.querySelector(\".header__menu\");\r\n        const header = document.querySelector(\".header\");\r\n\r\n        document.body.append(menu);\r\n        menu.style.paddingTop = header.clientHeight + \"px\";\r\n\r\n        burger.addEventListener(\"click\", () => {\r\n            burger.classList.toggle(\"active\");\r\n            menu.classList.toggle(\"active\");\r\n            document.body.classList.toggle(\"lock\");\r\n        });\r\n    }\r\n\r\n    if (window.innerWidth <= 576) {\r\n        if (document.querySelector(\"[src-mob]\")) {\r\n            document.querySelectorAll(\"[src-mob]\").forEach(img => {\r\n                img.src = img.getAttribute(\"src-mob\");\r\n            })\r\n        }\r\n    }\r\n});\n\n//# sourceURL=webpack://project-name/./src/js/index.js?");

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