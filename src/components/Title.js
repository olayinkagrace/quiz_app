import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function Title({titleText}) {
  return (
    <View style={styles.container}>
      <Text  style={styles.title}> {titleText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight:"600",
    color: '#80ED99',
    fontStyle: 'italic'

  },
  container: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
