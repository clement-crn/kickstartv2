"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/new",{

/***/ "../backend/factory.js":
/*!*****************************!*\
  !*** ../backend/factory.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"../backend/node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _backend_abis_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../backend/abis/index */ \"../backend/abis/index.js\");\n\n\n\n//const provider = new ethers.providers.JsonRpcProvider();\nconst provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.providers.Web3Provider(window.ethereum);\n// MetaMask requires requesting permission to connect users accounts\nconst address = provider.send(\"eth_requestAccounts\", []);\nconst signer = provider.getSigner();\n\nconst factory_instance = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.Contract(address, _backend_abis_index__WEBPACK_IMPORTED_MODULE_0__.FactoryAbi, signer);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (factory_instance);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vYmFja2VuZC9mYWN0b3J5LmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFnQztBQUNtQjs7QUFFbkQ7QUFDQSxxQkFBcUIsaUVBQTZCO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkIsbURBQWUsVUFBVSwyREFBVTs7QUFFaEUsK0RBQWUsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL2JhY2tlbmQvZmFjdG9yeS5qcz8zOWNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IEZhY3RvcnlBYmkgfSBmcm9tIFwiLi4vYmFja2VuZC9hYmlzL2luZGV4XCI7XG5cbi8vY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5Kc29uUnBjUHJvdmlkZXIoKTtcbmNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4vLyBNZXRhTWFzayByZXF1aXJlcyByZXF1ZXN0aW5nIHBlcm1pc3Npb24gdG8gY29ubmVjdCB1c2VycyBhY2NvdW50c1xuY29uc3QgYWRkcmVzcyA9IHByb3ZpZGVyLnNlbmQoXCJldGhfcmVxdWVzdEFjY291bnRzXCIsIFtdKTtcbmNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuXG5jb25zdCBmYWN0b3J5X2luc3RhbmNlID0gbmV3IGV0aGVycy5Db250cmFjdChhZGRyZXNzLCBGYWN0b3J5QWJpLCBzaWduZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBmYWN0b3J5X2luc3RhbmNlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../backend/factory.js\n"));

/***/ })

});