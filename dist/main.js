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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadBalls\", function() { return loadBalls; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nconst loadBalls = () => {\n  let scene = document.getElementsByClassName(\"scene\")[0];\n  let placings = {};\n  let balls = Array.from(document.getElementsByClassName(\"balls\")[0].children);\n  let firstDraggable = new PlainDraggable(document.getElementById(\"first_draggable_ball\"));\n  let secondDraggable = new PlainDraggable(document.getElementById(\"second_draggable_ball\"));\n  let thirdDraggable = new PlainDraggable(document.getElementById(\"third_draggable_ball\"));\n  let draggables = [firstDraggable, secondDraggable, thirdDraggable];\n  let container = document.getElementsByClassName(\"scene\")[0];\n  let targets = [{\n    x: 168,\n    y: 476,\n    center: true\n  }, {\n    x: 360,\n    y: 476,\n    center: true\n  }, {\n    x: 552,\n    y: 476,\n    center: true\n  }];\n\n  const updatePlacings = ballId => {\n    let ball = document.getElementById(ballId);\n    let ballX = ball.getBoundingClientRect().x;\n    let ballY = ball.getBoundingClientRect().y;\n    let sceneX = scene.getBoundingClientRect().x;\n    let sceneY = scene.getBoundingClientRect().y;\n    let deltaX = sceneX - ballX;\n    let deltaY = sceneY - ballY; //y = 432.0078125\n    //x 124 316 512\n\n    if (deltaY === -432.0078125) {\n      if (deltaX === -124.0078125) {\n        placings[ballId] = 1;\n      } else if (deltaX === -316.0078125) {\n        placings[ballId] = 2;\n      } else if (deltaX === -508.0078125) {\n        placings[ballId] = 3;\n      }\n    }\n\n    console.log(deltaX, deltaY);\n\n    if (Object.keys(placings).length === 3) {\n      Object(_game__WEBPACK_IMPORTED_MODULE_0__[\"evaluatePlacings\"])(placings);\n      placings = {};\n    }\n  };\n\n  draggables.forEach(draggable => {\n    draggable.containment = container;\n    draggable.snap = targets;\n    draggable.zIndex = 3;\n\n    draggable.onDragEnd = () => updatePlacings(draggable.element.id);\n  });\n  return balls;\n};\n\n//# sourceURL=webpack:///./src/drag_and_drop.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: play, evaluatePlacings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"play\", function() { return play; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"evaluatePlacings\", function() { return evaluatePlacings; });\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levels */ \"./src/levels.js\");\n/* harmony import */ var _swap_balls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swap_balls */ \"./src/swap_balls.js\");\n/* harmony import */ var _drag_and_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag_and_drop */ \"./src/drag_and_drop.js\");\n/* harmony import */ var _start_game_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start_game_modal */ \"./src/start_game_modal.js\");\n\n\n\n\nlet levels = Object(_levels__WEBPACK_IMPORTED_MODULE_0__[\"createLevels\"])(20);\nlet currLevelIdx = 0;\nlet currLevel = levels[currLevelIdx];\nlet gameState;\nlet score;\nlet balls;\nlet modal;\nlet levelBox;\nlet seconds;\n\nconst resetBallsPositionAndColor = balls => {\n  balls.forEach(ball => {\n    ball.style.top = \"0px\";\n    ball.style.right = \"0px\";\n    ball.style.left = \"0px\";\n    ball.style.bottom = \"0px\";\n    ball.style.transform = \"none\";\n    ball.style.backgroundColor = \"rgb(223, 22, 22)\";\n    ball.style.borderColor = \"rgb(131, 50, 50)\";\n  });\n};\n\nconst play = () => {\n  gameState = document.getElementsByClassName(\"game_state\")[0];\n  score = document.getElementById(\"score\");\n  balls = Object(_drag_and_drop__WEBPACK_IMPORTED_MODULE_2__[\"loadBalls\"])();\n  balls.forEach(ball => ball.style.transition = \"none\");\n  modal = document.getElementById(\"start_game_modal\");\n  levelBox = document.getElementById(\"level\");\n  seconds = document.getElementById('seconds');\n  gameState.style.visibility = \"visible\";\n  levelBox.innerHTML = `Level ${currLevelIdx + 1}`;\n  modal.style.opacity = \"0\";\n  modal.style.visibility = \"visible\";\n  seconds.style.visibility = \"hidden\";\n  let instructions = currLevel.instructions;\n  let pairIdx = 0;\n\n  const shuffleBalls = () => {\n    if (pairIdx === instructions.length) {\n      clearInterval(interval);\n      resetBallsPositionAndColor(balls);\n      modal.style.visibility = \"hidden\";\n    } else {\n      let pair = instructions[pairIdx];\n      Object(_swap_balls__WEBPACK_IMPORTED_MODULE_1__[\"swapBalls\"])(pair[0], pair[1]);\n      resetBallsPositionAndColor(balls);\n    }\n  };\n\n  let interval = setInterval(() => {\n    shuffleBalls();\n    pairIdx += 1;\n  }, 1500);\n};\n\nconst handleLoss = () => {\n  console.log('lost');\n};\n\nconst handleWinColors = () => {\n  balls.forEach(ball => {\n    ball.style.transition = \"0.3s all\";\n    ball.style.backgroundColor = \"rgb(4,128,1)\";\n    ball.style.borderColor = \"darkgreen\";\n  });\n};\n\nconst handleWin = () => {\n  score.innerHTML = `Your Score: ${1000 * (currLevelIdx + 1)}`;\n  currLevelIdx++;\n  currLevel = levels[currLevelIdx];\n  handleWinColors();\n  setTimeout(() => {\n    resetBallsPositionAndColor(balls);\n    Object(_start_game_modal__WEBPACK_IMPORTED_MODULE_3__[\"setCountDown\"])(seconds, false, modal, document.getElementById(\"start_button\"));\n  }, 500);\n};\n\nconst evaluatePlacings = placings => {\n  let lost = false;\n\n  for (let ball in currLevel.finalPlacings) {\n    if (currLevel.finalPlacings[ball] !== placings[ball]) {\n      lost = true;\n      break;\n    }\n  }\n\n  console.log(currLevel.finalPlacings);\n  console.log(placings);\n\n  if (lost) {\n    handleLoss();\n  } else {\n    handleWin();\n  }\n};\n\n//# sourceURL=webpack:///./src/game.js?");

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
/*! exports provided: createLevels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLevels\", function() { return createLevels; });\nconst firstBallId = \"first_draggable_ball\";\nconst secondBallId = \"second_draggable_ball\";\nconst thirdBallId = \"third_draggable_ball\";\nconst IdToNumber = {\n  first_draggable_ball: 0,\n  second_draggable_ball: 1,\n  third_draggable_ball: 2\n};\nconst Ids = [firstBallId, secondBallId, thirdBallId];\nlet levels = [];\nlet initial = [1, 2, 3];\n\nconst getRandomInt = max => {\n  return Math.floor(Math.random() * Math.floor(max));\n};\n\nconst resetInitial = () => {\n  initial = [1, 2, 3];\n};\n\nconst swap = (first, second) => {\n  first = IdToNumber[first];\n  second = IdToNumber[second];\n  let temp = initial[first];\n  initial[first] = initial[second];\n  initial[second] = temp;\n};\n\nconst createLevel = steps => {\n  let level = {\n    instructions: []\n  };\n\n  for (let i = 0; i < steps; i++) {\n    let firstIdIdx;\n    let secondIdIdx;\n\n    while (!firstIdIdx && !secondIdIdx || firstIdIdx >= secondIdIdx) {\n      firstIdIdx = getRandomInt(2);\n      secondIdIdx = getRandomInt(3);\n    }\n\n    level.instructions.push([Ids[firstIdIdx], Ids[secondIdIdx]]);\n  }\n\n  for (let i = 0; i < level.instructions.length; i++) {\n    let firstBall = level.instructions[i][0];\n    let secondBall = level.instructions[i][1];\n    swap(firstBall, secondBall);\n  }\n\n  level.finalPlacings = {\n    \"first_draggable_ball\": initial[0],\n    \"second_draggable_ball\": initial[1],\n    \"third_draggable_ball\": initial[2]\n  };\n  resetInitial();\n  return level;\n};\n\nconst createLevels = numOfLevels => {\n  for (let i = 0; i < numOfLevels; i++) levels.push(createLevel(i + 1));\n\n  return levels;\n};\n\n//# sourceURL=webpack:///./src/levels.js?");

/***/ }),

/***/ "./src/start_game_modal.js":
/*!*********************************!*\
  !*** ./src/start_game_modal.js ***!
  \*********************************/
/*! exports provided: setCountDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCountDown\", function() { return setCountDown; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const gameState = document.getElementsByClassName('game_state')[0];\n  gameState.style.visibility = \"hidden\";\n  const startButton = document.getElementById(\"start_button\");\n  const secondsHtml = document.getElementById(\"seconds\");\n  let clicked = false;\n\n  startButton.onclick = () => setCountDown(secondsHtml, clicked);\n});\nconst setCountDown = (secondsHtml, clicked, modal, startButton) => {\n  if (modal) {\n    modal.style.visibility = \"visible\";\n    modal.style.opacity = \"1\";\n    startButton.style.visibility = \"hidden\";\n    secondsHtml.style.visibility = \"visible\";\n    secondsHtml.innerHTML = \"\";\n  } // console.log(secondsHtml); \n\n\n  let seconds;\n  if (clicked) return;\n  clicked = true;\n\n  const handleSeconds = () => {\n    if (seconds === 1) {\n      clearInterval(interval);\n      Object(_game__WEBPACK_IMPORTED_MODULE_0__[\"play\"])();\n    } else {\n      seconds -= 1;\n      secondsHtml.innerHTML = seconds;\n    }\n  };\n\n  if (!seconds) seconds = 4;\n  let interval = setInterval(handleSeconds, 1000);\n};\n\n//# sourceURL=webpack:///./src/start_game_modal.js?");

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