import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import 'bootstrap/dist/css/bootstrap.css';
import '../src/css/index.css';
// import 'materialize-css/dist/css/materialize.min.css';  
import {createStore, applyMiddleware, compose} from 'redux'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import rootReducer from '../src/Store/Reducers/rootReducer'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase,getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'


const Store = createStore(rootReducer,
    compose(applyMiddleware(thunk.withExtraArgument({ getFirebase ,getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
    ) 
   
);

ReactDOM.render(<Provider store ={Store}><App /></Provider>,document.getElementById('root'));
serviceWorker.unregister(); 
