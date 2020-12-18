webpackHotUpdate_N_E("pages/journal",{

/***/ "./components/templates/Journal/JournalItem/index.js":
/*!***********************************************************!*\
  !*** ./components/templates/Journal/JournalItem/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _private_JournalItem_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./private.JournalItem.styled */ \"./components/templates/Journal/JournalItem/private.JournalItem.styled.js\");\n\n\nvar _jsxFileName = \"/Users/rhea/Documents/Study/winterguard.github.io/components/templates/Journal/JournalItem/index.js\",\n    _this = undefined;\n\n\n\n\nvar JournalItem = function JournalItem(_ref) {\n  var children = _ref.children,\n      post = _ref.post;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: post.slug,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_private_JournalItem_styled__WEBPACK_IMPORTED_MODULE_2__[\"StyledJournalItem\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_private_JournalItem_styled__WEBPACK_IMPORTED_MODULE_2__[\"StyledJournalTitleWrapper\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_private_JournalItem_styled__WEBPACK_IMPORTED_MODULE_2__[\"StyledJournalTitle\"], {\n          children: post.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_private_JournalItem_styled__WEBPACK_IMPORTED_MODULE_2__[\"StyledJournalDate\"], {\n          children: post.writtenAt\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = JournalItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JournalItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"JournalItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvSm91cm5hbC9Kb3VybmFsSXRlbS9pbmRleC5qcz84NjYyIl0sIm5hbWVzIjpbIkpvdXJuYWxJdGVtIiwiY2hpbGRyZW4iLCJwb3N0Iiwic2x1ZyIsInRpdGxlIiwid3JpdHRlbkF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBT0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBd0I7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzFDLHNCQUNFLHFFQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFQSxJQUFJLENBQUNDLElBQWpCO0FBQUEsNEJBQ0U7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUscUVBQUMsNkVBQUQ7QUFBQSw2QkFDRSxxRUFBQyxxRkFBRDtBQUFBLGdDQUNFLHFFQUFDLDhFQUFEO0FBQUEsb0JBQXFCRCxJQUFJLENBQUNFO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyw2RUFBRDtBQUFBLG9CQUFvQkYsSUFBSSxDQUFDRztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWFELENBZEQ7O0tBQU1MLFc7QUFnQlNBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy90ZW1wbGF0ZXMvSm91cm5hbC9Kb3VybmFsSXRlbS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IHtcbiAgU3R5bGVkSm91cm5hbEl0ZW0sXG4gIFN0eWxlZEpvdXJuYWxUaXRsZVdyYXBwZXIsXG4gIFN0eWxlZEpvdXJuYWxUaXRsZSxcbiAgU3R5bGVkSm91cm5hbERhdGUsXG59IGZyb20gXCIuL3ByaXZhdGUuSm91cm5hbEl0ZW0uc3R5bGVkXCI7XG5cbmNvbnN0IEpvdXJuYWxJdGVtID0gKHsgY2hpbGRyZW4sIHBvc3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9e3Bvc3Quc2x1Z30+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW1nPjwvaW1nPlxuICAgICAgPC9kaXY+XG4gICAgICA8U3R5bGVkSm91cm5hbEl0ZW0+XG4gICAgICAgIDxTdHlsZWRKb3VybmFsVGl0bGVXcmFwcGVyPlxuICAgICAgICAgIDxTdHlsZWRKb3VybmFsVGl0bGU+e3Bvc3QudGl0bGV9PC9TdHlsZWRKb3VybmFsVGl0bGU+XG4gICAgICAgICAgPFN0eWxlZEpvdXJuYWxEYXRlPntwb3N0LndyaXR0ZW5BdH08L1N0eWxlZEpvdXJuYWxEYXRlPlxuICAgICAgICA8L1N0eWxlZEpvdXJuYWxUaXRsZVdyYXBwZXI+XG4gICAgICA8L1N0eWxlZEpvdXJuYWxJdGVtPlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEpvdXJuYWxJdGVtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/templates/Journal/JournalItem/index.js\n");

/***/ })

})