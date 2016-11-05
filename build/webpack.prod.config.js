/**
 * Created by pomy on 11/5/16.
 */

'use sreict';

import webpack from 'webpack';
import proConfig from './webpack.base.config';

proConfig.devtool = 'source-map';

proConfig.plugins = (proConfig.plugins || []).concat([
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

export default proConfig;