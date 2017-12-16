import React from "react";
import {render} from "react-dom"
import "./index.css";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import App from "./components/App";


const store = createStore(reducers, {}, applyMiddleware(thunk));


render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
