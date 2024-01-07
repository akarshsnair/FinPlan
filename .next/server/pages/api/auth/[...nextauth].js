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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst authOptions = {\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async signIn (user, account, profile) {\n            const { email, name } = user;\n            try {\n                console.log(\"User data:\", user);\n                const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__.MongoClient.connect(process.env.MONGODB_URI, {\n                    useNewUrlParser: true,\n                    useUnifiedTopology: true\n                });\n                const db = client.db(process.env.MONGODB_DB);\n                console.log(\"MongoDB connected.\");\n                const result = await db.collection(\"users\").updateOne({\n                    email\n                }, {\n                    $setOnInsert: {\n                        name,\n                        email\n                    },\n                    $set: {\n                        lastLogin: new Date()\n                    }\n                }, {\n                    upsert: true\n                } // Set upsert to true to insert if the user doesn't exist\n                );\n                console.log(\"Result:\", result);\n            } catch (error) {\n                console.error(\"Error saving user data:\", error);\n            }\n            return true;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ3VCO0FBQ2pCO0FBRS9CLE1BQU1HLGNBQWM7SUFDekIsaURBQWlEO0lBQ2pEQyxXQUFXO1FBQ1RILGlFQUFjQSxDQUFDO1lBQ1hJLFVBQVVDLFFBQVFDLElBQUlDO1lBQ3RCQyxjQUFjSCxRQUFRQyxJQUFJRztRQUM5QjtLQUNEO0lBQ0RDLFNBQVM7UUFDUEMsVUFBVTtJQUNYO0lBQ0FDLFdBQVc7UUFDVixNQUFNQyxRQUFPQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsT0FBTztZQUNqQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFLEdBQUdKO1lBRXhCLElBQUk7Z0JBQ0ZLLFFBQVFDLElBQUksY0FBY047Z0JBRTFCLE1BQU1PLFNBQVMsTUFBTXBCLGdEQUFXQSxDQUFDcUIsUUFBUWpCLFFBQVFDLElBQUlpQixhQUFhO29CQUNoRUMsaUJBQWlCO29CQUNqQkMsb0JBQW9CO2dCQUN0QjtnQkFFQSxNQUFNQyxLQUFLTCxPQUFPSyxHQUFJckIsUUFBUUMsSUFBSXFCO2dCQUNsQ1IsUUFBUUMsSUFBSTtnQkFFWixNQUFNUSxTQUFTLE1BQU1GLEdBQUdHLFdBQVcsU0FBU0MsVUFDMUM7b0JBQUViO2dCQUFNLEdBQ1I7b0JBQ0VjLGNBQWM7d0JBQUNiO3dCQUFNRDtvQkFBSztvQkFDMUJlLE1BQU07d0JBQUVDLFdBQVcsSUFBSUM7b0JBQU87Z0JBQ2hDLEdBQ0E7b0JBQUVDLFFBQVE7Z0JBQUssRUFBRSx5REFBeUQ7O2dCQUU1RWhCLFFBQVFDLElBQUksV0FBV1E7WUFFekIsRUFBRSxPQUFPUSxPQUFPO2dCQUNkakIsUUFBUWlCLE1BQU0sMkJBQTJCQTtZQUMzQztZQUNBLE9BQU87UUFDVDtJQUNGO0FBRUYsRUFBQztBQUVELGlFQUFlckMsZ0RBQVFBLENBQUNHLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcbiAgcHJvdmlkZXJzOiBbXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgXSxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiAnand0JyxcbiAgIH0sXG4gICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBzaWduSW4odXNlciwgYWNjb3VudCwgcHJvZmlsZSkge1xuICAgICAgY29uc3QgeyBlbWFpbCwgbmFtZSB9ID0gdXNlcjtcbiAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGRhdGE6JywgdXNlcik7XG4gICAgXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkksIHtcbiAgICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkYiA9IGNsaWVudC5kYiggcHJvY2Vzcy5lbnYuTU9OR09EQl9EQik7IFxuICAgICAgICBjb25zb2xlLmxvZygnTW9uZ29EQiBjb25uZWN0ZWQuJyk7XG4gICAgXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykudXBkYXRlT25lKFxuICAgICAgICAgIHsgZW1haWwgfSwgLy8gVXNlIGVtYWlsIGFzIGEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSB1c2VyXG4gICAgICAgICAge1xuICAgICAgICAgICAgJHNldE9uSW5zZXJ0OiB7bmFtZSwgZW1haWx9LCAvLyBJbnNlcnQgZW1haWwgYW5kIG5hbWUgaWYgdGhlIHVzZXIgZG9lc24ndCBleGlzdFxuICAgICAgICAgICAgJHNldDogeyBsYXN0TG9naW46IG5ldyBEYXRlKCkgfSwgLy8gVXBkYXRlIHRoZSBsYXN0TG9naW4gdGltZXN0YW1wIG9uIGV2ZXJ5IHNpZ24taW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgdXBzZXJ0OiB0cnVlIH0gLy8gU2V0IHVwc2VydCB0byB0cnVlIHRvIGluc2VydCBpZiB0aGUgdXNlciBkb2Vzbid0IGV4aXN0XG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXN1bHQ6JywgcmVzdWx0KTtcbiAgICBcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNhdmluZyB1c2VyIGRhdGE6JywgZXJyb3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgICAgXG4gIH0sXG4gIC8vIEFkZCBvdGhlciBOZXh0QXV0aCBjb25maWd1cmF0aW9ucyBpZiBuZWVkZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJNb25nb0NsaWVudCIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwiY2FsbGJhY2tzIiwic2lnbkluIiwidXNlciIsImFjY291bnQiLCJwcm9maWxlIiwiZW1haWwiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImNsaWVudCIsImNvbm5lY3QiLCJNT05HT0RCX1VSSSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImRiIiwiTU9OR09EQl9EQiIsInJlc3VsdCIsImNvbGxlY3Rpb24iLCJ1cGRhdGVPbmUiLCIkc2V0T25JbnNlcnQiLCIkc2V0IiwibGFzdExvZ2luIiwiRGF0ZSIsInVwc2VydCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();