import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Navbar from './pages/navbar'; 
import WorkoutPage from './pages/workout';

export default function App() {
  return (
    <div>
        <Navbar />
        <div style={styles.container}>
        </div>
    </div>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60, // Adjust to account for the navbar height
  },
});