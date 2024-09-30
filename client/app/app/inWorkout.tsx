import { Pressable, StyleSheet, Text, View, Switch } from "react-native";
import { Link } from 'expo-router';
import React, { useState } from "react";

interface PageProps {
  exercises: string[];
}

export default function Page({ exercises }: PageProps) {
  exercises = ['Push-ups', 'Squats', 'Lunges', 'Plank'];
  const [switchStates, setSwitchStates] = useState<boolean[][]>(
    exercises.map(() => new Array(3).fill(false))
  );

  const toggleSwitch = (exerciseIndex: number, switchIndex: number) => {
    setSwitchStates(prevStates => {
      const newStates = [...prevStates];
      newStates[exerciseIndex][switchIndex] = !newStates[exerciseIndex][switchIndex];
      return newStates;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <Text style={styles.headerText}>Workout</Text>
      </View>
      <View style={styles.exercises}>
        {exercises.map((exercise, exerciseIndex) => (
          //display the exercises and the switches
          <View key={exerciseIndex} style={styles.exerciseContainer}>
            <Text>{exercise}</Text>
            <View style={styles.switchGroup}>
              {switchStates[exerciseIndex].map((isEnabled, switchIndex) => (
                <Switch
                  key={switchIndex}
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => toggleSwitch(exerciseIndex, switchIndex)}
                  value={isEnabled}
                  style={styles.switch}
                />
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  topHeader: {
    width: "100%",
    padding: 24,
    backgroundColor: "#f5f5f5",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  exercises: {
    flex: 1,
    width: "100%",
  },
  exerciseContainer: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
  },
  switchGroup: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 12,
    alignItems: 'flex-end', //right-align
  },
  switch: {
    marginVertical: 4, // Adjust this value to change the space between switches
  },
});