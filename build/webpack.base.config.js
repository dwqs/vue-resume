/**
 * Created by pomy on 11/5/16.
 */
'use sreict';

import {path} from 'path';

export default {
    entry: {
        app:['../src/index.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../public/assets/'),
        publicPath: path.resolve(__dirname, '/assets/')
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel!eslint',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    vue: {
        loaders: {
            js: 'babel!eslint'
        }
    }
}
