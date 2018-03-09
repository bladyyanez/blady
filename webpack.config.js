module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/public/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".jsx", ".json", ".js"]
  },
  module: {
    loaders:[
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
