import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import OrderMenuComponent from './OrderMenuComponent'
import HomeComponent from './HomeComponent';
import AboutUsComponent from './AboutUsComponent';
import ProductManagementComponent from './ProductManagementComponent';
import UserManagementComponent from './UserManagementComponent';
import ContactUsComponent from './ContactUsComponent';
export default class MainMenuComponent extends React.Component {
    render() {
        return (
            <div>
                 <Router>
            <div>
            <div className="row">
                <div className="col-sm-2"></div>
                 <div className="col-sm-8">
                      <Links/>
                 </div>
                  <div className="col-sm-2"></div>
               
           </div>
           <hr/>
            <div className="row">
                
                <div className="col-sm-12">
                    <Route exact path="/" component={HomeComponent} /> 
                     <Route path="/order" component={OrderMenuComponent} /> 
                      <Route path="/aboutus" component={AboutUsComponent} /> 
                      <Route path="/product" component={ProductManagementComponent} /> 
                       <Route path="/user" component={UserManagementComponent} /> 
                           <Route path="/contact" component={ContactUsComponent} />
                </div>
                         
           </div>
           </div>
           </Router>
            </div>
        );
    }
}
 const Links = () => (
    <div className="list-group mainMenuLinkDiv">
        <NavLink extact activeClassName="selected" to="/" className="list-group-item ">Home</NavLink>
        <NavLink activeClassName="selected" to="/order" className="list-group-item ">Order Management</NavLink>
        <NavLink activeClassName="selected" to="/user" className="list-group-item ">User Management</NavLink>
         <NavLink activeClassName="selected" to="/product" className="list-group-item ">Product Management</NavLink>
          <NavLink activeClassName="selected" to="/aboutus" className="list-group-item ">About Us</NavLink>
         <NavLink activeClassName="selected" to="/contact" className="list-group-item ">Contact Us </NavLink>
    </div>
)
