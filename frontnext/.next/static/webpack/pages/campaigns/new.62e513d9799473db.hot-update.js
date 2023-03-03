/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/new",{

/***/ "../backend/abis/index.js":
/*!********************************!*\
  !*** ../backend/abis/index.js ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("const FactoryAbi = __webpack_require__(/*! ./factory_abi.json */ \"../backend/abis/factory_abi.json\");\nconst MainAbi = __webpack_require__(/*! ./main_abi.json */ \"../backend/abis/main_abi.json\");\n\nmodule.exports = {\n    FactoryAbi,\n    MainAbi,\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vYmFja2VuZC9hYmlzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQixtQkFBTyxDQUFDLDREQUFvQjtBQUMvQyxnQkFBZ0IsbUJBQU8sQ0FBQyxzREFBaUI7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uLi9iYWNrZW5kL2FiaXMvaW5kZXguanM/NTI5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBGYWN0b3J5QWJpID0gcmVxdWlyZShcIi4vZmFjdG9yeV9hYmkuanNvblwiKTtcbmNvbnN0IE1haW5BYmkgPSByZXF1aXJlKFwiLi9tYWluX2FiaS5qc29uXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBGYWN0b3J5QWJpLFxuICAgIE1haW5BYmksXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../backend/abis/index.js\n"));

/***/ }),

/***/ "../backend/factory.js":
/*!*****************************!*\
  !*** ../backend/factory.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"../backend/node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _backend_abis_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../backend/abis/index */ \"../backend/abis/index.js\");\n/* harmony import */ var _backend_abis_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backend_abis_index__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nconst provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.providers.JsonRpcProvider();\nconst signer = provider.getSigner();\n\nconst factory_instance = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.Contract(\n    \"0x5FbDB2315678afecb367f032d93F642f64180aa3\",\n    _backend_abis_index__WEBPACK_IMPORTED_MODULE_0__.FactoryAbi,\n    signer\n);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (factory_instance);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vYmFja2VuZC9mYWN0b3J5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZ0M7QUFDbUI7O0FBRW5ELHFCQUFxQixvRUFBZ0M7QUFDckQ7O0FBRUEsNkJBQTZCLG1EQUFlO0FBQzVDO0FBQ0EsSUFBSSwyREFBVTtBQUNkO0FBQ0E7O0FBRUEsK0RBQWUsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL2JhY2tlbmQvZmFjdG9yeS5qcz8zOWNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IEZhY3RvcnlBYmkgfSBmcm9tIFwiLi4vYmFja2VuZC9hYmlzL2luZGV4XCI7XG5cbmNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKCk7XG5jb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcblxuY29uc3QgZmFjdG9yeV9pbnN0YW5jZSA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgXCIweDVGYkRCMjMxNTY3OGFmZWNiMzY3ZjAzMmQ5M0Y2NDJmNjQxODBhYTNcIixcbiAgICBGYWN0b3J5QWJpLFxuICAgIHNpZ25lclxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZmFjdG9yeV9pbnN0YW5jZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../backend/factory.js\n"));

/***/ })

});