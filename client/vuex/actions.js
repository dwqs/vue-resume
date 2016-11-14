/**
 * Created by pomy on 11/5/16.
 */

import * as types from './mutation-types';

export const beforeGetResumeData = (store) => {
    let {state,commit,dispatch,rootState,getters} = store;
    commit(types.BEFORE_GET_RESUME_DATA);
};

export const getResumeData = ({commit,dispatch}) => {
    dispatch('beforeGetResumeData'); //same as commit(types.BEFORE_GET_RESUME_DATA)
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status < 300){
                commit({
                    type:types.GET_RESUME_DATA,
                    resume:JSON.parse(xhr.responseText).resume
                });
            } else {
                console.log('request was unsuccessful:',xhr.status);
            }
        }
    };
    xhr.open('GET','/resume',true);
    xhr.send(null);
    // fetch('/resume').then((res)=>{
    //     return res.json();
    // }).then((data)=>{
    //     commit({
    //         type:types.GET_RESUME_DATA,
    //         resume:data.resume
    //     });
    // }).catch((err) => console.log('error',err));
};