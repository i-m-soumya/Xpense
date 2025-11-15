import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function BlackButton({ label, onPress }: any) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "black",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  label: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
