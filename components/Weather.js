import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOption = {
    Cloud: {
        iconName: 'cloud',
        gradient: ['#348ac7', '#7474bf'],
        color: 'white',
        title: 'Cloud',
        subtitle: 'Leave your hat at home',
    },
    Snow: {
        iconName: 'snow',
        gradient: ['#83a4d4', '#b6fbff'],
        color: 'white',
        title: 'Snow',
        subtitle: 'It`s time for snowball!',
    },
    Rain:{
        iconName: 'rainy',
        gradient: ['#3d72b4', '#525252'],
        color: 'white',
        title: 'Rain',
        subtitle: 'An umbrella would be useful',
    },
    Thunderstorm:{
        iconName: 'thunderstorm',
        gradient: ['#141e30', '#243b55'],
        color: 'white',
        title: 'Thunderstorm',
        subtitle: 'Looks bad... Stay at home!',
    },
    Clear:{
        iconName: 'sunny',
        gradient: ['#fffc00', '#ffffff'],
        color: 'black',
        title: 'Clear',
        subtitle: 'The best weather',
    },
}

export default function Weather({temp, condition, city}) {
  return (

              <LinearGradient
        colors={weatherOption[condition].gradient}
        style={styles.container}>
        <StatusBar barStyle='light-content'/>
        <View style={styles.halfContainer}>
         <Ionicons name={weatherOption[condition].iconName} size={96} color={weatherOption[condition].color} />
        <Text style={[styles.temp, {color: `${weatherOption[condition].color}`}]} >{temp}°</Text>
        <Text style={[styles.text, {color: `${weatherOption[condition].color}`}]}>{city}</Text>
        </View>

        <View style={{...styles.halfContainer, ...styles.textContainer}}>
            <Text style={[styles.title, {color: `${weatherOption[condition].color}`}]}>{weatherOption[condition].title}</Text>
            <Text style={[styles.subtitle, {color: `${weatherOption[condition].color}`}]}>{weatherOption[condition].subtitle}</Text>
        </View>
        </LinearGradient>
 
  );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Mist", "Clear", "Clouds", "Smoke", "Dust", "Sand", "Haze"]).isRequired,
    city: PropTypes.string.isRequired,
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: "#2c2c2c",
    fontSize: 30,
    fontWeight: "bold",
  },
  halfContainer:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  temp:{
      fontSize: 46,
      color: 'white',
  },
  title:{
    fontSize: 44,
    marginBottom: 15,
    fontWeight: "bold",
  },
  subtitle: {
    fontWeight: "bold",
    color: "white",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    // alignItems: 'flex-start',
  }
});
