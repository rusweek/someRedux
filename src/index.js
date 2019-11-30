import {createStore, bindActionCreators} from 'redux';

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



document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('rnd').addEventListener('click', (e)=>{
    const payload = Math.floor(Math.random()*10);
    rnd(payload);
});

const update = () => {
    document.getElementById('counter').innerHTML = store.getState();
};

store.subscribe(update);



