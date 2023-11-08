import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const ScoreText = ({ value, text }) => {
    return (
      <View style={styles.flexColumn}>
        <Text style={[styles.texto, styles.numero]}>{value}</Text>
        <Text style={styles.texto}>{text}</Text>
      </View>
    );
  };

export default ScoreText;

const styles = StyleSheet.create({
    flexColumn: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30
    },
    texto: {
        fontSize: 30,
    },
    numero: {
        fontWeight: 'bold'
    }
});
