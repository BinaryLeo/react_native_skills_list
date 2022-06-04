import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from "react-native";
import { AddButton, RemoveBtn } from "./src/components/Button";
import { Card } from "./src/components/Card";
export default function App() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);
  const [countSkills, setCountSkills] = useState(0);
  const [greeting, setGreeting] = useState("");
  function handleAddSkills() {
    mySkills.includes(newSkill)
      ? alert("Skill already exists")
      : setMySkills((oldState) => [...oldState, newSkill]);
  }
  function handleClearSkills() {
    setMySkills([]);
  }
  useEffect(() => {
    setCountSkills(mySkills.length);
  }, [mySkills]);
  useEffect(() => {
    const current = new Date().getHours();
    if (current < 12) {
      setGreeting("Good Morning");
    } else if (current >= 12 && current < 18) {
      setGreeting("Good Afternoon");
    } else setGreeting("Good  night");
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Binary Leo</Text>
      <Text style={styles.greeting}>{greeting}</Text>
      <TextInput
        placeholder="New Skill"
        style={styles.input}
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <AddButton onPress={handleAddSkills} />
        <RemoveBtn onRemove={handleClearSkills} />
      </View>

      <Text style={[styles.title, { marginTop: 20 }]}>
        My Skills <Text>{countSkills}</Text>
      </Text>
      <FlatList
        data={mySkills}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Card skill={item} />}
      />
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
  greeting:{
    color: "#fff",
    marginTop:5
  }
});
