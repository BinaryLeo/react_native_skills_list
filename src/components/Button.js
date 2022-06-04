import React from "react";
import { TouchableOpacity,Text,StyleSheet } from "react-native";

export function AddButton({onPress}) {
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
export function RemoveBtn({onRemove}){
    return(
        <TouchableOpacity
        style={[styles.button, { flex: 1 }]}
        activeOpacity={0.7}
        onPress={onRemove}
      >
        <Text style={styles.buttonText}>Clear List</Text>
      </TouchableOpacity> 
    )
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