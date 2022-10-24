import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {HelloPage} from "./components";

const Root = () => (
    <BrowserRouter>
        <App/>
        <HelloPage/>
    </BrowserRouter>
);

export default Root;
