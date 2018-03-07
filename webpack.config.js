module.exports = {
  output: {
    libraryTarget: 'umd',
    library: 'node-progress-bar',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
