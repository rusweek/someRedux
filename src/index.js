import {createStore} from 'redux';

const reduser = (state = 0, action) => {


    switch (action.type) {
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

const update = () => {
    document.getElementById('counter').innerHTML = store.getState();
};

store.subscribe(update);

