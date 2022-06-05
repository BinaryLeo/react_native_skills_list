import React from 'react';
import {Text, StyleSheet, TouchableOpacity,TouchableOpacityProps} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function Card({skill, ...rest}:SkillCardProps) {
  return (
    <TouchableOpacity>
    <Text style={styles.skills}
    {...rest}
    >
    {skill}
    </Text>
    </TouchableOpacity>
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
  