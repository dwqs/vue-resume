/**
 * Created by pomy on 11/5/16.
 */

'use sreict';

import './common.css';
import './print.less';
//require('./common./css|less/');
//import './xxx.less';

import 'babel-polyfill';

import Vue from 'vue';
import $ from 'jquery';

import store from './vuex/index';
import App from './App.vue';

$(()=>{
    new Vue({
        store,
        el: '#resume-vue',
        render: h => h(App)
    });
});

// same as

// const app = new Vue({
//     store,
//     ...App
// });
//
// app.$mount('#resume-vue');

// new Vue({
//     el: '#resume-vue',
//     render: h => h(App)
// });