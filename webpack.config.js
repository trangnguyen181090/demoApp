var path = require('path');

var DIST_PATH = path.resolve(__dirname, 'dist');
var SOURCE_PATH = path.resolve(__dirname, 'src');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: DIST_PATH,
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: 'src',
        inline: true,
        port: 7007
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            include: path.join(__dirname, 'src'),
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: [
                    'es2015',
                    'react'
                ]
            }
        }, {
            test: /\.css$/,
            loader: 'css-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.jsx', '.es6', '.js']
    }
};