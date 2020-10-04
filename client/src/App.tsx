import axios from 'axios';
import React from 'react';

import './App.css';

class App extends React.Component{

  state={
data:null

  }
  componentDidMount(){
    axios.get('http://localhost:5000')
    .then((Response)=>{
      this.setState({
        data: Response.data
      })
    })
    .catch((error)=>{
      console.error(`Error fetching data: ${error}`);


    })}
    render(){
     return ( 
    <div className="App">
      <header className="App-header">
        GoodThingsMan
      </header>
      {this.state.data}
    </div>
      
  );
}}

export default App;
