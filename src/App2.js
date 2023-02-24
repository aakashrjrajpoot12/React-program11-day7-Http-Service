import React from "react";
import "./style.css";
import axios from 'axios';

export default class App2 extends React.Component {
  constructor(props){       //constructor
    super(props);
    this.state={            //state object
      
      persons:[]
    }
  }

componentDidMount(){
  axios.get('http://jsonplaceholder.typicode.com/users')     //Actual url of API
  
  
  .then((result) =>{
      this.setState({persons:result.data.items,
      });//statechange
  })
  }


   
render(){
  
    return(
        <ul>
          {this.persons.map((item)=> 
        (<li> 
          {item.name}
          </li>
          ))}
          </ul>
      );
      
  }
  }
  

  