import React from 'react';
import HeadingPage from './components/index';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state ={
        projects:[]
    }
  }

  
render(){
    return (
    <div className="App">
      <HeadingPage projects ={this.state.projects}  />
    </div>
  );
}
}

export default App;
