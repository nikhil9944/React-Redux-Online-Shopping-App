import React from 'react';
import OrderListComponent from './OrderListComponent';
import SearchOrderComponent from './SearchOrderComponent';
import PlaceOrderComponent from './PlaceOrderComponent';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
export default class OrderMenuComponent extends React.Component {
    render() {
        return (
            <div>
                <Router>

                    <div className="row">
                        <div className="col-sm-3"> <OrderLinks /></div>
                        <div className="col-sm-9 orderDiv">
                             <Route exact path="/show_orders" component={OrderListComponent} className=""/> 
                              <Route exact path="/search_orders" component={SearchOrderComponent} /> 
                              <Route exact path="/place_orders" component={PlaceOrderComponent} /> 
                             
                        </div>

                    </div>
                </Router>
            </div>


        );
    }
}
const OrderLinks = () => (
    <div className="list-group orderLink">
        <NavLink extact activeClassName="selected" to="/place_orders" className="list-group-item" >Place Order</NavLink>
        <NavLink activeClassName="selected" to="/show_orders" className="list-group-item">Show List</NavLink>
        <NavLink activeClassName="selected" to="/search_orders" className="list-group-item">Search Order</NavLink>

    </div>
)