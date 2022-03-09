import {Alert } from 'react-native';
import React, { Component } from 'react';
import * as Location from 'expo-location';
import Loading from './components/Loading';
import axios from 'axios';
import Weather from './components/Weather';


const API_KEY = '64e4dde3b2942e118d134b60f699da75';


export default class extends Component {

  state = {
    isLoading: true,
  }


  getWeather = async (latitude, longitude) => {
   const {data: {main: {temp}, weather, name}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
   this.setState({isLoading: false, temp: temp, condition: weather[0].main, city: name});
  }

  getLocation = async () => {
    try{
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert("Oops! Failed to access geolocation", "Sad :(");
        return;
      }
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    }catch(error){
      Alert.alert("Oops! Failed to access geolocation", "Sad :(");
    }
  }

  componentDidMount(){
    this.getLocation();
  }

  render(){
    const {isLoading, temp, condition, city} = this.state;
    return (
      isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition} city={city}/>
      );
  }
}


