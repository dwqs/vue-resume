/**
 * Created by pomy on 11/5/16.
 */

'use strict';
let path = require('path');

let compress = require('koa-compress');
let logger = require('koa-logger');
let serve = require('koa-static');
let koa = require('koa');
let koaJson = require('koa-json');
let bodyParser = require('koa-bodyparser');
let render = require('koa-swig');

let app = koa();
let router = require('koa-router')();

app.context.render = render({
    root: path.resolve(__dirname, '../public'),
    autoescape: true,
    cache: 'memory',
    ext: 'html'
});

app.use(bodyParser());
app.use(koaJson());
// Serve static files
app.use(serve(path.resolve(__dirname, '../public')));
// Compress
app.use(compress());
// Logger
app.use(logger());

router.get('/resume',function *() {
    this.response.set("Content-Type", "application/json;charset=utf-8");
    let resume = require('./resume.json');
    this.response.body = {
        resume: resume
    };
});

app.use(router.middleware());

app.listen('9002','127.0.0.1',  () => {
    console.log(process.env.NODE_ENV,'listening on port 9002...');
});