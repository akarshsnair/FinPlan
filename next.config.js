// // module.exports = {
// //   webpack: function override(config, env) {
// //     console.log("React app rewired works!");
// //     config.resolve.fallback = {
// //       fs: false
// //     };
// //     return config;
// //   },
// //   async rewrites() {
// //     return [
// //       {
// //         source: '/api/:path*',
// //         destination: 'http://localhost:3001/api/:path*', // Replace with your backend server URL
// //       },
// //     ];
// //   },
// // };




// module.exports = (phase, { defaultConfig }) => {
//   return {
//     ...defaultConfig,

//     webpack: (config) => {
//       config.resolve = {
//         ...config.resolve,
//         fallback: {
//           "fs": false,
//           "path": false,
//           "os": false,
          
//         }
//       }
//       return config
//     },
//   }
// }