import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [bool, setBool] = useState(false);
  function onPress() {
    setBool(!bool);
  }
  return (
    <View style={styles.container}>
      <Text>App Teste</Text>
      <Text>Funcionando</Text>
      <Button title="Apertar aqui" onPress={() => onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
