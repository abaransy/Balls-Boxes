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
/*! exports provided: loadBalls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadBalls\", function() { return loadBalls; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nconst loadBalls = () => {\n  let scene = document.getElementsByClassName(\"scene\")[0];\n  let placings = {};\n  let balls = Array.from(document.getElementsByClassName(\"balls\")[0].children);\n  let firstDraggable = new PlainDraggable(document.getElementById(\"first_draggable_ball\"));\n  let secondDraggable = new PlainDraggable(document.getElementById(\"second_draggable_ball\"));\n  let thirdDraggable = new PlainDraggable(document.getElementById(\"third_draggable_ball\"));\n  let draggables = [firstDraggable, secondDraggable, thirdDraggable];\n  let container = document.getElementsByClassName(\"scene\")[0];\n  let targets = [{\n    x: 168,\n    y: 476,\n    center: true\n  }, {\n    x: 360,\n    y: 476,\n    center: true\n  }, {\n    x: 552,\n    y: 476,\n    center: true\n  }];\n\n  const updatePlacings = ballId => {\n    let ball = document.getElementById(ballId);\n    let ballX = ball.getBoundingClientRect().x;\n    let ballY = ball.getBoundingClientRect().y;\n    let sceneX = scene.getBoundingClientRect().x;\n    let sceneY = scene.getBoundingClientRect().y;\n    let deltaX = sceneX - ballX;\n    let deltaY = sceneY - ballY;\n\n    if (deltaY === -420) {\n      if (deltaX === -112) {\n        placings[ballId] = 1;\n      } else if (deltaX === -304) {\n        placings[ballId] = 2;\n      } else if (deltaX === -496) {\n        placings[ballId] = 3;\n      }\n    }\n\n    console.log(deltaY, deltaX);\n\n    if (Object.keys(placings).length === 3) {\n      Object(_game__WEBPACK_IMPORTED_MODULE_0__[\"evaluatePlacings\"])(placings);\n      placings = {};\n    }\n  };\n\n  draggables.forEach(draggable => {\n    draggable.containment = container;\n    draggable.snap = targets;\n    draggable.zIndex = 3;\n\n    draggable.onDragEnd = () => updatePlacings(draggable.element.id);\n  });\n  return balls;\n};\n\n//# sourceURL=webpack:///./src/drag_and_drop.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: play, evaluatePlacings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"play\", function() { return play; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"evaluatePlacings\", function() { return evaluatePlacings; });\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levels */ \"./src/levels.js\");\n/* harmony import */ var _swap_balls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swap_balls */ \"./src/swap_balls.js\");\n/* harmony import */ var _drag_and_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag_and_drop */ \"./src/drag_and_drop.js\");\n\n\n\nlet currLevelIdx = 0;\nlet currLevel = _levels__WEBPACK_IMPORTED_MODULE_0__[\"default\"][currLevelIdx];\nlet score;\nlet balls;\nlet modal;\nlet levelBox;\n\nconst resetBallsPosition = balls => {\n  balls.forEach(ball => {\n    ball.style.top = \"0px\";\n    ball.style.right = \"0px\";\n    ball.style.left = \"0px\";\n    ball.style.bottom = \"0px\";\n    ball.style.transform = \"none\";\n  });\n};\n\nconst play = () => {\n  balls = Object(_drag_and_drop__WEBPACK_IMPORTED_MODULE_2__[\"loadBalls\"])();\n  modal = document.getElementById(\"start_game_modal\");\n  levelBox = document.getElementById(\"level\");\n  levelBox.style.visibility = \"visible\";\n  levelBox.innerHTML = `Level ${currLevelIdx + 1}`;\n  modal.style.opacity = \"0\";\n  modal.style.visibility = \"visible\";\n  let instructions = currLevel.instructions;\n  let pairIdx = 0;\n\n  const shuffleBalls = () => {\n    if (pairIdx === instructions.length) {\n      clearInterval(interval);\n      resetBallsPosition(balls);\n      modal.style.visibility = \"hidden\";\n    } else {\n      let pair = instructions[pairIdx];\n      Object(_swap_balls__WEBPACK_IMPORTED_MODULE_1__[\"swapBalls\"])(pair[0], pair[1]);\n      resetBallsPosition(balls);\n    }\n  };\n\n  let interval = setInterval(() => {\n    shuffleBalls();\n    pairIdx += 1;\n  }, 1500);\n};\n\nconst handleLoss = () => {\n  console.log('lost');\n};\n\nconst handleWin = () => {\n  currLevelIdx++;\n  currLevel = _levels__WEBPACK_IMPORTED_MODULE_0__[\"default\"][currLevelIdx];\n  resetBallsPosition(balls);\n  play(modal, levelBox);\n};\n\nconst evaluatePlacings = placings => {\n  let lost = false;\n\n  for (let ball in currLevel.finalPlacings) {\n    if (currLevel.finalPlacings[ball] !== placings[ball]) {\n      lost = true;\n    }\n  }\n\n  if (lost) {\n    handleLoss();\n  } else {\n    handleWin();\n  }\n};\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _start_game_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start_game_modal */ \"./src/start_game_modal.js\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/levels.js":
/*!***********************!*\
  !*** ./src/levels.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst firstBallId = \"first_draggable_ball\";\nconst secondBallId = \"second_draggable_ball\";\nconst thirdBallId = \"third_draggable_ball\";\nlet level1 = {\n  instructions: [[firstBallId, thirdBallId]],\n  finalPlacings: {\n    \"first_draggable_ball\": 3,\n    \"second_draggable_ball\": 2,\n    \"third_draggable_ball\": 1\n  }\n};\nlet level2 = {\n  instructions: [[firstBallId, thirdBallId], [secondBallId, thirdBallId]],\n  finalPlacings: {\n    \"first_draggable_ball\": 3,\n    \"second_draggable_ball\": 1,\n    \"third_draggable_ball\": 2\n  }\n};\nlet level3 = {\n  instructions: [[firstBallId, secondBallId], [secondBallId, thirdBallId], [firstBallId, thirdBallId]],\n  finalPlacings: {\n    \"first_draggable_ball\": 1,\n    \"second_draggable_ball\": 3,\n    \"third_draggable_ball\": 2\n  }\n};\nlet level4 = {\n  instructions: [[secondBallId, thirdBallId], [firstBallId, thirdBallId], [firstBallId, secondBallId], [firstBallId, thirdBallId]],\n  finalPlacings: {\n    \"first_draggable_ball\": 1,\n    \"second_draggable_ball\": 2,\n    \"third_draggable_ball\": 3\n  }\n};\nlet level5 = {\n  instructions: [[firstBallId, secondBallId], [secondBallId, thirdBallId], [firstBallId, secondBallId], [secondBallId, thirdBallId], [firstBallId, thirdBallId]],\n  finalPlacings: {\n    \"first_draggable_ball\": 2,\n    \"second_draggable_ball\": 1,\n    \"third_draggable_ball\": 3\n  }\n};\nlet level6 = {\n  instructions: [[firstBallId, secondBallId], [firstBallId, thirdBallId], [secondBallId, thirdBallId], [firstBallId, secondBallId], [firstBallId, thirdBallId], [secondBallId, thirdBallId]],\n  finalPlacings: {\n    \"first_draggable_ball\": 1,\n    \"second_draggable_ball\": 2,\n    \"third_draggable_ball\": 3\n  }\n};\nlet level7 = {\n  instructions: [[firstBallId, secondBallId], [secondBallId, thirdBallId], [firstBallId, secondBallId], [secondBallId, thirdBallId], [firstBallId, thirdBallId], [firstBallId, secondBallId], [secondBallId, thirdBallId]],\n  finalPlacings: {\n    \"first_draggable_ball\": 1,\n    \"second_draggable_ball\": 3,\n    \"third_draggable_ball\": 2\n  }\n};\nlet level8 = {\n  instructions: [[firstBallId, secondBallId], [secondBallId, thirdBallId], [firstBallId, secondBallId], [secondBallId, thirdBallId], [firstBallId, thirdBallId]],\n  finalPlacings: {\n    \"first_draggable_ball\": 2,\n    \"second_draggable_ball\": 1,\n    \"third_draggable_ball\": 3\n  }\n};\nlet level9 = {\n  instructions: [[firstBallId, secondBallId], [secondBallId, thirdBallId], [firstBallId, secondBallId], [secondBallId, thirdBallId], [firstBallId, thirdBallId]],\n  finalPlacings: {\n    \"first_draggable_ball\": 2,\n    \"second_draggable_ball\": 1,\n    \"third_draggable_ball\": 3\n  }\n};\nlet level10 = {\n  instructions: [[firstBallId, secondBallId], [secondBallId, thirdBallId], [firstBallId, secondBallId], [secondBallId, thirdBallId], [firstBallId, thirdBallId]],\n  finalPlacings: {\n    \"first_draggable_ball\": 2,\n    \"second_draggable_ball\": 1,\n    \"third_draggable_ball\": 3\n  }\n};\nlet levels = [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10];\n/* harmony default export */ __webpack_exports__[\"default\"] = (levels);\n\n//# sourceURL=webpack:///./src/levels.js?");

/***/ }),

/***/ "./src/start_game_modal.js":
/*!*********************************!*\
  !*** ./src/start_game_modal.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels */ \"./src/levels.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const level = document.getElementById('level');\n  level.style.visibility = \"hidden\";\n  const startButton = document.getElementById(\"start_button\");\n  const secondsHtml = document.getElementById(\"seconds\");\n  let seconds;\n  let clicked = false;\n\n  const setCountDown = () => {\n    if (clicked) return;\n    clicked = true;\n\n    const handleSeconds = () => {\n      if (seconds === 1) {\n        clearInterval(interval);\n        Object(_game__WEBPACK_IMPORTED_MODULE_0__[\"play\"])();\n      } else {\n        seconds -= 1;\n        secondsHtml.innerHTML = seconds;\n      }\n    };\n\n    if (!seconds) seconds = 4;\n    let interval = setInterval(handleSeconds, 1000);\n  };\n\n  startButton.onclick = setCountDown;\n});\n\n//# sourceURL=webpack:///./src/start_game_modal.js?");

/***/ }),

/***/ "./src/swap_balls.js":
/*!***************************!*\
  !*** ./src/swap_balls.js ***!
  \***************************/
/*! exports provided: swapBalls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"swapBalls\", function() { return swapBalls; });\nconst swapBalls = (firstBallId, secondBallId) => {\n  const firstBall = document.getElementById(firstBallId);\n  const secondBall = document.getElementById(secondBallId);\n  let radius;\n\n  if (firstBallId === \"first_draggable_ball\" && secondBallId === \"second_draggable_ball\" || firstBallId === \"second_draggable_ball\" && secondBallId === \"third_draggable_ball\") {\n    radius = 96;\n  } else {\n    radius = 192;\n  }\n\n  let top = 0.1;\n  let left = 0;\n  let right = 0;\n  let positive = false; // if (firstBallId === \"second_draggable_ball\" && secondBallId === \"third_draggable_ball\") {\n  //     positive = false; \n  // } \n\n  const frame = () => {\n    if (top == 0) {\n      clearInterval(interval);\n    } else {\n      left += 3;\n      right += 3;\n      top = Math.sqrt(2 * radius * left - Math.pow(left, 2));\n      firstBall.style.transform = `translate( ${`${left}px, ${-top}px`} )`;\n      secondBall.style.transform = `translate( ${`${positive ? right : -right}px, ${-top}px`} )`; // console.log(firstBall)\n      // console.log(secondBall)\n    }\n  };\n\n  let interval = setInterval(frame, 1);\n};\n\n//# sourceURL=webpack:///./src/swap_balls.js?");

/***/ })

/******/ });