/**
 * Created by pomy on 11/5/16.
 */
'use sreict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var vendor = ['vue', 'vuex', 'babel-polyfill'];

module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel!eslint',
                exclude: /node_modules/  //babel必须放在第一位,不然sourcemap是编译后的代码
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test:/\.css$/,
                loader:'vue-style!css'
                //因为加入了fontAwesome 对于css就不用ExtractTextPlugin处理了,不然字体加载不了
                //loader:ExtractTextPlugin.extract('vue-style','css')
            },
            {
                test: /\.less$/,
                //loader: 'vue-style!css!less'
                loader:ExtractTextPlugin.extract('vue-style','css!less?sourceMap')
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'file'
            }
        ]
    },
    resolve:{
        extensions:["",".js",".vue"],
        alias:{
            '@components': path.resolve(__dirname, '../client/components')
        }
    },
    externals: {
        "jquery": "jQuery"
    },
    plugins:[
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.CommonsChunkPlugin({
            name:"vendor",
            filename:"vendor.js"
        })
    ]
    // vue: {
    //     loaders: {
    //         js: 'babel!eslint'
    //     }
    // }
};
