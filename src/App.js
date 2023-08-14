import React from 'react';
import './App.css';

import NewCom from './Components/NewCom';

class App extends React.Component {

  styles ={
    fontStyle:'bold',
    color:'teal'
  };

  render(){
    return (
    <div className="App">
      <h1 style={this.styles}>Hello World!</h1>
      <NewCom/>
      
    </div>
  );
    
  }
  
}

export default App;
