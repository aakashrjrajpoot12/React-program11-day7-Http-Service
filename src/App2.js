import React from "react";
import "./style.css";
import axios from 'axios';

export default class App2 extends React.Component {
  constructor(props){       //constructor
    super(props);
    this.state={            //state object
      error:null,
      isLoaded:false,
      items:[],
    };
  }

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/users')     //Actual url of API
  
  
  .then(response =>{const users=response.date;
      this.setState({users});//statechange
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
  

  