/**
 * Created by pomy on 11/5/16.
 */

'use sreict';

import 'babel-polyfill';

import Vue from 'vue';
import $ from 'jquery';

import './common.css';

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

// new Vue({
//     el: '#resume-vue',
//     render: h => h(App)
// });