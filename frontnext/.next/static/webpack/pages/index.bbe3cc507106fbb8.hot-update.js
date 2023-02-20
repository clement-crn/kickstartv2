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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backend_abis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../backend/abis */ \"../backend/abis/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction App() {\n    _s();\n    const [myList, setMyList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getListAdresses = async ()=>{\n        const { ethers  } = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n        const DEPLOYED_CONTRACT_ADDRESS = \"0x5FbDB2315678afecb367f032d93F642f64180aa3\";\n        const provider = new ethers.providers.JsonRpcProvider();\n        const signer = provider.getSigner();\n        const new_contract = new ethers.Contract(DEPLOYED_CONTRACT_ADDRESS, _backend_abis__WEBPACK_IMPORTED_MODULE_2__.FactoryAbi, signer);\n        const list_campaigns = await new_contract.getCampaigns();\n        console.log(list_campaigns);\n        setMyList(list_campaigns);\n    };\n    const createCampaign = async ()=>{\n        const { ethers  } = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n        const DEPLOYED_CONTRACT_ADDRESS = \"0x5FbDB2315678afecb367f032d93F642f64180aa3\";\n        const provider = new ethers.providers.JsonRpcProvider();\n        const signer = provider.getSigner();\n        const new_contract = new ethers.Contract(DEPLOYED_CONTRACT_ADDRESS, _backend_abis__WEBPACK_IMPORTED_MODULE_2__.FactoryAbi, signer);\n        await new_contract.createCampaign(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getListAdresses,\n                children: \"Afficher les campagnes\"\n            }, void 0, false, {\n                fileName: \"/Users/clementciron/Desktop/kickstart2/frontnext/pages/index.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: myList.map((address)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"index-ul\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/campaign/\".concat(address),\n                            children: address\n                        }, void 0, false, {\n                            fileName: \"/Users/clementciron/Desktop/kickstart2/frontnext/pages/index.js\",\n                            lineNumber: 46,\n                            columnNumber: 25\n                        }, this)\n                    }, address, false, {\n                        fileName: \"/Users/clementciron/Desktop/kickstart2/frontnext/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/clementciron/Desktop/kickstart2/frontnext/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: createCampaign,\n                children: \"Creer une campagne\"\n            }, void 0, false, {\n                fileName: \"/Users/clementciron/Desktop/kickstart2/frontnext/pages/index.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/clementciron/Desktop/kickstart2/frontnext/pages/index.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\n_s(App, \"6Mo3nb4fcVRHOoCd76SEXsNkEh0=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0k7QUFDUDtBQUNaO0FBRWQsU0FBU0ssTUFBTTs7SUFDMUIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFFdkMsTUFBTVEsa0JBQWtCLFVBQVk7UUFDaEMsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0MsbUJBQU9BLENBQUMsc0RBQVE7UUFDbkMsTUFBTUMsNEJBQ0Y7UUFDSixNQUFNQyxXQUFXLElBQUlILE9BQU9JLFNBQVMsQ0FBQ0MsZUFBZTtRQUNyRCxNQUFNQyxTQUFTSCxTQUFTSSxTQUFTO1FBRWpDLE1BQU1DLGVBQWUsSUFBSVIsT0FBT1MsUUFBUSxDQUNwQ1AsMkJBQ0FULHFEQUFVQSxFQUNWYTtRQUVKLE1BQU1JLGlCQUFpQixNQUFNRixhQUFhRyxZQUFZO1FBQ3REQyxRQUFRQyxHQUFHLENBQUNIO1FBQ1paLFVBQVVZO0lBQ2Q7SUFFQSxNQUFNSSxpQkFBaUIsVUFBWTtRQUMvQixNQUFNLEVBQUVkLE9BQU0sRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQyxzREFBUTtRQUNuQyxNQUFNQyw0QkFDRjtRQUNKLE1BQU1DLFdBQVcsSUFBSUgsT0FBT0ksU0FBUyxDQUFDQyxlQUFlO1FBQ3JELE1BQU1DLFNBQVNILFNBQVNJLFNBQVM7UUFDakMsTUFBTUMsZUFBZSxJQUFJUixPQUFPUyxRQUFRLENBQ3BDUCwyQkFDQVQscURBQVVBLEVBQ1ZhO1FBRUosTUFBTUUsYUFBYU0sY0FBYyxDQUFDO0lBQ3RDO0lBRUEscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ0M7Z0JBQU9DLFNBQVNsQjswQkFBaUI7Ozs7OzswQkFDbEMsOERBQUNtQjswQkFDSXJCLE9BQU9zQixHQUFHLENBQUMsQ0FBQ0Msd0JBQ1QsOERBQUNDO3dCQUFHQyxXQUFVO2tDQUNWLDRFQUFDM0Isa0RBQUlBOzRCQUFDNEIsTUFBTSxhQUFxQixPQUFSSDtzQ0FBWUE7Ozs7Ozt1QkFEWEE7Ozs7Ozs7Ozs7MEJBS3RDLDhEQUFDSjtnQkFBT0MsU0FBU0g7MEJBQWdCOzs7Ozs7Ozs7Ozs7QUFHN0MsQ0FBQztHQS9DdUJsQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZhY3RvcnlBYmkgfSBmcm9tIFwiLi4vLi4vYmFja2VuZC9hYmlzXCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgICBjb25zdCBbbXlMaXN0LCBzZXRNeUxpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgZ2V0TGlzdEFkcmVzc2VzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGV0aGVycyB9ID0gcmVxdWlyZShcImV0aGVyc1wiKTtcbiAgICAgICAgY29uc3QgREVQTE9ZRURfQ09OVFJBQ1RfQUREUkVTUyA9XG4gICAgICAgICAgICBcIjB4NUZiREIyMzE1Njc4YWZlY2IzNjdmMDMyZDkzRjY0MmY2NDE4MGFhM1wiO1xuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLkpzb25ScGNQcm92aWRlcigpO1xuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcblxuICAgICAgICBjb25zdCBuZXdfY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgICAgICAgREVQTE9ZRURfQ09OVFJBQ1RfQUREUkVTUyxcbiAgICAgICAgICAgIEZhY3RvcnlBYmksXG4gICAgICAgICAgICBzaWduZXJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbGlzdF9jYW1wYWlnbnMgPSBhd2FpdCBuZXdfY29udHJhY3QuZ2V0Q2FtcGFpZ25zKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGxpc3RfY2FtcGFpZ25zKTtcbiAgICAgICAgc2V0TXlMaXN0KGxpc3RfY2FtcGFpZ25zKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlQ2FtcGFpZ24gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZXRoZXJzIH0gPSByZXF1aXJlKFwiZXRoZXJzXCIpO1xuICAgICAgICBjb25zdCBERVBMT1lFRF9DT05UUkFDVF9BRERSRVNTID1cbiAgICAgICAgICAgIFwiMHg1RmJEQjIzMTU2NzhhZmVjYjM2N2YwMzJkOTNGNjQyZjY0MTgwYWEzXCI7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKCk7XG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICBjb25zdCBuZXdfY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgICAgICAgREVQTE9ZRURfQ09OVFJBQ1RfQUREUkVTUyxcbiAgICAgICAgICAgIEZhY3RvcnlBYmksXG4gICAgICAgICAgICBzaWduZXJcbiAgICAgICAgKTtcbiAgICAgICAgYXdhaXQgbmV3X2NvbnRyYWN0LmNyZWF0ZUNhbXBhaWduKDApO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRMaXN0QWRyZXNzZXN9PkFmZmljaGVyIGxlcyBjYW1wYWduZXM8L2J1dHRvbj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7bXlMaXN0Lm1hcCgoYWRkcmVzcykgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaW5kZXgtdWxcIiBrZXk9e2FkZHJlc3N9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jYW1wYWlnbi8ke2FkZHJlc3N9YH0+e2FkZHJlc3N9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y3JlYXRlQ2FtcGFpZ259PkNyZWVyIHVuZSBjYW1wYWduZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRmFjdG9yeUFiaSIsIkNhcmQiLCJMaW5rIiwiQXBwIiwibXlMaXN0Iiwic2V0TXlMaXN0IiwiZ2V0TGlzdEFkcmVzc2VzIiwiZXRoZXJzIiwicmVxdWlyZSIsIkRFUExPWUVEX0NPTlRSQUNUX0FERFJFU1MiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkpzb25ScGNQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsIm5ld19jb250cmFjdCIsIkNvbnRyYWN0IiwibGlzdF9jYW1wYWlnbnMiLCJnZXRDYW1wYWlnbnMiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlQ2FtcGFpZ24iLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiLCJtYXAiLCJhZGRyZXNzIiwibGkiLCJjbGFzc05hbWUiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});