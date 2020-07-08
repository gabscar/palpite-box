module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/pageTitle.js":
/*!*********************************!*\
  !*** ./components/pageTitle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "H:\\Projetos\\palpit-box\\components\\pageTitle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PageTitle = ({
  title
}) => {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 8
    }
  }, " ", __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 15
    }
  }, title, " - Empresa"), " ");
};

/* harmony default export */ __webpack_exports__["default"] = (PageTitle);

/***/ }),

/***/ "./pages/pesquisa.js":
/*!***************************!*\
  !*** ./pages/pesquisa.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_pageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/pageTitle */ "./components/pageTitle.js");
var _jsxFileName = "H:\\Projetos\\palpit-box\\pages\\pesquisa.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const perguntas = 'font-bold';
const box = 'p-4 block shadow bg-blue-100 my-3 rounded';

const Pesquisa = () => {
  const {
    0: form,
    1: setForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Opniao: '',
    Nota: 0,
    Recomenda: ''
  });
  const {
    0: sucess,
    1: setSucess
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: retorno,
    1: setRetorno
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const Notas = [1, 2, 3, 4, 5];
  const resp = ['Sim', 'Não'];

  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      });
      const data = await response.json();
      setSucess(true);
      setRetorno(data);
    } catch (err) {}
  };

  const onChange = evt => {
    const cache = evt.target.value;
    const key = evt.target.name;
    setForm(old => _objectSpread(_objectSpread({}, old), {}, {
      [key]: cache
    }));
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(_components_pageTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Pesquisa",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 14
    }
  }), __jsx("h1", {
    className: "text-center font-bold mt-3 text-lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "Cr\xEDticas e sugest\xF5es"), __jsx("p", {
    className: "mt-5 text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "N\xF3s do estabelecimento y prezamos sempre por fornecer um excelente servi\xE7o ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 92
    }
  }), "a nossos clientes. Por esse motivo estamos sempre abertos a cr\xEDticas e sugest\xF5es"), !sucess && __jsx("div", {
    className: "w-32 mx-auto ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, __jsx("label", {
    className: perguntas,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "Seu nome:"), __jsx("input", {
    type: "text",
    className: box,
    placeholder: "Nome",
    onChange: onChange,
    name: "Nome",
    value: form.Nome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }), __jsx("label", {
    className: perguntas,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, "Email:"), __jsx("input", {
    type: "text",
    className: box,
    placeholder: "Email",
    onChange: onChange,
    name: "Email",
    value: form.Email,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 22
    }
  }), __jsx("label", {
    className: perguntas,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "Whatsapp:"), __jsx("input", {
    type: "text",
    className: box,
    placeholder: "Whatsapp",
    onChange: onChange,
    name: "Whatsapp",
    value: form.Whatsapp,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 22
    }
  }), __jsx("label", {
    className: perguntas,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, "Sua cr\xEDtica ou sugest\xE3o "), __jsx("input", {
    type: "text",
    className: box,
    placeholder: "Sua cr\xEDtica ou sugest\xE3o",
    onChange: onChange,
    name: "Opniao",
    value: form.Opniao,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 22
    }
  }), __jsx("label", {
    className: perguntas,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, "Que nota voc\xEA daria ao estabelecimento ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 88
    }
  })), __jsx("div", {
    className: "flex py-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, Notas.map(nota => {
    return __jsx("label", {
      className: "block w-1/8 px-2 text-center ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 38
      }
    }, nota, " ", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 96
      }
    }), __jsx("input", {
      type: "radio",
      name: "Nota",
      onChange: onChange,
      value: nota,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 101
      }
    }));
  })), __jsx("label", {
    className: perguntas,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, "Voc\xEA indicaria a amigos?", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 73
    }
  }), " "), __jsx("div", {
    className: "flex py-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, resp.map(resposta => {
    return __jsx("label", {
      className: "block w-1/4 px-6 text-center ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 38
      }
    }, resposta, __jsx("input", {
      type: "radio",
      name: "Recomenda",
      onChange: onChange,
      value: resposta,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 99
      }
    }));
  })), __jsx("button", {
    className: "bg-teal-400 px-8 py-5 font-bold rounded-lg shadow-lg hover:shadow",
    onClick: save,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, " Enviar")), sucess && __jsx("div", {
    className: "w-1/5 mx-auto ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 24
    }
  }, __jsx("p", {
    className: "mb-8 text-center bg-blue-200 border-t border-b border-blue-400 text-blue-700 px-12 py-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, "Obrigado por dar sua sugest\xE3o e/ou cr\xEDtica"), retorno.newcupom && __jsx("div", {
    className: "text-center border p-4 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 38
    }
  }, " Seu Cupom: ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 96
    }
  }), __jsx("span", {
    className: "font-bold text-2xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 18
    }
  }, retorno.Cupom)), retorno.newcupom && __jsx("div", {
    className: "border p-4 text-center mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 38
    }
  }, __jsx("span", {
    className: "mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 86
    }
  }, " ", retorno.Promo), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 26
    }
  }), __jsx("span", {
    className: "font-bold mt-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, "Tire um print ou foto do cupom e mostre aoi gar\xE7om "))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pesquisa);
/*
 <label className = {perguntas} >Sua crítica ou sugestão </label>
                     <input type = 'text' className = {box}/>

                <label className = {perguntas} >Que nota você daria ao estabelecimento</label>
                     <input type = 'text' className = {box}/>

                <label className = {perguntas} >Você indicaria a amigos?</label>
                    <input type = 'text' className = {box}/>
*/

/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/pesquisa.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! H:\Projetos\palpit-box\pages\pesquisa.js */"./pages/pesquisa.js");


/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlVGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGVzcXVpc2EuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJQYWdlVGl0bGUiLCJ0aXRsZSIsInBlcmd1bnRhcyIsImJveCIsIlBlc3F1aXNhIiwiZm9ybSIsInNldEZvcm0iLCJ1c2VTdGF0ZSIsIk5vbWUiLCJFbWFpbCIsIldoYXRzYXBwIiwiT3BuaWFvIiwiTm90YSIsIlJlY29tZW5kYSIsInN1Y2VzcyIsInNldFN1Y2VzcyIsInJldG9ybm8iLCJzZXRSZXRvcm5vIiwiTm90YXMiLCJyZXNwIiwic2F2ZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwiZXJyIiwib25DaGFuZ2UiLCJldnQiLCJjYWNoZSIsInRhcmdldCIsInZhbHVlIiwia2V5IiwibmFtZSIsIm9sZCIsIm1hcCIsIm5vdGEiLCJyZXNwb3N0YSIsIm5ld2N1cG9tIiwiQ3Vwb20iLCJQcm9tbyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxp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QUFTLEVBQUUsNkJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0Q7QUFBTSxhQUFTLEVBQUcsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUEyQnpCLE9BQU8sQ0FBQzJCLEtBQW5DLENBQWhELEVBQ2pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEaUIsRUFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFksRUFFakI7QUFBTSxhQUFTLEVBQUcsZ0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOERBRmlCLENBTGQsQ0FwQ2YsQ0FESjtBQWtESCxDQXZGRDs7QUF5RmV2Qyx1RUFBZjtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccGVzcXVpc2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IFBhZ2VUaXRsZSA9ICgge3RpdGxlfSApID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgIDxIZWFkPiA8dGl0bGU+e3RpdGxlfSAtIEVtcHJlc2E8L3RpdGxlPiA8L0hlYWQ+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlVGl0bGUiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluaydcclxuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2VUaXRsZSdcclxuXHJcblxyXG5jb25zdCBwZXJndW50YXMgPSAnZm9udC1ib2xkJyAgXHJcbmNvbnN0IGJveCA9ICdwLTQgYmxvY2sgc2hhZG93IGJnLWJsdWUtMTAwIG15LTMgcm91bmRlZCdcclxuXHJcblxyXG5cclxuY29uc3QgUGVzcXVpc2EgPSAoKSA9PntcclxuICAgIGNvbnN0IFsgZm9ybSwgc2V0Rm9ybSBdID0gdXNlU3RhdGUoeyAgICAgICAgXHJcbiAgICAgICAgTm9tZTonJyxcclxuICAgICAgICBFbWFpbCA6ICcnLFxyXG4gICAgICAgIFdoYXRzYXBwIDogJycsXHJcbiAgICAgICAgT3BuaWFvIDogJycsXHJcbiAgICAgICAgTm90YTogMCxcclxuICAgICAgICBSZWNvbWVuZGE6ICcnXHJcbiAgICB9KVxyXG4gICAgY29uc3QgWyBzdWNlc3MgLCBzZXRTdWNlc3MgXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgWyByZXRvcm5vICwgc2V0UmV0b3JubyBdID0gdXNlU3RhdGUoe30pXHJcbiAgICBjb25zdCBOb3RhcyA9IFsxLDIsMyw0LDVdXHJcbiAgICBjb25zdCByZXNwPVsnU2ltJywnTsOjbyddXHJcblxyXG5cclxuICAgIGNvbnN0IHNhdmUgPSBhc3luYyAoKSA9PnsgICAgICAgXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvc2F2ZScsIHtcclxuICAgICAgICAgICAgbWV0aG9kIDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIHNldFN1Y2Vzcyh0cnVlKVxyXG4gICAgICAgIHNldFJldG9ybm8oZGF0YSlcclxuICAgICAgICB9Y2F0Y2goZXJyKXsgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gZXZ0PT57XHJcbiAgICAgICAgY29uc3QgY2FjaGUgPSBldnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgY29uc3Qga2V5ID0gZXZ0LnRhcmdldC5uYW1lXHJcbiAgICAgICAgc2V0Rm9ybShvbGQgPT4gKHtcclxuICAgICAgICAgICAgLi4ub2xkLFxyXG4gICAgICAgICAgICBba2V5XTogY2FjaGVcclxuICAgICAgICB9KSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuKCAgICAgICAgICAgICAgICBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgPFBhZ2VUaXRsZSB0aXRsZT0nUGVzcXVpc2EnLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICd0ZXh0LWNlbnRlciBmb250LWJvbGQgbXQtMyB0ZXh0LWxnJz5DcsOtdGljYXMgZSBzdWdlc3TDtWVzPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lID0gJ210LTUgdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgTsOzcyBkbyBlc3RhYmVsZWNpbWVudG8geSBwcmV6YW1vcyBzZW1wcmUgcG9yIGZvcm5lY2VyIHVtIGV4Y2VsZW50ZSBzZXJ2acOnbyA8YnIvPlxyXG4gICAgICAgICAgICAgICAgYSBub3Nzb3MgY2xpZW50ZXMuIFBvciBlc3NlIG1vdGl2byBlc3RhbW9zIHNlbXByZSBhYmVydG9zIGEgY3LDrXRpY2FzIGUgc3VnZXN0w7Vlc1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgeyFzdWNlc3MgJiYgIDxkaXYgY2xhc3NOYW1lID0gJ3ctMzIgbXgtYXV0byAnPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IHtwZXJndW50YXN9ID5TZXUgbm9tZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gJ3RleHQnY2xhc3NOYW1lID0ge2JveH0gcGxhY2Vob2xkZXIgPSdOb21lJyBvbkNoYW5nZT17b25DaGFuZ2V9IG5hbWU9J05vbWUnIHZhbHVlID0ge2Zvcm0uTm9tZX0gLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IHtwZXJndW50YXN9ID5FbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9ICd0ZXh0JyBjbGFzc05hbWUgPSB7Ym94fSBwbGFjZWhvbGRlciA9J0VtYWlsJyBvbkNoYW5nZT17b25DaGFuZ2V9IG5hbWU9J0VtYWlsJyB2YWx1ZSA9IHtmb3JtLkVtYWlsfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9IHtwZXJndW50YXN9ID5XaGF0c2FwcDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9ICd0ZXh0JyBjbGFzc05hbWUgPSB7Ym94fSBwbGFjZWhvbGRlciA9J1doYXRzYXBwJyBvbkNoYW5nZT17b25DaGFuZ2V9IG5hbWU9J1doYXRzYXBwJyB2YWx1ZSA9IHtmb3JtLldoYXRzYXBwfS8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSB7cGVyZ3VudGFzfSA+U3VhIGNyw610aWNhIG91IHN1Z2VzdMOjbyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9ICd0ZXh0JyBjbGFzc05hbWUgPSB7Ym94fSBwbGFjZWhvbGRlciA9J1N1YSBjcsOtdGljYSBvdSBzdWdlc3TDo28nIG9uQ2hhbmdlPXtvbkNoYW5nZX0gbmFtZT0nT3BuaWFvJyB2YWx1ZSA9IHtmb3JtLk9wbmlhb30vPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSB7cGVyZ3VudGFzfSA+UXVlIG5vdGEgdm9jw6ogZGFyaWEgYW8gZXN0YWJlbGVjaW1lbnRvIDxici8+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBweS0zJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge05vdGFzLm1hcChub3RhID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICggPGxhYmVsIGNsYXNzTmFtZSA9ICdibG9jayB3LTEvOCBweC0yIHRleHQtY2VudGVyICc+e25vdGF9IDxici8+PGlucHV0IHR5cGUgPSAncmFkaW8nIG5hbWU9ICdOb3RhJyBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPSB7bm90YX0vPjwvbGFiZWw+KVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSB7cGVyZ3VudGFzfSA+Vm9jw6ogaW5kaWNhcmlhIGEgYW1pZ29zPzxici8+IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggcHktMyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNwLm1hcChyZXNwb3N0YSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoIDxsYWJlbCBjbGFzc05hbWUgPSAnYmxvY2sgdy0xLzQgcHgtNiB0ZXh0LWNlbnRlciAnPntyZXNwb3N0YX08aW5wdXQgdHlwZSA9ICdyYWRpbycgbmFtZT0gJ1JlY29tZW5kYScgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT0ge3Jlc3Bvc3RhfS8+PC9sYWJlbD4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWUgPSAnYmctdGVhbC00MDAgcHgtOCBweS01IGZvbnQtYm9sZCByb3VuZGVkLWxnIHNoYWRvdy1sZyBob3ZlcjpzaGFkb3cnIG9uQ2xpY2sgPSB7c2F2ZX0+IEVudmlhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICB7c3VjZXNzICYmIDxkaXYgY2xhc3NOYW1lPSAndy0xLzUgbXgtYXV0byAnPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSAnbWItOCB0ZXh0LWNlbnRlciBiZy1ibHVlLTIwMCBib3JkZXItdCBib3JkZXItYiBib3JkZXItYmx1ZS00MDAgdGV4dC1ibHVlLTcwMCBweC0xMiBweS0zJyA+T2JyaWdhZG8gcG9yIGRhciBzdWEgc3VnZXN0w6NvIGUvb3UgY3LDrXRpY2E8L3A+XHJcbiAgICAgICAgICAgICAgICB7cmV0b3Juby5uZXdjdXBvbSAmJiA8ZGl2IGNsYXNzTmFtZT0gJ3RleHQtY2VudGVyIGJvcmRlciBwLTQgbWItNCc+IFNldSBDdXBvbTogPGJyLz5cclxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWUgPSAnZm9udC1ib2xkIHRleHQtMnhsJz57cmV0b3Juby5DdXBvbX08L3NwYW4+PC9kaXY+fVxyXG5cclxuICAgICAgICAgICAgICAgIHtyZXRvcm5vLm5ld2N1cG9tICYmIDxkaXYgIGNsYXNzTmFtZT0gJ2JvcmRlciBwLTQgdGV4dC1jZW50ZXIgbWItNCcgPjxzcGFuIGNsYXNzTmFtZSA9ICdtdC01Jz4ge3JldG9ybm8uUHJvbW99PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWUgPSAnZm9udC1ib2xkIG10LTgnPlRpcmUgdW0gcHJpbnQgb3UgZm90byBkbyBjdXBvbSBlIG1vc3RyZSBhb2kgZ2Fyw6dvbSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVzcXVpc2FcclxuXHJcbi8qXHJcbiA8bGFiZWwgY2xhc3NOYW1lID0ge3Blcmd1bnRhc30gPlN1YSBjcsOtdGljYSBvdSBzdWdlc3TDo28gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSAndGV4dCcgY2xhc3NOYW1lID0ge2JveH0vPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSB7cGVyZ3VudGFzfSA+UXVlIG5vdGEgdm9jw6ogZGFyaWEgYW8gZXN0YWJlbGVjaW1lbnRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSAndGV4dCcgY2xhc3NOYW1lID0ge2JveH0vPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWUgPSB7cGVyZ3VudGFzfSA+Vm9jw6ogaW5kaWNhcmlhIGEgYW1pZ29zPzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSAndGV4dCcgY2xhc3NOYW1lID0ge2JveH0vPlxyXG4qLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==