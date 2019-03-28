// const webpack = require('webpack');

// module.exports = {
//   mode: 'development',
//   entry: './src/index.js',
//   output: {
//     path: 'C:\\Users\\luisr_000\\Documents\\GitHub\\redux-practice/dist/assets',
//     filename: 'bundle.js',
//     publicPath: 'assets'
//   },
//   devServer: {
//     inline: true,
//     contentBase: './dist',
//     port: 3000
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /(node_modules)/,
//         use: [
//           {
//             loader: 'babel-loader',
//             options: {
//               presets: ['latest', 'stage-0']
//             }
//           }
//         ]
//       },
//       {
//         test: /\.json$/,
//         exclude: /(node_modules)/,
//         use: [
//           { loader: 'json-loader' }
//         ]
//       }
//     ]
//   }
// };

module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist/assets',
    filename: 'bundle.js',
    publicPath: 'assets'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: ['babel'],
        query: {
          presets: ['latest', 'stage-0']
        }
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: 'json-loader'
      }
    ]
  }
}