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
exports.id = "pages/api/mongodb";
exports.ids = ["pages/api/mongodb"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/mongodb.js":
/*!******************************!*\
  !*** ./pages/api/mongodb.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const url = \"mongodb://localhost:27017\";\n    const dbName = \"dataDB\";\n    try {\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(url);\n        const db = client.db(dbName);\n        const collection = db.collection(\"expenses\");\n        // Fetch all expenses data\n        const data = await collection.find().toArray();\n        await client.close();\n        res.status(200).json(data); // Sending JSON response\n    } catch (error) {\n        console.error(\"Error occurred while connecting to MongoDB:\", error);\n        res.status(500).json({\n            message: \"Internal server error\"\n        }); // Sending JSON response for error\n    }\n} // const { MongoClient } = require('mongodb');\n // if (!process.env.MONGODB_URI) {\n //   throw new Error('Invalid environment variable: \"MONGODB_URI\"');\n // }\n // const uri = process.env.MONGODB_URI;\n // const options = {};\n // let client;\n // let clientPromise;\n // if (!process.env.MONGODB_URI) {\n //   throw new Error('Please add your Mongo URI to .env.local');\n // }\n // if (process.env.NODE_ENV === 'development') {\n //   if (!global._mongoClientPromise) {\n //     client = new MongoClient(uri, options);\n //     global._mongoClientPromise = client.connect();\n //   }\n //   clientPromise = global._mongoClientPromise;\n // } else {\n //   client = new MongoClient(uri, options);\n //   clientPromise = client.connect();\n // }\n // module.exports = clientPromise;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdkIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLE1BQU1DLE1BQU07SUFDWixNQUFNQyxTQUFTO0lBRWYsSUFBSTtRQUNGLE1BQU1DLFNBQVMsTUFBTU4sZ0RBQVdBLENBQUNPLFFBQVFIO1FBQ3pDLE1BQU1JLEtBQUtGLE9BQU9FLEdBQUdIO1FBQ3JCLE1BQU1JLGFBQWFELEdBQUdDLFdBQVc7UUFFakMsMEJBQTBCO1FBQzFCLE1BQU1DLE9BQU8sTUFBTUQsV0FBV0UsT0FBT0M7UUFFckMsTUFBTU4sT0FBT087UUFFYlYsSUFBSVcsT0FBTyxLQUFLQyxLQUFLTCxPQUFPLHdCQUF3QjtJQUN0RCxFQUFFLE9BQU9NLE9BQU87UUFDZEMsUUFBUUQsTUFBTSwrQ0FBK0NBO1FBQzdEYixJQUFJVyxPQUFPLEtBQUtDLEtBQUs7WUFBRUcsU0FBUztRQUF3QixJQUFJLGtDQUFrQztJQUNoRztBQUNGLEVBRUEsOENBQThDO0NBRTlDLGtDQUFrQztDQUNsQyxvRUFBb0U7Q0FDcEUsSUFBSTtDQUVKLHVDQUF1QztDQUN2QyxzQkFBc0I7Q0FFdEIsY0FBYztDQUNkLHFCQUFxQjtDQUVyQixrQ0FBa0M7Q0FDbEMsZ0VBQWdFO0NBQ2hFLElBQUk7Q0FFSixnREFBZ0Q7Q0FDaEQsdUNBQXVDO0NBQ3ZDLDhDQUE4QztDQUM5QyxxREFBcUQ7Q0FDckQsTUFBTTtDQUNOLGdEQUFnRDtDQUNoRCxXQUFXO0NBQ1gsNENBQTRDO0NBQzVDLHNDQUFzQztDQUN0QyxJQUFJO0NBRUosa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL21vbmdvZGIuanM/ZWI5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHVybCA9ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3JztcbiAgY29uc3QgZGJOYW1lID0gJ2RhdGFEQic7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHVybCk7XG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoZGJOYW1lKTtcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignZXhwZW5zZXMnKTtcblxuICAgIC8vIEZldGNoIGFsbCBleHBlbnNlcyBkYXRhXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGNvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcblxuICAgIGF3YWl0IGNsaWVudC5jbG9zZSgpO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7IC8vIFNlbmRpbmcgSlNPTiByZXNwb25zZVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VycmVkIHdoaWxlIGNvbm5lY3RpbmcgdG8gTW9uZ29EQjonLCBlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9KTsgLy8gU2VuZGluZyBKU09OIHJlc3BvbnNlIGZvciBlcnJvclxuICB9XG59XG5cbi8vIGNvbnN0IHsgTW9uZ29DbGllbnQgfSA9IHJlcXVpcmUoJ21vbmdvZGInKTtcblxuLy8gaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xuLy8gICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZW52aXJvbm1lbnQgdmFyaWFibGU6IFwiTU9OR09EQl9VUklcIicpO1xuLy8gfVxuXG4vLyBjb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcbi8vIGNvbnN0IG9wdGlvbnMgPSB7fTtcblxuLy8gbGV0IGNsaWVudDtcbi8vIGxldCBjbGllbnRQcm9taXNlO1xuXG4vLyBpZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XG4vLyAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGFkZCB5b3VyIE1vbmdvIFVSSSB0byAuZW52LmxvY2FsJyk7XG4vLyB9XG5cbi8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuLy8gICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XG4vLyAgICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XG4vLyAgICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xuLy8gICB9XG4vLyAgIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZTtcbi8vIH0gZWxzZSB7XG4vLyAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xuLy8gICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcbi8vIH1cblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBjbGllbnRQcm9taXNlO1xuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsInVybCIsImRiTmFtZSIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsImNvbGxlY3Rpb24iLCJkYXRhIiwiZmluZCIsInRvQXJyYXkiLCJjbG9zZSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/mongodb.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/mongodb.js"));
module.exports = __webpack_exports__;

})();