import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router';
import React from "react";
import Navbar from './navbar';

interface PageProps {
  exercises: string[];
}

async function getAll() {
  const response = await fetch(`http://localhost:5050/record/`);
  if (!response.ok) {
    const message = `An error occurred: ${response.statusText}`;
    console.error(message);
    return;
  }
  const records = await response.json();
  console.log(records);
}

export default function Page({ exercises }: PageProps) {
  getAll();
  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <Text style={styles.headerText}>Workout</Text>
      </View>
      <Link href={{
        pathname: "/pages/inWorkout",
        params: {exercises: ['Push-ups', 'Squats', 'Lunges', 'Plank']}
      }}>
      <Pressable>
        <Text>Start</Text>
      </Pressable>
    </Link>
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
