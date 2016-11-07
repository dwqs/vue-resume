/**
 * Created by pomy on 11/7/16.
 */

'use strict';

let Router = require('koa-router');
let router = new Router();

require('./home').register(router);
module.exports.register = function (app) {
    app.use(router.middleware());
};