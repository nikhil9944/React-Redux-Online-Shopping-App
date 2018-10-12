import React from 'react';
import Header from './Header';

export default class OrderListComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
         header: "List Of Orders...",
         content: "Content from props..."
      }
    }
    render(){
        return(
            <div>
                <Header headerProp = {this.state.header}/>
                </div>
        );
    }

    componentWillMount(){
        console.log('Component WILL MOUNT!')
    }
}