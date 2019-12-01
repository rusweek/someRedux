import React from 'react';
import  ReactDOM from 'react-dom';
import {createStore, bindActionCreators} from 'redux';

import Counter from "./counter";
import reduser from "./reducer";
import * as actions from "./actions";



const  store = createStore(reduser);

const {dispatch} = store;

// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// };

// const incDispatch = () => bindActionCreators(inc, dispatch);
// const decDispatch = () => bindActionCreators(dec, dispatch);
// const rndDispatch = () => bindActionCreators(rnd, dispatch);

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);





const update = () => {
    ReactDOM.render(<Counter counter={store.getState()}
                             inc={inc}
                             dec={dec}
                             rnd={()=> {
                                 const value = Math.floor(Math.random()*10+1)
                                 rnd(value);
                             }}/>,
        document.getElementById('root'));
};
update();

store.subscribe(update);



