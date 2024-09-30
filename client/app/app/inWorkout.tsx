import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router';
import React from "react";

interface PageProps {
  exercises: string[];
}

export default function Page({ exercises }: PageProps) {
  exercises = ['Push-ups', 'Squats', 'Lunges', 'Plank'];
  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <Text style={styles.headerText}>Workout</Text>
      </View>
      <View style={styles.exercises}>
        {exercises.map((exercise, index) => (
          <View key={index} style={styles.exerciseContainer}>
            <Text>{exercise}</Text>
            
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
});
