import React from 'react';
export default class SearchOrderComponent extends React.Component{
    render(){
        return(
            <div className="searchOrderDiv">
            <div className="row">
                <div className="col-sm-3">
                    Search By Name: <input type="text" className="form-control" placeholder="Search by Order ID"/>
                </div>
                <div className="col-sm-9">
                    
                </div>  
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-12 table-responsive">
                  <table className="table">
                      <tr className="success">
                          <th>Order ID</th> <th>Customer ID</th> <th>Order Date</th> <th>Delivery Date</th> <th>Order Status</th> <th>Order Amount</th>  <th>Product ID</th>
                      </tr>
                       <tr className="success">
                          <th>001</th> <th>120</th> <th>12-9-18</th> <th>9-8-18</th> <th>pending</th> <th>350.00</th>  <th>12</th>
                      </tr>
                  </table>
                </div>
               
            </div>
            </div>
        );
    }
}