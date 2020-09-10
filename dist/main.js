/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/drag_and_drop.js":
/*!******************************!*\
  !*** ./src/drag_and_drop.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n  let scene = document.getElementsByClassName(\"scene\")[0];\n  let placings = {};\n  let firstDraggable = new PlainDraggable(document.getElementById(\"first_draggable_ball\"));\n  let secondDraggable = new PlainDraggable(document.getElementById(\"second_draggable_ball\"));\n  let thirdDraggable = new PlainDraggable(document.getElementById(\"third_draggable_ball\"));\n  let draggables = [firstDraggable, secondDraggable, thirdDraggable];\n  let container = document.getElementsByClassName(\"scene\")[0];\n  let targets = [{\n    x: 166,\n    y: 423,\n    center: true\n  }, {\n    x: 358,\n    y: 423,\n    center: true\n  }, {\n    x: 550,\n    y: 423,\n    center: true\n  }];\n\n  const updatePlacings = ballId => {\n    let ball = document.getElementById(ballId);\n    let ballX = ball.getBoundingClientRect().x;\n    let ballY = ball.getBoundingClientRect().y;\n    let sceneX = scene.getBoundingClientRect().x;\n    let sceneY = scene.getBoundingClientRect().y;\n    let deltaX = sceneX - ballX;\n    let deltaY = sceneY - ballY;\n\n    if (deltaY === -368.59375) {\n      if (deltaX === -111.59375) {\n        placings[ballId] = 1;\n      } else if (deltaX === -303.59375) {\n        placings[ballId] = 2;\n      } else if (deltaX === -495.59375) {\n        placings[ballId] = 3;\n      }\n    }\n  };\n\n  draggables.forEach(draggable => {\n    draggable.containment = container;\n    draggable.snap = targets;\n\n    draggable.onDragEnd = () => updatePlacings(draggable.element.id);\n  });\n});\n\n//# sourceURL=webpack:///./src/drag_and_drop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drag_and_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag_and_drop */ \"./src/drag_and_drop.js\");\n/* harmony import */ var _drag_and_drop__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_drag_and_drop__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _swap_balls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swap_balls */ \"./src/swap_balls.js\");\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/swap_balls.js":
/*!***************************!*\
  !*** ./src/swap_balls.js ***!
  \***************************/
/*! exports provided: swapBalls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"swapBalls\", function() { return swapBalls; });\nconst swapBalls = (firstBall, secondBall) => {\n  const radius = (secondBall.getBoundingClientRect().x - firstBall.getBoundingClientRect().x) / 2;\n  let top = 0.1;\n  let left = 0;\n  let right = 0;\n\n  const frame = () => {\n    if (top == 0) {\n      clearInterval(id);\n    } else {\n      left += 3;\n      right += 3;\n      top = Math.sqrt(2 * radius * left - Math.pow(left, 2));\n      firstBall.style.top = -top + \"px\";\n      firstBall.style.left = left + \"px\";\n      secondBall.style.top = -top + \"px\";\n      secondBall.style.right = right + \"px\";\n    }\n  };\n\n  let id = setInterval(frame, 1);\n};\n\n//# sourceURL=webpack:///./src/swap_balls.js?");

/***/ })

/******/ });