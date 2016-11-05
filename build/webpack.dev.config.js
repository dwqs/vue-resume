/**
 * Created by pomy on 11/5/16.
 */

'use sreict';

var webpack = require('webpack');
var devConfig = require('./webpack.base.config');

devConfig.entry.app.unshift(
    "webpack-dev-server/client?http://localhost:3000/",
    "webpack/hot/dev-server"
);

devConfig.plugins = (devConfig.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"'
        }
    }),
    new webpack.NoErrorsPlugin()
]);

devConfig.devtool = 'eval-source-map';
devConfig.devServer = {
    noInfo: true,
    hot: true,
    port:3000,
    debug: true,
    quite: false,
    contentBase:'./public/assets'
};

module.exports = devConfig;
