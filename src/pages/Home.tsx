import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
  Alert,
} from "react-native";
import { AddButton, Remove } from "../components/Button"
import { Card } from "../components/Card";

interface  SkillData {
  id: string;
  name: string;
}

export  function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [countSkills, setCountSkills] = useState(0);
  const [greeting, setGreeting] = useState("");
  function handleAddSkills() {
    const data ={
      id: String(new Date().getTime()),
      name: newSkill
    }
    if(mySkills.find(skill => skill.name === newSkill)){
    Alert.alert("Skill already exists")}
    else if(newSkill === ""){
      Alert.alert("Please enter a skill")
    }
    else{
    setMySkills((oldState) => [...oldState, data])}
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
        <AddButton onPress={handleAddSkills}
         title="Add" />
        
        <Remove OnRemove={handleClearSkills}
         title="Clear" />
        
      </View>

      <Text style={[styles.title, { marginTop: 20 }]}>
        My Skills <Text>{countSkills}</Text>
      </Text>
      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card skill={item.name} />}
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
