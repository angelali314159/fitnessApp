import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Profile Picture</Text>
        <Text style={styles.subtitle}>Edit profile</Text>
        <View style={styles.goalsContainer}>
          <Text style={styles.goalText}>Daily goal</Text>
          <Text style={styles.goalText}>Long term goal</Text>
        </View>

        
        <View style={styles.rectangle} />
        <View style={styles.rectangle2} />
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
  main: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    paddingTop: 100,
  },
  title: {
    fontSize: 64,
    color: "grey",
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 36,
    color: "#A9A9A9",
    textAlign: "center",
    marginTop: 20,
  },
  goalsContainer: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    width: "100%", 
    paddingHorizontal: 40,
    marginTop: 20, 
  },
  goalText: {
    fontSize: 24,
    color: "#A9A9A9",
  },
 
  rectangle: {
    width: 1000, 
    height: 200, 
    backgroundColor: 'lightblue', 
    marginTop: 20, 
  },
  rectangle2: {
    width: 1000, 
    height: 200, 
    backgroundColor: 'lightblue', 
    marginTop: 20, 
  },
});
