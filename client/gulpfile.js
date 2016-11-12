/**
 * Created by pomy on 11/7/16.
 */

'use strict';

var gulp = require('gulp');
var del = require('del');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var rev = require('gulp-rev');

var webpackConfig = require('../build/webpack.dev.config');

gulp.task('images', function () {
    return gulp.src('./static/images/*')
        .pipe(gulp.dest('../public/images'));
        // .pipe(rev())
        // .pipe(gulp.dest('../public/images'))
        // .pipe(rev.manifest('manifest.json'))
        // .pipe(gulp.dest('../public/images'));
});

gulp.task('fonts', function () {
    return gulp.src('./static/fonts/*')
        .pipe(gulp.dest('../public/fonts'));
});

gulp.task('dev', ['images','fonts'],function(callback) {
    var compiler = webpack(webpackConfig);
    new WebpackDevServer(compiler, webpackConfig.devServer).
    listen(3000, 'localhost', function(err) {
        if(err) throw new gutil.PluginError('webpack-dev-server', err);
        //这里监听文件改变然后 重新编译js 没时间搞了,后面再看吧
    });
});

// 清空静态资源
gulp.task('clean', function() {
    del(['../public/*','!../public/*.pdf'],{read: false, force: true});
});

//production
gulp.task('build', ['images','fonts'],function() {});