import {createStore, applyMiddleware} from "redux"
import rootReducer from "../reducers"
import apiSaga from "../sagas"
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';


const initialiseSagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(initialiseSagaMiddleware)
    )
)

initialiseSagaMiddleware.run(apiSaga)

export default store;
