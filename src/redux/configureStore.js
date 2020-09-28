import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./reducers/rootReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas/apiSaga";

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for redux devtools
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(rootSaga);
    return store;
}