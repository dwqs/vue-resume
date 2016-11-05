/**
 * Created by pomy on 11/5/16.
 */

'use sreict';

var webpack = require('webpack');
var prodConfig = require('./webpack.base.config');

prodConfig.devtool = 'source-map';

prodConfig.plugins = (prodConfig.plugins || []).concat([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
]);

module.exports = prodConfig;