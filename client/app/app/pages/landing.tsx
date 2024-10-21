import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button, Alert, Image} from 'react-native';

//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack'; //npm install @react-navigation/stack
 
//import HomeScreen from '../assets/images/home.png';
//const Stack = createStackNavigator();

//need to implement scrolling for new workouts
export default function Page() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.main}>
        <Text style={styles.title}>Hi [user]</Text>

        <Text style={styles.subtitle}>Your Goals</Text>
        <View style={styles.goals}>
          <Text style={styles.goalsText}>Some Goals</Text>
        </View>

        <Text style={styles.subtitle}>Explore some workouts</Text>
        <View style={styles.button}>
          <View style = {styles.buttonItem}>
            <Button 
              title="Workout 1"
              onPress={() => Alert.alert('Workout Info Here')}
              color="#89CFF0"
            />
          </View>
          <View style = {styles.buttonItem}>
            <Button 
              title="Workout 2"
              onPress={() => Alert.alert('Workout Info Here')}
              color="#89CFF0"
            />
          </View>
          <View style = {styles.buttonItem}>
            <Button 
              title="Workout 3"
              onPress={() => Alert.alert('Workout Info Here')}
              color="#89CFF0"
            />
          </View>
        </View>
      </ScrollView>
      <View> 
        <View style={styles.icons}>
          <Image 
          style = {styles.iconHome}
          source={require('../../assets/images/home.png')} 
          />
          <Image
          style = {styles.iconAccount}
          source={require('../../assets/images/account.png')} 
          />
        </View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 960,
    paddingHorizontal: 15,

  },
  main: {
    flex: 1,
  },
  goals: {
    height: 150,
    width: 350,
    backgroundColor: '#B399DD',
    borderRadius: 5,
  },
  goalsText: {
    fontSize: 15,
    color: '#FFFFFF',
    textAlign: 'center',
    paddingTop: 20,
  }, 
  title: {
    fontSize: 64,
    fontWeight: "bold",
    marginTop: 40,
    paddingVertical: 8,
    color: "#B399DD",
  },
  subtitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: '#20232a',
  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 12,
    borderRadius: 4,
  },
  buttonItem: {
    marginRight: 32,
    height: 100,
  },
  iconHome: {
    width: 50,
    height: 100,
    resizeMode: 'contain',
    paddingTop: 190,
  },
  iconAccount: {
    width: 90,
    height: 150,
    resizeMode: 'contain',
    paddingBottom: 200,
  },
  icons: {
    flexDirection: 'row',
    paddingRight: 300,
  },
});