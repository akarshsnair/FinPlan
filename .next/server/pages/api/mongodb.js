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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const url = \"mongodb://0.0.0.0:27017/\";\n    const dbName = \"dataDB\";\n    try {\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(url);\n        const db = client.db(dbName);\n        const collection = db.collection(\"expenses\");\n        // Fetch all expenses data\n        const data = await collection.find().toArray();\n        await client.close();\n        res.status(200).json(data); // Sending JSON response\n    } catch (error) {\n        console.error(\"Error occurred while connecting to MongoDB:\", error);\n        res.status(500).json({\n            message: \"Internal server error\"\n        }); // Sending JSON response for error\n    }\n} // const { MongoClient } = require('mongodb');\n // if (!process.env.MONGODB_URI) {\n //   throw new Error('Invalid environment variable: \"MONGODB_URI\"');\n // }\n // const uri = process.env.MONGODB_URI;\n // const options = {};\n // let client;\n // let clientPromise;\n // if (!process.env.MONGODB_URI) {\n //   throw new Error('Please add your Mongo URI to .env.local');\n // }\n // if (process.env.NODE_ENV === 'development') {\n //   if (!global._mongoClientPromise) {\n //     client = new MongoClient(uri, options);\n //     global._mongoClientPromise = client.connect();\n //   }\n //   clientPromise = global._mongoClientPromise;\n // } else {\n //   client = new MongoClient(uri, options);\n //   clientPromise = client.connect();\n // }\n // module.exports = clientPromise;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdkIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLE1BQU1DLE1BQU07SUFDWixNQUFNQyxTQUFTO0lBRWYsSUFBSTtRQUNGLE1BQU1DLFNBQVMsTUFBTU4sZ0RBQVdBLENBQUNPLFFBQVFIO1FBQ3pDLE1BQU1JLEtBQUtGLE9BQU9FLEdBQUdIO1FBQ3JCLE1BQU1JLGFBQWFELEdBQUdDLFdBQVc7UUFFakMsMEJBQTBCO1FBQzFCLE1BQU1DLE9BQU8sTUFBTUQsV0FBV0UsT0FBT0M7UUFFckMsTUFBTU4sT0FBT087UUFFYlYsSUFBSVcsT0FBTyxLQUFLQyxLQUFLTCxPQUFPLHdCQUF3QjtJQUN0RCxFQUFFLE9BQU9NLE9BQU87UUFDZEMsUUFBUUQsTUFBTSwrQ0FBK0NBO1FBQzdEYixJQUFJVyxPQUFPLEtBQUtDLEtBQUs7WUFBRUcsU0FBUztRQUF3QixJQUFJLGtDQUFrQztJQUNoRztBQUNGLEVBRUEsOENBQThDO0NBRTlDLGtDQUFrQztDQUNsQyxvRUFBb0U7Q0FDcEUsSUFBSTtDQUVKLHVDQUF1QztDQUN2QyxzQkFBc0I7Q0FFdEIsY0FBYztDQUNkLHFCQUFxQjtDQUVyQixrQ0FBa0M7Q0FDbEMsZ0VBQWdFO0NBQ2hFLElBQUk7Q0FFSixnREFBZ0Q7Q0FDaEQsdUNBQXVDO0NBQ3ZDLDhDQUE4QztDQUM5QyxxREFBcUQ7Q0FDckQsTUFBTTtDQUNOLGdEQUFnRDtDQUNoRCxXQUFXO0NBQ1gsNENBQTRDO0NBQzVDLHNDQUFzQztDQUN0QyxJQUFJO0NBRUosa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL21vbmdvZGIuanM/ZWI5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHVybCA9IFwibW9uZ29kYjovLzAuMC4wLjA6MjcwMTcvXCI7XG4gIGNvbnN0IGRiTmFtZSA9ICdkYXRhREInO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCh1cmwpO1xuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKGRiTmFtZSk7XG4gICAgY29uc3QgY29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ2V4cGVuc2VzJyk7XG5cbiAgICAvLyBGZXRjaCBhbGwgZXhwZW5zZXMgZGF0YVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XG5cbiAgICBhd2FpdCBjbGllbnQuY2xvc2UoKTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpOyAvLyBTZW5kaW5nIEpTT04gcmVzcG9uc2VcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cnJlZCB3aGlsZSBjb25uZWN0aW5nIHRvIE1vbmdvREI6JywgZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ0ludGVybmFsIHNlcnZlciBlcnJvcicgfSk7IC8vIFNlbmRpbmcgSlNPTiByZXNwb25zZSBmb3IgZXJyb3JcbiAgfVxufVxuXG4vLyBjb25zdCB7IE1vbmdvQ2xpZW50IH0gPSByZXF1aXJlKCdtb25nb2RiJyk7XG5cbi8vIGlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcbi8vICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGVudmlyb25tZW50IHZhcmlhYmxlOiBcIk1PTkdPREJfVVJJXCInKTtcbi8vIH1cblxuLy8gY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG4vLyBjb25zdCBvcHRpb25zID0ge307XG5cbi8vIGxldCBjbGllbnQ7XG4vLyBsZXQgY2xpZW50UHJvbWlzZTtcblxuLy8gaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xuLy8gICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBhZGQgeW91ciBNb25nbyBVUkkgdG8gLmVudi5sb2NhbCcpO1xuLy8gfVxuXG4vLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbi8vICAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xuLy8gICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xuLy8gICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcbi8vICAgfVxuLy8gICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2U7XG4vLyB9IGVsc2Uge1xuLy8gICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbi8vICAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XG4vLyB9XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gY2xpZW50UHJvbWlzZTtcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ1cmwiLCJkYk5hbWUiLCJjbGllbnQiLCJjb25uZWN0IiwiZGIiLCJjb2xsZWN0aW9uIiwiZGF0YSIsImZpbmQiLCJ0b0FycmF5IiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/mongodb.js\n");

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