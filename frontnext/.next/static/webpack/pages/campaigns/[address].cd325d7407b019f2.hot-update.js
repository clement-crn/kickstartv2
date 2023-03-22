"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/[address]",{

/***/ "./components/ContributeForm.js":
/*!**************************************!*\
  !*** ./components/ContributeForm.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _backend_abis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../backend/abis */ \"../backend/abis/index.js\");\n/* harmony import */ var _backend_abis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backend_abis__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ContributeForm = (param)=>{\n    let { address , contractInstance  } = param;\n    _s();\n    const [contribution, setContribution] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const onSubmit = async (event)=>{\n        event.preventDefault();\n        setLoading(true);\n        try {\n            const value = ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.parseEther(contribution);\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(window.ethereum);\n            const transaction = await contractInstance.contribute({\n                value,\n                from: provider\n            });\n            const receipt = await transaction.wait();\n            console.log(\"Transaction receipt: \", receipt);\n        } catch (err) {\n            console.log(err);\n        }\n        setLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Faire une contribution\"\n            }, void 0, false, {\n                fileName: \"/Users/clementciron/Documents/CODE/Solidity/kickstartv2/frontnext/components/ContributeForm.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form, {\n                onSubmit: onSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Montant en ether:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/clementciron/Documents/CODE/Solidity/kickstartv2/frontnext/components/ContributeForm.js\",\n                                lineNumber: 35,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                label: \"ether\",\n                                labelPosition: \"right\",\n                                value: contribution,\n                                onChange: (event)=>setContribution(event.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/clementciron/Documents/CODE/Solidity/kickstartv2/frontnext/components/ContributeForm.js\",\n                                lineNumber: 36,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/clementciron/Documents/CODE/Solidity/kickstartv2/frontnext/components/ContributeForm.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        type: \"submit\",\n                        loading: loading,\n                        primary: true,\n                        children: \"Contribuer!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/clementciron/Documents/CODE/Solidity/kickstartv2/frontnext/components/ContributeForm.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/clementciron/Documents/CODE/Solidity/kickstartv2/frontnext/components/ContributeForm.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/clementciron/Documents/CODE/Solidity/kickstartv2/frontnext/components/ContributeForm.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ContributeForm, \"IYUp8BbMnthqugDfeYLmh0UKMZU=\");\n_c = ContributeForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContributeForm);\nvar _c;\n$RefreshReg$(_c, \"ContributeForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ3VCO0FBQ3hCO0FBQ2E7QUFFN0MsTUFBTU0saUJBQWlCLFNBQW1DO1FBQWxDLEVBQUVDLFFBQU8sRUFBRUMsaUJBQWdCLEVBQUU7O0lBQ2pELE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1csU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTVDLE1BQU1hLFdBQVcsT0FBT0MsUUFBVTtRQUM5QkEsTUFBTUMsY0FBYztRQUNwQkgsV0FBVyxJQUFJO1FBRWYsSUFBSTtZQUNBLE1BQU1JLFFBQVFaLDJEQUF1QixDQUFDSztZQUN0QyxNQUFNVSxXQUFXLElBQUlmLGlFQUE2QixDQUFDa0IsT0FBT0MsUUFBUTtZQUNsRSxNQUFNQyxjQUFjLE1BQU1oQixpQkFBaUJpQixVQUFVLENBQUM7Z0JBQ2xEVDtnQkFDQVUsTUFBTVA7WUFDVjtZQUNBLE1BQU1RLFVBQVUsTUFBTUgsWUFBWUksSUFBSTtZQUN0Q0MsUUFBUUMsR0FBRyxDQUFDLHlCQUF5Qkg7UUFDekMsRUFBRSxPQUFPSSxLQUFLO1lBQ1ZGLFFBQVFDLEdBQUcsQ0FBQ0M7UUFDaEI7UUFFQW5CLFdBQVcsS0FBSztJQUNwQjtJQUVBLHFCQUNJLDhEQUFDb0I7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDaEMsbURBQUlBO2dCQUFDWSxVQUFVQTs7a0NBQ1osOERBQUNaLHlEQUFVOzswQ0FDUCw4REFBQ2tDOzBDQUFNOzs7Ozs7MENBQ1AsOERBQUNqQyxvREFBS0E7Z0NBQ0ZpQyxPQUFNO2dDQUNOQyxlQUFjO2dDQUNkcEIsT0FBT1A7Z0NBQ1A0QixVQUFVLENBQUN2QixRQUNQSixnQkFBZ0JJLE1BQU13QixNQUFNLENBQUN0QixLQUFLOzs7Ozs7Ozs7Ozs7a0NBSTlDLDhEQUFDYixxREFBTUE7d0JBQUNvQyxNQUFLO3dCQUFTNUIsU0FBU0E7d0JBQVM2QixPQUFPO2tDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEU7R0E3Q01sQztLQUFBQTtBQStDTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzP2UwNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IE1haW5BYmkgfSBmcm9tIFwiLi4vLi4vYmFja2VuZC9hYmlzXCI7XG5cbmNvbnN0IENvbnRyaWJ1dGVGb3JtID0gKHsgYWRkcmVzcywgY29udHJhY3RJbnN0YW5jZSB9KSA9PiB7XG4gICAgY29uc3QgW2NvbnRyaWJ1dGlvbiwgc2V0Q29udHJpYnV0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZXRoZXJzLnV0aWxzLnBhcnNlRXRoZXIoY29udHJpYnV0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0SW5zdGFuY2UuY29udHJpYnV0ZSh7XG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgZnJvbTogcHJvdmlkZXIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJlY2VpcHQgPSBhd2FpdCB0cmFuc2FjdGlvbi53YWl0KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRyYW5zYWN0aW9uIHJlY2VpcHQ6IFwiLCByZWNlaXB0KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQ+RmFpcmUgdW5lIGNvbnRyaWJ1dGlvbjwvaDQ+XG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TW9udGFudCBlbiBldGhlcjo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiZXRoZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb250cmlidXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbnRyaWJ1dGlvbihldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2xvYWRpbmd9IHByaW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIENvbnRyaWJ1ZXIhXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250cmlidXRlRm9ybTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZvcm0iLCJJbnB1dCIsIkJ1dHRvbiIsImV0aGVycyIsIk1haW5BYmkiLCJDb250cmlidXRlRm9ybSIsImFkZHJlc3MiLCJjb250cmFjdEluc3RhbmNlIiwiY29udHJpYnV0aW9uIiwic2V0Q29udHJpYnV0aW9uIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsInV0aWxzIiwicGFyc2VFdGhlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwid2luZG93IiwiZXRoZXJldW0iLCJ0cmFuc2FjdGlvbiIsImNvbnRyaWJ1dGUiLCJmcm9tIiwicmVjZWlwdCIsIndhaXQiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZGl2IiwiaDQiLCJGaWVsZCIsImxhYmVsIiwibGFiZWxQb3NpdGlvbiIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidHlwZSIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ContributeForm.js\n"));

/***/ })

});