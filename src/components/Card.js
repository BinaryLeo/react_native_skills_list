import React from 'react';
import {Text, StyleSheet} from 'react-native';

export function Card({skill}) {
  return (
    <Text style={styles.skills}>
    {skill}
    </Text>
  );
}

const styles = StyleSheet.create({
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
  