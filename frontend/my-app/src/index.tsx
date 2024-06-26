import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./store"
import {ChakraProvider} from "@chakra-ui/react";
import { BrowserRouter as Router } from 'react-router-dom';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import RouterL from "./Router";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <ChakraProvider>
                    <ToastContainer />
                    <RouterL />
                </ChakraProvider>
            </Router>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// serviceWorkerRegistration.register()
