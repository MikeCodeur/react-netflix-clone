const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './server/index.js',

  target: 'node',

  externals: [nodeExternals(), {react: 'React'}],

  output: {
    path: path.resolve('server-build'),
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      context: path.resolve(__dirname, 'src/context/'),
      utils: path.resolve(__dirname, 'src/utils/'),
    },
  },
}
