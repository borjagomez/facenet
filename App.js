/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Node, useState, useEffect}from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import logo from './assets/rever-logo.jpg';
import Tflite from 'tflite-react-native';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  let tflite = new Tflite();

  useEffect(() => {
    (async () => {

      tflite.loadModel({
        model: 'mobilefacenet.tflite', 
        labels: '',
        numThreads: 1,
      },
      (err, res) => {
        if(err)
          console.log(err); 
        else
          console.log(res);
      });

    })();
  }, []);

  return (
    <SafeAreaView style={styles.backgroundScreen}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.mainView}>
        <View style={styles.container}>
          <Image source={logo} style={styles.logo} />  
        </View>       
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundScreen: {
    backgroundColor: '#FFF',
  },
  mainView: {
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  logo: {
    width: 100,
    height: 100 
  },  
});

export default App;
