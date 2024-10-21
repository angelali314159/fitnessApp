import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Link href="/pages/workout" style={styles.link}>
        <Pressable style={styles.button}>
          <Text style={[styles.buttonText, styles.link]}>Workout</Text>
        </Pressable>
      </Link>
      <Link href="/pages/landing" style={styles.link}>
        <Pressable style={styles.button}>
          <Text style={[styles.buttonText, styles.link]}>Landing</Text>
        </Pressable>
      </Link>
      <Link href="/pages/profile" style={styles.link}>
        <Pressable style={styles.button}>
          <Text style={[styles.buttonText, styles.link]}>Profile</Text>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    height: 60,
    backgroundColor: '#29abb9',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    flexDirection: 'row'
  },
  link: {
    marginHorizontal: 5
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Navbar;