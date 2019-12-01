import React from 'react';
import  ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider} from 'react-redux';


import App from "./components/app";
import reduser from "./reducer";

const  store = createStore(reduser);

//const {dispatch} = store;

// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// };

// const incDispatch = () => bindActionCreators(inc, dispatch);
// const decDispatch = () => bindActionCreators(dec, dispatch);
// const rndDispatch = () => bindActionCreators(rnd, dispatch);

//const {inc, dec, rnd} = bindActionCreators(actions, dispatch); //inc = store.dispatch({type: 'INC'}) --->reducer(state, {type: 'INC'});






ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));





