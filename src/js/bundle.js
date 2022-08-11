/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/shapes.js":
/*!**********************************!*\
  !*** ./src/js/modules/shapes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const shapes = () => {
    const shapesWrapper = document.querySelector('.shapes__wrapper');
    const modal = document.querySelector('.modal');

    // Создание блоков и добавление в обёртку
    for(let i = 0; i < 16; i++){
        const el = document.createElement('div');
        const block = document.createElement('div');
       
        block.classList.add('shapes__list');
        el.classList.add('shapes_close');

        block.appendChild(el);
        shapesWrapper.appendChild(block);
    }

    const blocksList = document.querySelectorAll('.shapes__list');

    // Рандомные числа от 1 до 16
    const arrNum = _.shuffle(_.range(1,17)).slice(0,16);

    // Добавление атрибутов рандомных чисел 
    arrNum.forEach((el, i) => blocksList[i].setAttribute('data-num', el));

    // Добавление фигур 
    blocksList.forEach(el => {
        const numList = +el.getAttribute('data-num');

        if(numList <= 4){
            el.classList.add('shapes_circle');
            el.setAttribute('data-figure', 'circle');
        } else if (numList >= 5 && numList <= 8){
            el.classList.add('shapes_box');
            el.setAttribute('data-figure', 'box');
        } else if(numList >= 9 && numList <= 12){
            el.classList.add('shapes_triangle');
            el.setAttribute('data-figure', 'triangle');
        } else{
            el.classList.add('shapes_rhomb');
            el.setAttribute('data-figure', 'rhomb');
        }
    })

    // Удаление всех активных классов и закрытие фигур
    function deletingAllActiveClass(){
        blocksList.forEach(item => {
            item.classList.remove('shapes_active');
            item.querySelector('div').classList.add('shapes_close')
        });
    }

    // Открытие фигур 
    function openingShapes(figures, block){
        block.classList.remove('shapes_close');

        figures.forEach(el => {
            const block = el.querySelector('div');
            block.style.opacity = 1;
            block.classList.add('shapes_collect')
        })
    }

    // Cчетчик количества одинаковых фигур
    function counterNumberShapes(figures){
        let res = 0;

        figures.forEach(el => {
            const block = el.querySelector('div');

            if(block.classList.contains('shapes_close')){}else{
                res += 1;
            }
        })

        return res;
    }

    // Добавление в массив фигуру
    function addShapeArr(el, figureAttr, block){
        el.classList.add('shapes_active');
        block.classList.remove('shapes_close');
        arr.push(figureAttr);
    }

    // Перебор фигур
    function bustingShapes(block, figureAttr, el){
        arr.forEach(item => {
    
            if(item === figureAttr){
                arr.push(figureAttr);
                block.classList.remove('shapes_close');
                el.classList.add('shapes_active');
            }else if(arr.length === 4){
                block.classList.remove('shapes_close');
                arr.splice(0,16);

                setTimeout(() => {

                    deletingAllActiveClass();

                }, 300);
            } else {
                block.classList.remove('shapes_close');
                arr.splice(0,16);
            
                setTimeout(() => {

                    block.classList.add('shapes_close');

                    deletingAllActiveClass();
                }, 300);
            }
        })
    }

    // Проверка все ли фигуры открыты
    function checkingShapes(){
        const blocks = document.querySelectorAll('.shapes_collect');
    
        if(blocks.length === 16){
            modal.classList.add('modal_active');
        }
    }

    const arr = [];

    blocksList.forEach(el => {
        el.addEventListener('click', function(e){

            // Получение имени фигуры и дочерний блок
            const figureAttr = el.getAttribute('data-figure');
            const block = el.querySelector('div');

            if(el.classList.contains('shapes_active')){
            }else{  

                const figures = document.querySelectorAll(`[data-figure="${figureAttr}"]`)

                let res = counterNumberShapes(figures);

                if(res < 3){
                    if(arr.length === 0){
                        addShapeArr(el, figureAttr, block);
                    } else bustingShapes(block, figureAttr, el);
                } else openingShapes(figures, block);
            }

            checkingShapes();
        });
    })

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shapes);

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_shapes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/shapes */ "./src/js/modules/shapes.js");


document.addEventListener('DOMContentLoaded', function(){
    (0,_modules_shapes__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map