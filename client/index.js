/**
 * Created by pomy on 11/5/16.
 */

'use sreict';

import Vue from 'vue';
import $ from 'jquery';

import App from './App.vue';

$(()=>{
    new Vue({
        el: '#resume-vue',
        render: h => h(App)
    });
});

// same as

// new Vue({
//     el: '#resume-vue',
//     render: h => h(App)
// });