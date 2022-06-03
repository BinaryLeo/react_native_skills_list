import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
export default function App() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);
  function handleAddSkills() {
    setMySkills((oldState) => [...oldState, newSkill]);
  }
  function handleClearSkills() {
    setMySkills([]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Binary Leo</Text>
      <TextInput
        placeholder="New Skill"
        style={styles.input}
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          style={[styles.button, { flex: 1, marginRight: 15 }]}
          activeOpacity={0.7}
          onPress={handleAddSkills}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { flex: 1 }]}
          activeOpacity={0.7}
          onPress={handleClearSkills}
        >
          <Text style={styles.buttonText}>Clear List</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.title, { marginTop: 20 }]}>My Skills 
      </Text>
      {mySkills.map((skill, index) => (
        <>
        <Text key={index} style={styles.skills}>
        {skill}
        
        </Text>
        </>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    height: 45,
    backgroundColor: "#1F1e25",
    color: "#fff",
    marginTop: 30,
    fontSize: 18,
    borderRadius: 8,
    padding: Platform.OS === "ios" ? 15 : 10,
  },
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
  skills: {
    backgroundColor: "#1F1e25",
    color: "#fff",
    justifyContent: "center",
    marginTop: 15,
    padding: 20,
    fontSize: 20,
    borderLeftColor: "#A370F7",
    borderLeftWidth: 10,
  }
});
