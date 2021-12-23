import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import MessagesProvider from "./contexts/messagesContext";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <MessagesProvider>
                <App/>
            </MessagesProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
