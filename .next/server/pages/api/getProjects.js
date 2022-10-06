"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getProjects";
exports.ids = ["pages/api/getProjects"];
exports.modules = {

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ "(api)/./pages/api/getProjects.ts":
/*!**********************************!*\
  !*** ./pages/api/getProjects.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sanity */ \"(api)/./sanity.ts\");\n\n\nconst query = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`*[_type == \"projects\"] {\r\n  ..., \r\n  technologies[]->,\r\n}`;\nasync function handler(req, res) {\n    const projects = await _sanity__WEBPACK_IMPORTED_MODULE_1__.sanityClient.fetch(query);\n    res.status(200).json({\n        projects\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0UHJvamVjdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNtQztBQUNpQjtBQUdwRCxNQUFNRSxLQUFLLEdBQUdGLDZDQUFJLENBQUM7QUFTbkI7SUFJRSxNQUFNTSxRQUFROztBQUNTQSxDQUFRO0tBQUUsQ0FBQyxDQUFDO0FBQ3JDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9wYWdlcy9hcGkvZ2V0UHJvamVjdHMudHM/ZThmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgZ3JvcSB9IGZyb20gJ25leHQtc2FuaXR5JztcclxuaW1wb3J0IHsgc2FuaXR5Q2xpZW50LCB1cmxGb3IgfSBmcm9tICcuLi8uLi9zYW5pdHknO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vLi4vdHlwaW5nJztcclxuXHJcbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicHJvamVjdHNcIl0ge1xyXG4gIC4uLiwgXHJcbiAgdGVjaG5vbG9naWVzW10tPixcclxufWA7XHJcblxyXG50eXBlIERhdGEgPSB7XHJcbiAgcHJvamVjdHM6IFByb2plY3RbXTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxyXG4pIHtcclxuICBjb25zdCBwcm9qZWN0czogUHJvamVjdFtdID0gYXdhaXQgc2FuaXR5Q2xpZW50LmZldGNoKHF1ZXJ5KTtcclxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHByb2plY3RzIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJncm9xIiwic2FuaXR5Q2xpZW50IiwicXVlcnkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicHJvamVjdHMiLCJmZXRjaCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getProjects.ts\n");

/***/ }),

/***/ "(api)/./sanity.ts":
/*!*******************!*\
  !*** ./sanity.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"sanityClient\": () => (/* binding */ sanityClient),\n/* harmony export */   \"urlFor\": () => (/* binding */ urlFor)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst config = {\n    dataset: \"production\" || 0,\n    projectId: \"npy7f8jp\",\n    apiVerson: \"2021-03-25\",\n    useCdn: \"development\" === \"production\"\n};\nconst sanityClient = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()(config);\nconst urlFor = (source)=>_sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(config).image(source);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zYW5pdHkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQztBQUNXO0FBRTlDLE1BQU1FLE1BQU0sR0FBRztJQUNwQkMsT0FBTyxFQUFFQyxZQUFzQyxJQUFJLENBQVk7SUFDL0RHLFNBQVMsRUFBRUgsVUFBeUM7SUFDcERLLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCQyxNQUFNLEVBQUVOLGFBUEcsS0FPc0IsWUFBWTtDQUM5QyxDQUFDO0FBRUssTUFBTU8sWUFBWSxHQUFHWCxxREFBWSxDQUFDRSxNQUFNLENBQUMsQ0FBQztBQUUxQyxNQUFNVSxNQUFNLEdBQUcsQ0FBQ0MsTUFBVyxHQUNoQ1osd0RBQW9CLENBQUNDLE1BQU0sQ0FBQyxDQUFDWSxLQUFLLENBQUNELE1BQU0sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc2FuaXR5LnRzPzEwM2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUNsaWVudCBmcm9tICdAc2FuaXR5L2NsaWVudCc7XHJcbmltcG9ydCBjcmVhdEltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIGRhdGFzZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIHx8ICdwcm9kdWN0aW9uJyxcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEISxcclxuICBhcGlWZXJzb246ICcyMDIxLTAzLTI1JyxcclxuICB1c2VDZG46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2FuaXR5Q2xpZW50ID0gY3JlYXRlQ2xpZW50KGNvbmZpZyk7XHJcblxyXG5leHBvcnQgY29uc3QgdXJsRm9yID0gKHNvdXJjZTogYW55KSA9PlxyXG4gIGNyZWF0SW1hZ2VVcmxCdWlsZGVyKGNvbmZpZykuaW1hZ2Uoc291cmNlKTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsImNyZWF0SW1hZ2VVcmxCdWlsZGVyIiwiY29uZmlnIiwiZGF0YXNldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEIiwiYXBpVmVyc29uIiwidXNlQ2RuIiwic2FuaXR5Q2xpZW50IiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./sanity.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getProjects.ts"));
module.exports = __webpack_exports__;

})();