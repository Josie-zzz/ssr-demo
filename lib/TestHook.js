"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "TestHook";
exports.ids = ["TestHook"];
exports.modules = {

/***/ "./src/pages/TestHook/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/TestHook/index.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar sum = 0;\nvar count = 100;\nvar HookCom = function HookCom() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    status = _useState2[0],\n    setStatus = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState4 = _slicedToArray(_useState3, 2),\n    env = _useState4[0],\n    setEnv = _useState4[1];\n  var num;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    num = ++count;\n    console.log('effect', num);\n    return function () {\n      console.log(num, 'destory');\n    };\n  }, [status]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    console.log(env, 'env');\n  }, [env]);\n\n  // useEffect(() => {\n  //     console.log('useEffect')\n  //     return () => {\n  //         console.log('useEffect - destory')\n  //     }\n  // }, [num])\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onClick: function onClick() {\n      return setStatus(!status);\n    }\n  }, \"hhhh9999\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onClick: function onClick() {\n      return setEnv(!env);\n    }\n  }, \"houhou\"));\n};\nvar Update = function Update(props) {\n  var status = props.status;\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    console.log('mount');\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (!ref.current) {\n      ref.current = true;\n      return;\n    }\n    console.log('update');\n  }, [status]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"ndfkjsnfk\");\n};\nvar Btn = function Btn() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"sjskjs\");\n};\nvar Step = function Step(props) {\n  // const store = useSyncExternalStore((callback) => {\n\n  // })\n\n  // const bbb = React.cloneElement(props.children, {\n  //     get () {\n  //         // props.children.props\n  //     }\n  // })\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, props.children);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HookCom);\n\n//# sourceURL=webpack://react-demo/./src/pages/TestHook/index.jsx?");

/***/ })

};
;