/**
 * Created by pomy on 11/5/16.
 * 保存简历数据
 */

import * as types from '../mutation-types';

const state = {
    profile: {},
    fetching: false
};

const mutations = {
    [types.BEFORE_GET_RESUME_DATA] (state){
        state.fetching = true;
    },
    [types.GET_RESUME_DATA] (state,payload){
        state.profile = payload.resume;
        state.fetching = false;
    }
};


export default {
    state,
    mutations
};