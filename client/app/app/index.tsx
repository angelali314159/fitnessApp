import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>bicep curl</Text>
        <Text style={styles.subtitle}>arms (or whatever muscle group its categorized under)</Text>
        <Text style={styles.testing}>description</Text>
      </View>
      <View style={styles.rectangle}>
        <Text style={styles.text}>Video</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "flex-start",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 50,
    color: "#00008B",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 22,
    color: "#4169E1",
  },
  testing: {
    fontSize: 20,
    color: "#5DADE2",
  },
  rectangle: {
    width: 300,
    height: 150,
    backgroundColor: "#4169E1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginLeft: 50
  },
  text: {
    fontSize: 20,
    color: "#00008B",
    textAlign: "center",
  }
});
