import React, {Component} from 'react';
// import data from './Data'
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Main from './Components/Main'

class App extends Component {
  constructor(){
    super()
    this.state = {
      page: ''
    }
  }
  render() {
  return (
    <div className="App">
      <Header />
      <Main /> 
    </div>
  );
}
}

export default App;
