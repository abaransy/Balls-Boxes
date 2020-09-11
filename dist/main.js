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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadBalls\", function() { return loadBalls; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nconst loadBalls = () => {\n  let scene = document.getElementsByClassName(\"scene\")[0];\n  let placings = {};\n  let balls = Array.from(document.getElementsByClassName(\"balls\")[0].children);\n  let firstDraggable = new PlainDraggable(document.getElementById(\"first_draggable_ball\"));\n  let secondDraggable = new PlainDraggable(document.getElementById(\"second_draggable_ball\"));\n  let thirdDraggable = new PlainDraggable(document.getElementById(\"third_draggable_ball\"));\n  let draggables = [firstDraggable, secondDraggable, thirdDraggable];\n  let container = document.getElementsByClassName(\"scene\")[0];\n  let targets = [{\n    x: 166,\n    y: 423,\n    center: true\n  }, {\n    x: 358,\n    y: 423,\n    center: true\n  }, {\n    x: 550,\n    y: 423,\n    center: true\n  }];\n\n  const updatePlacings = ballId => {\n    let ball = document.getElementById(ballId);\n    let ballX = ball.getBoundingClientRect().x;\n    let ballY = ball.getBoundingClientRect().y;\n    let sceneX = scene.getBoundingClientRect().x;\n    let sceneY = scene.getBoundingClientRect().y;\n    let deltaX = sceneX - ballX;\n    let deltaY = sceneY - ballY;\n\n    if (deltaY === -368.59375) {\n      if (deltaX === -111.59375) {\n        placings[ballId] = 1;\n      } else if (deltaX === -303.59375) {\n        placings[ballId] = 2;\n      } else if (deltaX === -495.59375) {\n        placings[ballId] = 3;\n      }\n    }\n\n    if (Object.keys(placings).length === 3) {\n      Object(_game__WEBPACK_IMPORTED_MODULE_0__[\"evaluatePlacings\"])(placings);\n      placings = {};\n    }\n  };\n\n  draggables.forEach(draggable => {\n    draggable.containment = container;\n    draggable.snap = targets;\n    draggable.zIndex = 2;\n\n    draggable.onDragEnd = () => updatePlacings(draggable.element.id);\n  });\n  return balls;\n};\n\n//# sourceURL=webpack:///./src/drag_and_drop.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: play, evaluatePlacings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"play\", function() { return play; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"evaluatePlacings\", function() { return evaluatePlacings; });\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levels */ \"./src/levels.js\");\n/* harmony import */ var _swap_balls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swap_balls */ \"./src/swap_balls.js\");\n/* harmony import */ var _drag_and_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag_and_drop */ \"./src/drag_and_drop.js\");\n\n\n\nlet currLevelIdx = 0;\nlet currLevel = _levels__WEBPACK_IMPORTED_MODULE_0__[\"default\"][currLevelIdx];\nlet score;\nlet ballElements;\nlet modal;\nlet levelBox;\n\nconst resetBallsPosition = balls => {\n  balls.forEach(ball => {\n    ball.style.top = \"0px\";\n    ball.style.right = \"0px\";\n    ball.style.left = \"0px\";\n    ball.style.bottom = \"0px\";\n    ball.style.transform = \"none\";\n  });\n};\n\nconst play = (startGameModal, level) => {\n  ballElements = Object(_drag_and_drop__WEBPACK_IMPORTED_MODULE_2__[\"loadBalls\"])();\n  modal = modal || startGameModal;\n  levelBox = levelBox || level;\n  level.style.visibility = \"visible\";\n  level.innerHTML = `Level ${currLevelIdx + 1}`;\n  startGameModal.style.opacity = \"0\";\n  let instructions = currLevel.instructions;\n  let pairIdx = 0;\n  let pair = instructions[pairIdx];\n\n  const shuffleBalls = () => {\n    if (pairIdx === instructions.length) {\n      clearInterval(interval);\n      resetBallsPosition(ballElements);\n      startGameModal.style.display = \"none\";\n    } else {\n      Object(_swap_balls__WEBPACK_IMPORTED_MODULE_1__[\"swapBalls\"])(pair[0], pair[1]);\n    }\n  };\n\n  let interval = setInterval(() => {\n    shuffleBalls();\n    pairIdx += 1;\n  }, 1000);\n};\nconst evaluatePlacings = placings => {\n  let lost = false;\n\n  for (let ball in currLevel.finalPlacings) {\n    if (currLevel.finalPlacings[ball] !== placings[ball]) {\n      lost = true;\n    }\n  }\n\n  if (lost) {\n    console.log('lost');\n  } else {\n    currLevelIdx++;\n    currLevel = _levels__WEBPACK_IMPORTED_MODULE_0__[\"default\"][currLevelIdx];\n    resetBallsPosition(ballElements);\n    play(modal, levelBox);\n  }\n};\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swap_balls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swap_balls */ \"./src/swap_balls.js\");\n/* harmony import */ var _start_game_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start_game_modal */ \"./src/start_game_modal.js\");\n// import * as DragAndDrop from './drag_and_drop';\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/levels.js":
/*!***********************!*\
  !*** ./src/levels.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst firstBallId = \"first_draggable_ball\";\nconst secondBallId = \"second_draggable_ball\";\nconst thirdBallId = \"third_draggable_ball\";\nlet level1 = {\n  instructions: [[firstBallId, thirdBallId]],\n  finalPlacings: {\n    \"first_draggable_ball\": 3,\n    \"second_draggable_ball\": 2,\n    \"third_draggable_ball\": 1\n  }\n};\nlet level2 = {\n  instructions: [[firstBallId, secondBallId] // [firstBallId, thirdBallId], \n  ],\n  finalPlacings: {\n    \"first_draggable_ball\": 2,\n    \"second_draggable_ball\": 1,\n    \"third_draggable_ball\": 3\n  }\n};\nlet levels = [level1, level2];\n/* harmony default export */ __webpack_exports__[\"default\"] = (levels); // let level3 = {\n//     instructions: [\n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//     ], \n//     finalPlacings: {\n//         ballId: 1, \n//         ballId: 3, \n//         ballId: 4\n//     }\n// }\n// let level4 = {\n//     instructions: [\n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//     ], \n//     finalPlacings: {\n//         ballId: 1, \n//         ballId: 3, \n//         ballId: 4\n//     }\n// }\n// let level5 = {\n//     instructions: [\n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//     ], \n//     finalPlacings: {\n//         ballId: 1, \n//         ballId: 3, \n//         ballId: 4\n//     }\n// }\n// let level6 = {\n//     instructions: [\n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//     ], \n//     finalPlacings: {\n//         ballId: 1, \n//         ballId: 3, \n//         ballId: 4\n//     }\n// }\n// let level7 = {\n//     instructions: [\n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//     ], \n//     finalPlacings: {\n//         ballId: 1, \n//         ballId: 3, \n//         ballId: 4\n//     }\n// }\n// let level8 = {\n//     instructions: [\n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//     ], \n//     finalPlacings: {\n//         ballId: 1, \n//         ballId: 3, \n//         ballId: 4\n//     }\n// }\n// let level9 = {\n//     instructions: [\n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//     ], \n//     finalPlacings: {\n//         ballId: 1, \n//         ballId: 3, \n//         ballId: 4\n//     }\n// }\n// let level10 = {\n//     instructions: [\n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//         [firstBallId, secondBallId], \n//     ], \n//     finalPlacings: {\n//         ballId: 1, \n//         ballId: 3, \n//         ballId: 4\n//     }\n// }\n\n//# sourceURL=webpack:///./src/levels.js?");

/***/ }),

/***/ "./src/start_game_modal.js":
/*!*********************************!*\
  !*** ./src/start_game_modal.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels */ \"./src/levels.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const level = document.getElementById('level');\n  level.style.visibility = \"hidden\";\n  const startGameModal = document.getElementById(\"start_game_modal\");\n  const startButton = document.getElementById(\"start_button\");\n  const secondsHtml = document.getElementById(\"seconds\");\n  let seconds;\n  let clicked = false;\n\n  const setCountDown = () => {\n    if (clicked) return;\n    clicked = true;\n\n    const handleSeconds = () => {\n      if (seconds === 1) {\n        clearInterval(interval);\n        Object(_game__WEBPACK_IMPORTED_MODULE_0__[\"play\"])(startGameModal, level);\n      } else {\n        seconds -= 1;\n        secondsHtml.innerHTML = seconds;\n      }\n    };\n\n    if (!seconds) seconds = 4;\n    let interval = setInterval(handleSeconds, 1000);\n  };\n\n  startButton.onclick = setCountDown;\n});\n\n//# sourceURL=webpack:///./src/start_game_modal.js?");

/***/ }),

/***/ "./src/swap_balls.js":
/*!***************************!*\
  !*** ./src/swap_balls.js ***!
  \***************************/
/*! exports provided: swapBalls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"swapBalls\", function() { return swapBalls; });\n/* harmony import */ var _drag_and_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag_and_drop */ \"./src/drag_and_drop.js\");\n\nconst swapBalls = (firstBallId, secondBallId) => {\n  const firstBall = document.getElementById(firstBallId);\n  const secondBall = document.getElementById(secondBallId);\n  const radius = (secondBall.getBoundingClientRect().x - firstBall.getBoundingClientRect().x) / 2;\n  console.log(firstBall);\n  console.log(secondBall); // console.log(firstBallId, secondBallId)\n  // if (\n  //     (firstBallId === \"first_draggable_ball\" && secondBallId === \"second_draggable_ball\") || \n  //     (firstBallId === \"second_draggable_ball\" && secondBallId === \"third_draggable_ball\")\n  // ) \n  // {   console.log('here'); \n  //     firstBall.style.backgroundColor =  \"red\"; \n  //     firstBall.style.top = -40.5832; \n  //     firstBall.style.left = 9 +\"px\"; \n  //     secondBall.style.top = -40.5832; \n  //     secondBall.style.right = 9 + \"px\"; \n  //     console.log(firstBall)\n  //     console.log(secondBall)\n  // } else {\n  //     firstBall.style.top = -66.8132;\n  //     firstBall.style.left = \"12px\";\n  //     secondBall.style.top = -66.8132;\n  //     secondBall.style.right = \"12px\"; \n  // }\n  // console.log(firstBall)\n  // console.log(secondBall)\n\n  let top = 0.1;\n  let left = 0;\n  let right = 0;\n\n  const frame = () => {\n    if (top == 0) {\n      clearInterval(interval);\n      console.log(firstBall);\n      console.log(secondBall);\n    } else {\n      left += 3;\n      right += 3;\n      top = Math.sqrt(2 * radius * left - Math.pow(left, 2));\n      firstBall.style.transform = `translate( ${`${left}px, ${-top}px`} )`;\n      secondBall.style.transform = `translate( ${`${-right}px, ${-top}px`} )`;\n    }\n  };\n\n  let interval = setInterval(frame, 1);\n};\n\n//# sourceURL=webpack:///./src/swap_balls.js?");

/***/ })

/******/ });