import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
} from "react-native";

type ButtonProps = TouchableOpacityProps;
interface RemoveBtn {
  OnRemove: () => void;
}
export function AddButton({ onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { flex: 1, marginRight: 15 }]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}
export function Remove({ OnRemove }: RemoveBtn) {
  return (
    <TouchableOpacity
      style={[styles.button, { flex: 1 }]}
      activeOpacity={0.7}
      onPress={OnRemove}
    >
      <Text style={styles.buttonText}>Clear List</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#A370F7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
