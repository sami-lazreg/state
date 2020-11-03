import React from "react";
import photo from './photo.jpg'
class App extends React.Component {
  state = {
    fullName:'lazreg sami',
    photo:<img src={photo} /> ,
    show:true
  };
  handleClick=()=>this.setState({show:!this.state.show})

  render(){
    return(
      <div style={{textAlign:"center",paddingTop:100}}>
    {this.state.show ?
    <div>
      <div>{this.state.photo}</div>
    <div>{this.state.fullName}</div>
    </div> : <h1></h1>}
    <button onClick={this.handleClick}>click</button>
    </div>
    
    
  )}
    
  }

 export default App;
