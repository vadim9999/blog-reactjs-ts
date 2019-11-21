import {createStore, applyMiddleware} from "redux"
import rootReducer from "../reducers"
import apiSaga from "../sagas"
import createSagaMiddleware from "redux-saga";

const initialiseSagaMiddleware = createSagaMiddleware();
// declare global {
//     interface Window {
//         __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:any
//     }
// }
// declare global {
//     interface Window {
//         ['devToolsExtension'] : any;
//     }
//   }

// let storeEnhancers: any = window['devToolsExtension'] ? window['devToolsExtension']() : (f:any)=>f;
// const store: IStore<any> = enhancer(rootReducer, initialState);

//   const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    // storeEnhancers(
        applyMiddleware(initialiseSagaMiddleware)
    // )
)

initialiseSagaMiddleware.run(apiSaga)

export default store;
