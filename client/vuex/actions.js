/**
 * Created by pomy on 11/5/16.
 */

import * as types from './mutation-types';

export const beforeGetResumeData = ({commit}) => {
    commit(types.BEFORE_GET_RESUME_DATA);
};

export const getResumeData = ({commit,dispatch}) => {
    dispatch('beforeGetResumeData');
    fetch('/resume').then((res)=>{
        return res.json();
    }).then((data)=>{
        commit({
            type:types.GET_RESUME_DATA,
            resume:data.resume
        });
    }).catch((err) => console.log('error',err));
};