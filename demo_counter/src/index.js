import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import Counter from "./components/Counter";
import appReducers from "./reducers";
import rootSaga from "./sagas/root";

const sagaMiddelware = createSagaMiddleware();
const middlewares = [logger, sagaMiddelware];

const store = createStore(appReducers, applyMiddleware(...middlewares));


const rootEl = document.getElementById("root");

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <Counter />
    </Provider>,

    rootEl
  );

sagaMiddelware.run(rootSaga)

render();
store.subscribe(render);
