/**
 * Created by pomy on 11/5/16.
 */

'use sreict';

var path = require('path');
var webpack = require('webpack');
var devConfig = require('./webpack.base.config');

devConfig.plugins = (devConfig.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"'
        }
    }),
    new webpack.NoErrorsPlugin()
]);

devConfig.devServer = {
    hot: true,
    noInfo: false,
    quite: false,
    port:3000,
    debug:true,
    inline: true,
    progress: true,
    historyApiFallback: true,
    // 解决 vue 下的热更新跨域问题
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    colors: true,
    stats: 'normal',
    contentBase:'/public/assets',
    publicPath:"http://localhost:3000/assets"
};

module.exports = Object.assign({},devConfig,{
    entry: {
        app:[
            "webpack/hot/dev-server",
            "webpack-dev-server/client?http://localhost:3000/",
            path.resolve(__dirname, '../client/index.js')
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../public/assets/'),
        //将publicPath设置为webpack-dev-server服务器下资源目录的绝对路径,不然不会是局部更新,而是重新记载页面
        publicPath:"http://localhost:3000/assets",
        sourceMapFilename: '[file].map'
    },
    devtool:'#cheap-module-eval-source-map'  //防中文乱码
});
