import React from "react";
import "./style.css";

export default class App extends React.Component {
  constructor(props){       //constructor
    super(props);
    this.state={            //state object
      error:null,
      isLoaded:false,
      items:[],
    };
  }

componentDidMount(){
  fetch('items.json')          //you can also use Actual url of API
  .then((res)=>res.json())//callback function
  
  .then(
    (result)=>{
      this.setState({isLoaded:true,
        items:result.items,});//statechange
},
(error)=>{
  this.setState({
    isLoaded:true,
    error,
  });
}
  );
}
render(){
  //below line code is called Destructure
  const { error,isLoaded,items}=this.state;//in a single line code i had mentioned that all 3 error,isLoaded,items refers to this.state
  if(error){ //if error is there then this message would be displayed
    return<div>Error:{error.message}</div>;
  }
  else if(!isLoaded){//if isLoaded is not true then Loading msg woild be displayed
    return<div>Loading...</div>;
  }
  else//if isLoaded is  true then below msg would be displayed
  {
    return(
        <ul>
          {items.map((item)=> //we are using map to traverse items
        (<li key={item.id}> {/*from item we are using id as key and displaying details */}
          {item.name}{item.price}
          </li>
          ))}
          </ul>
      );
      
  }
  }
  }

  