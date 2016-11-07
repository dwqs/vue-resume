/**
 * Created by pomy on 11/5/16.
 */

'use sreict';

var webpack = require('webpack');
var devConfig = require('./webpack.base.config');

devConfig.entry.app.unshift(
    "webpack/hot/dev-server",
    "webpack-dev-server/client?http://localhost:3000/"
    //'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
);

//将publicPath设置为webpack-dev-server服务器下资源目录的绝对路径,不然不会是局部更新,而是重新记载页面
devConfig.entry.output.publicPath = "http://localhost:3000/assets";

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
    debug:true,
    quite: false,
    inline: true,
    progress: true,
    historyApiFallback: true,
    colors: true,
    stats: 'normal',
    contentBase:'/public/assets',
    publicPath:"http://localhost:3000/assets"
};

module.exports = devConfig;
