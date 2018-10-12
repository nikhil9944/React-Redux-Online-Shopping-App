import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      orders:[]
    }
  }
 componentDidMount(){
    console.log("------componentDidMount called....");
    $.ajax({
      url:'https://jsonplaceholder.typicode.com/todos',
      success:(orders)=>{
        this.setState({
          orders:orders
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <ul>
       {
         this.state.orders.map((orders)=>{
              return  <li key={orders.id}>{orders.title}</li>}) 
         }
            
        </ul>
        
      </div>
    );
  }
}

export default App;
