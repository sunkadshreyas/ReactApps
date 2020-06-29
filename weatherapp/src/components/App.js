import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import SearchBar from './SearchBar';
import  Display  from './Display';
import '../styles.css'

const API_KEY = "" // use the API key from OpenWeather site

class App extends React.Component{
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    city : '',
    country : '',
    temperature : null,
    humidity : null,
    description : null,
  }
  handleChange(event){
    const {name,value} = event.target
    this.setState({
      [name] : value
    })
  }
  getWeather = async (event) => {
    event.preventDefault();
    const city = this.state.city
    const country = this.state.country
    await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          temperature : data.main.temp,
          humidity : data.main.humidity,
          description : data.weather[0].description
        })
      }).catch(err => console.log(err))
  }
  render(){
    return (
      <div className='app'>
        <SearchBar 
          city={this.state.city} 
          country={this.state.country}
          onChange={this.handleChange} 
          onClick={this.getWeather}
        />
        <Display 
          city={this.state.city}
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          description={this.state.description}
          country={this.state.country}
        />
      </div>
    );
  }
}

export default App;
