import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import MainMenuComponent from './components/MainMenuComponent';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
const OnlineShopComponent = () => (
    <div className="row topDiv">
        <div className="col-sm-12">
            <HeaderComponent /><hr />
            <MainMenuComponent />
            <FooterComponent />
        </div>

    </div>
)

ReactDOM.render(<OnlineShopComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
