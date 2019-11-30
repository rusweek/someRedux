import {createStore} from 'redux';

const reduser = (state = 0, action) => {


    switch (action.type) {
        case 'RND':
            return state + action.payload;
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        default:
            return state;
    }

};

const  store = createStore(reduser);

document.getElementById('inc').addEventListener('click', (e)=>{
    store.dispatch({type: 'INC'});
});

document.getElementById('dec').addEventListener('click', (e)=>{
    store.dispatch({type: 'DEC'});
});

document.getElementById('rnd').addEventListener('click', (e)=>{
    const payload = Math.floor(Math.random()*10);
    store.dispatch({
        type: 'RND',
        payload});
});

const update = () => {
    document.getElementById('counter').innerHTML = store.getState();
};

store.subscribe(update);

