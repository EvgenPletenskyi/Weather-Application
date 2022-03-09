import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Loading() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Opening umbrellas...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf6aa',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 20,
  },
  text:{
    color: "#2c2c2c",
    fontSize: 30,
  }
});
