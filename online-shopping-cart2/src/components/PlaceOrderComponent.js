import React from 'react';
export default class PlaceOrderComponent extends React.Component {
    render() {
        return (
            <div className="row ">
                <h3>Place Your Order Here..</h3>
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-3">
                            <div class="form-group">
                            <label for="sel1">Select Products:</label>
                            <select  class="form-control" id="sel1">
                                <option>Cellphones</option>
                                <option>LCD</option>
                                <option>Washing Machine</option>
                                <option>Laptops</option>
                            </select>
                        </div>
                        </div>
                        <div className="col-sm-3">
                             <div class="form-group">
                            <label for="quantity">Enter Quantity:</label>
                            <input type="text" class="form-control " id="quantity" />
                             </div>
                        </div>
                        <div className="col-sm-3">
                             <div class="form-group">
                            <label for="price">Price:</label>
                            <input type="text" class="form-control " id="price" />
                             </div>
                        </div>
                        <div className="col-sm-3">
                             <div class="form-group">
                            <label for="price">Price:</label><br/>
                            <button className="btn btn-success">Place Order</button>
                             </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        );
    }
}