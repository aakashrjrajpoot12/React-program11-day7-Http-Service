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
}
componentDidMount(){
  fetch('items.json')          //you can also use Actual url of API
  .then((res)=>res.json())//callback function
  
  .then(
    (result)=>{
      this.setState({isLoaded=true,items:result.items,});//statechange
},
(error)=>{
  this.setState({
    isLoaded=true,
    error,
  });
}
  );
}
render()
{
  const{error,isLoaded,items}=this.state;
  if(error){
    return<div>Error:{error.message}</div>;
  }
  elseif(!isLoaded){
    return<div>Loading...</div>;
  }
  else{
    {
      return(
        <ul>{items.map((item)=>(<li key={item.id}>
          {item.name}{item.price}
          </li>
          ))}
          </ul>
      );
      
    
  }
  }
}
  