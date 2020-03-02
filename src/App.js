import React from 'react';
import axios from 'axios';
import Titles from './components/title';
import Form from './components/form';
import ListItems from './components/listItems';
import './App.css';

class App extends React.Component {
  state={lists:[]};
  API_KEY = "";
  onSearchSubmit = async term => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${term}%7Bterm%7D&appid=${this.API_KEY}&units=metric`)
      this.setState({lists: response.data.list},);
    }catch(e){
      this.setState({lists:['Not found']})      
    }    
  };

  render(){
    return (
      <div className="background" style={{  
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="App">
          <div className="container-fluid">
            <Titles/>
            <Form onSubmit={this.onSearchSubmit}/>
            { this.state.lists.length >= 2 && <ListItems lists={this.state.lists}/>}
            { this.state.lists.length === 1 && <p>Please enter correct city and country....</p>}
          </div>
        </div>
      </div>
    );
  }  
}

export default App;
