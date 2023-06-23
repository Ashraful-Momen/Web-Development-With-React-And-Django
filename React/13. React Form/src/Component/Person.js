import React,{Component} from 'react';



class Person extends Component{

  // constructor(props,name){
  //   super(props);
  //   this.name=name;
    
  // }


  // constructor(props){
  //   super(props)
  //   console.log(props);
  // };


  render(){
    return (
   
      <div>
              <h4>Name : {this.props.name} , ChilderElement: {this.props.children}</h4>
       </div>
    );
  }
}
  
  export default Person;