/**
 * Created by pomy on 11/5/16.
 */

import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as getters from './getters';

import resume from './modules/resume';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        resume
    },
    strict: debug
});

