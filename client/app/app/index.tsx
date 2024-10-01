import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>bicep curl</Text>
        <Text style={styles.subtitle}>arms (or whatever muscle group its categorized under)</Text>
        <Text style={styles.testing}>description</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 0,
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 50,
    color: "#00008B",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 40,
    color: "#4169E1",
  },
  testing: {
    fontSize: 30,
    color: "#5DADE2",
  }
});
