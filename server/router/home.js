/**
 * Created by pomy on 11/7/16.
 */
'use strict';

let env = process.env.NODE_ENV || 'development';

let renderOnline = function*(projectName, bundleUrl,title, tpl) {
    // if (script.scripts && script.scripts.length > 0) {
    //     this.body = yield render(tpl, {
    //         scripts: script.scripts,
    //         styles: script.styles,
    //         title: title
    //     });
    // } else {
    //     this.body = yield render(tpl, {
    //         title: title
    //     });
    // }
    this.body = yield this.render(tpl, {
        scripts:[bundleUrl],
        styles: [],
        title: title
    });
};

let renderPage = function*(projectName, bundleUrl, title, tpl) {
    tpl = tpl || 'index';
    if (env === 'development') {
        this.body = yield this.render(tpl, {
            scripts: [
                `http://127.0.0.1:3000${bundleUrl}`
            ],
            styles: [],
            title: title
        });
    } else {
        yield renderOnline.call(this, projectName, bundleUrl,title, tpl);
    }
};

let index = function*() {
    yield renderPage.call(this, 'resume', '/assets/app.js', '袁康-个人简历','index');
};

let resume = function *() {
    this.response.set("Content-Type", "application/json;charset=utf-8");
    let resumeProfile = require('../json/resume.json');
    this.response.body = {
        resume: resumeProfile
    };
};

module.exports.register = function (router) {
    router.all('/', index);
    router.all('/index', index);
    router.all('/resume',resume);
};