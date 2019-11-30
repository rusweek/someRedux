import {createStore} from 'redux';

import reduser from "./reducer";
import {inc, dec, rnd} from "./actions";



const  store = createStore(reduser);



document.getElementById('inc').addEventListener('click', (e)=>{
    store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', (e)=>{
    store.dispatch(dec());
});

document.getElementById('rnd').addEventListener('click', (e)=>{
    const payload = Math.floor(Math.random()*10);
    store.dispatch(rnd(payload));
});

const update = () => {
    document.getElementById('counter').innerHTML = store.getState();
};

store.subscribe(update);

