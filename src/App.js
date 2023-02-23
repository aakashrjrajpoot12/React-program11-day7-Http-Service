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
  .then((res)=>res.json())
  .then((result)=>{this.setState({isLoaded=true,items:result.items,});
},
)
}
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
