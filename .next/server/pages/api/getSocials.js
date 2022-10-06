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
exports.id = "pages/api/getSocials";
exports.ids = ["pages/api/getSocials"];
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

/***/ "(api)/./pages/api/getSocials.ts":
/*!*********************************!*\
  !*** ./pages/api/getSocials.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sanity */ \"(api)/./sanity.ts\");\n\n\nconst query = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`*[_type == \"socials\"]`;\nasync function handler(req, res) {\n    const socials = await _sanity__WEBPACK_IMPORTED_MODULE_1__.sanityClient.fetch(query);\n    res.status(200).json({\n        socials\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0U29jaWFscy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21DO0FBQ2lCO0FBR3BELE1BQU1FLEtBQUssR0FBR0YsNkNBQUksQ0FBQyxxQkFBcUIsQ0FBQztBQU0xQixlQUFlRyxPQUFPLENBQ25DQyxHQUFtQixFQUNuQkMsR0FBMEIsRUFDMUI7SUFDQSxNQUFNQyxPQUFPLEdBQWEsTUFBTUwsdURBQWtCLENBQUNDLEtBQUssQ0FBQztJQUN6REcsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFSCxPQUFPO0tBQUUsQ0FBQyxDQUFDO0FBQ3BDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9wYWdlcy9hcGkvZ2V0U29jaWFscy50cz9mNmNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBncm9xIH0gZnJvbSAnbmV4dC1zYW5pdHknO1xyXG5pbXBvcnQgeyBzYW5pdHlDbGllbnQsIHVybEZvciB9IGZyb20gJy4uLy4uL3Nhbml0eSc7XHJcbmltcG9ydCB7IFNvY2lhbCB9IGZyb20gJy4uLy4uL3R5cGluZyc7XHJcblxyXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInNvY2lhbHNcIl1gO1xyXG5cclxudHlwZSBEYXRhID0ge1xyXG4gIHNvY2lhbHM6IFNvY2lhbFtdO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XHJcbikge1xyXG4gIGNvbnN0IHNvY2lhbHM6IFNvY2lhbFtdID0gYXdhaXQgc2FuaXR5Q2xpZW50LmZldGNoKHF1ZXJ5KTtcclxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHNvY2lhbHMgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImdyb3EiLCJzYW5pdHlDbGllbnQiLCJxdWVyeSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzb2NpYWxzIiwiZmV0Y2giLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getSocials.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getSocials.ts"));
module.exports = __webpack_exports__;

})();