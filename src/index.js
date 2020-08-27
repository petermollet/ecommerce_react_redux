import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from './app/lib/store';
import App from './app/App';

const unsubscribe = store.subscribe(() => console.log(store.getState()))

unsubscribe()

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, 
    document.getElementById("root")
);