"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Ethers.js":
/*!**********************************!*\
  !*** ./src/components/Ethers.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction WalletConnect() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), walletAddress = _useState[0], setWalletAddress = _useState[1];\n    var connectWallet = /*#__PURE__*/ function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__._)(function() {\n            var accounts, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(typeof window.ethereum !== \"undefined\")) return [\n                            3,\n                            5\n                        ];\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            window.ethereum.request({\n                                method: \"eth_requestAccounts\"\n                            })\n                        ];\n                    case 2:\n                        accounts = _state.sent();\n                        setWalletAddress(accounts[0]); // Set connected wallet address\n                        console.log(\"Wallet connected:\", accounts[0]);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.error(\"Error connecting wallet:\", error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            3,\n                            6\n                        ];\n                    case 5:\n                        alert(\"MetaMask is not installed. Please install it to connect your wallet.\");\n                        _state.label = 6;\n                    case 6:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var disconnectWallet = function() {\n        setWalletAddress(null);\n        console.log(\"Wallet disconnected\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: !walletAddress ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"connect-wallet-button\",\n            onClick: connectWallet,\n            children: \"Connect Wallet\"\n        }, void 0, false, {\n            fileName: \"/Users/user1/Desktop/portfolio/tiny-lotto-react/src/components/Ethers.js\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"wallet-connected\",\n            onClick: disconnectWallet,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \" text-white italic text-xs truncate max-w-[150px] overflow-hidden whitespace-nowrap\",\n                children: [\n                    \"Wallet:\",\n                    walletAddress\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user1/Desktop/portfolio/tiny-lotto-react/src/components/Ethers.js\",\n                lineNumber: 38,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/user1/Desktop/portfolio/tiny-lotto-react/src/components/Ethers.js\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/user1/Desktop/portfolio/tiny-lotto-react/src/components/Ethers.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(WalletConnect, \"gink3R2wQZ2Qgh5fc9oQ+ykQXc4=\");\n_c = WalletConnect;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletConnect);\nvar _c;\n$RefreshReg$(_c, \"WalletConnect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FdGhlcnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNEO0FBRWhDLFNBQVNFOztJQUNQLElBQTBDRixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsV0FBNUNHLGdCQUFtQ0gsY0FBcEJJLG1CQUFvQko7SUFFMUMsSUFBTUs7bUJBQWdCO2dCQUdWQyxVQUtDQzs7Ozs2QkFQUCxRQUFPQyxPQUFPQyxRQUFRLEtBQUssV0FBVSxHQUFyQzs7Ozs7Ozs7Ozs7O3dCQUVpQjs7NEJBQU1ELE9BQU9DLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDO2dDQUM3Q0MsUUFBUTs0QkFDVjs7O3dCQUZNTCxXQUFXO3dCQUdqQkYsaUJBQWlCRSxRQUFRLENBQUMsRUFBRSxHQUFHLCtCQUErQjt3QkFDOURNLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJQLFFBQVEsQ0FBQyxFQUFFOzs7Ozs7d0JBQ3JDQzt3QkFDUEssUUFBUUwsS0FBSyxDQUFDLDRCQUE0QkE7Ozs7Ozs7Ozs7O3dCQUc1Q08sTUFDRTs7Ozs7Ozs7UUFHTjt3QkFoQk1UOzs7O0lBa0JOLElBQU1VLG1CQUFtQjtRQUN2QlgsaUJBQWlCO1FBQ2pCUSxRQUFRQyxHQUFHLENBQUM7SUFDZDtJQUVBLHFCQUNFLDhEQUFDRztrQkFDRSxDQUFDYiw4QkFDQSw4REFBQ2M7WUFBT0MsV0FBVTtZQUF3QkMsU0FBU2Q7c0JBQWU7Ozs7O2lDQUlsRSw4REFBQ1k7WUFBT0MsV0FBVTtZQUFtQkMsU0FBU0o7c0JBQzVDLDRFQUFDRTtnQkFBT0MsV0FBVTs7b0JBQXNGO29CQUVyR2Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWI7R0ExQ1NEO0tBQUFBO0FBNENULGlFQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvdXNlcjEvRGVza3RvcC9wb3J0Zm9saW8vdGlueS1sb3R0by1yZWFjdC9zcmMvY29tcG9uZW50cy9FdGhlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcblxuZnVuY3Rpb24gV2FsbGV0Q29ubmVjdCgpIHtcbiAgY29uc3QgW3dhbGxldEFkZHJlc3MsIHNldFdhbGxldEFkZHJlc3NdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIlxuICAgICAgICB9KTtcbiAgICAgICAgc2V0V2FsbGV0QWRkcmVzcyhhY2NvdW50c1swXSk7IC8vIFNldCBjb25uZWN0ZWQgd2FsbGV0IGFkZHJlc3NcbiAgICAgICAgY29uc29sZS5sb2coXCJXYWxsZXQgY29ubmVjdGVkOlwiLCBhY2NvdW50c1swXSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB3YWxsZXQ6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoXG4gICAgICAgIFwiTWV0YU1hc2sgaXMgbm90IGluc3RhbGxlZC4gUGxlYXNlIGluc3RhbGwgaXQgdG8gY29ubmVjdCB5b3VyIHdhbGxldC5cIlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGlzY29ubmVjdFdhbGxldCA9ICgpID0+IHtcbiAgICBzZXRXYWxsZXRBZGRyZXNzKG51bGwpO1xuICAgIGNvbnNvbGUubG9nKFwiV2FsbGV0IGRpc2Nvbm5lY3RlZFwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7IXdhbGxldEFkZHJlc3MgPyAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29ubmVjdC13YWxsZXQtYnV0dG9uXCIgb25DbGljaz17Y29ubmVjdFdhbGxldH0+XG4gICAgICAgICAgQ29ubmVjdCBXYWxsZXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApIDogKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndhbGxldC1jb25uZWN0ZWRcIiBvbkNsaWNrPXtkaXNjb25uZWN0V2FsbGV0fT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiB0ZXh0LXdoaXRlIGl0YWxpYyB0ZXh0LXhzIHRydW5jYXRlIG1heC13LVsxNTBweF0gb3ZlcmZsb3ctaGlkZGVuIHdoaXRlc3BhY2Utbm93cmFwXCI+XG4gICAgICAgICAgICBXYWxsZXQ6XG4gICAgICAgICAgICB7d2FsbGV0QWRkcmVzc31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXYWxsZXRDb25uZWN0O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiZXRoZXJzIiwiV2FsbGV0Q29ubmVjdCIsIndhbGxldEFkZHJlc3MiLCJzZXRXYWxsZXRBZGRyZXNzIiwiY29ubmVjdFdhbGxldCIsImFjY291bnRzIiwiZXJyb3IiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJkaXNjb25uZWN0V2FsbGV0IiwiZGl2IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Ethers.js\n"));

/***/ })

});