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
componentWillMount(){
  this.setState({projects:[
    {
      title:'Business Website',
      category:'Web design',
    },
    {
      title:'Social website',
      category:'Mobile Development',
    },
    {
      title:'Games Website',
      category:'Desktop Development',
    }
  ]})
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
