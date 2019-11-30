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

const inc = () => {
    return {
        type: 'INC'
    }

};

const dec = () => {
  return {
      type: 'DEC'
  }
};

const rnd = (payload) => {

    return {
        type: 'RND',
        payload
    }
};

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

