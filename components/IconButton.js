import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const IconButton = ({properties, onPress}) => {
  const width = properties.width;
  const aspectRatio = properties.aspectRatio; 
  const style = {
      width,
      aspectRatio
      };
    
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={properties.source} style={style} /> 
        </View>
      </TouchableOpacity>
    );
  };

export default IconButton;

const styles = StyleSheet.create({
  
});
