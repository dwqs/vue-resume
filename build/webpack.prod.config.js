/**
 * Created by pomy on 11/5/16.
 */

'use sreict';

var path = require('path');
var webpack = require('webpack');
var prodConfig = require('./webpack.base.config');

//prodConfig.devtool = 'source-map';
prodConfig.plugins = (prodConfig.plugins || []).concat([
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
        minimize: true
    }),
    new webpack.optimize.OccurenceOrderPlugin()
]);

module.exports = Object.assign({},prodConfig,{
    entry: {
        app:[path.resolve(__dirname, '../client/index.js')]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../public/assets/'),
        publicPath: path.resolve(__dirname, '/assets/')
        //sourceMapFilename: '[file].map'
    }
});