/**
 * Created by pomy on 11/5/16.
 */

'use sreict';

import webpack from 'webpack';
import devConfig from './webpack.base.config';

devConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");

devConfig.plugins = (devConfig.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"'
        }
    })
]);

devConfig.devtool = 'eval-source-map';
devConfig.devServer = {
    noInfo: true,
    hot: true
};

export default devConfig;
