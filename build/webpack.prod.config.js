/**
 * Created by pomy on 11/5/16.
 */

'use sreict';

var path = require('path');
var webpack = require('webpack');
var WebpackMd5Hash = require('webpack-md5-hash');
var prodConfig = require('./webpack.base.config');

prodConfig.plugins = (prodConfig.plugins || []).concat([
    new WebpackMd5Hash(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),

    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        output: {
            comments: false
        },
        sourceMap: true,   //线上生成source-map
        mangle: true
    })
]);

module.exports = Object.assign({},prodConfig,{
    entry: {
        app:[path.resolve(__dirname, '../client/index.js')]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../public/assets/'),
        publicPath: path.resolve(__dirname, '/assets/'),
        sourceMapFilename: '[file].map'
    },
    devtool:'#source-map'
});