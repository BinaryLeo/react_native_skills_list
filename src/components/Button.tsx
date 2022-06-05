import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}
interface RemoveBtn {
  OnRemove: () => void;
  title: string;
}
export function AddButton({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { flex: 1, marginRight: 15 }]}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
export function Remove({ title, OnRemove }: RemoveBtn) {
  return (
    <TouchableOpacity
      style={[styles.button, { flex: 1 }]}
      activeOpacity={0.7}
      onPress={OnRemove}
    >
      <Text style={styles.buttonText}>{title}</Text>
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
