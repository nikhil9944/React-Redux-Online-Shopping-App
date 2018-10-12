import React from 'react';
import OrderListComponent from './OrderListComponent';
export default class HomeComponent extends React.Component{
    render() {
        return (
            <div className="homeComponent">
                <h2>Welcome To Online Shopping</h2>
                <img src="05.jpg" alt="online shopping kart" className="img-rounded" />
            </div>
        );
    }

}