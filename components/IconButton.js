import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const IconButton = ({ imageSource, onPress, width, aspectRatio }) => {
    const style = {
        width,
        aspectRatio
      };
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={imageSource} style={style} /> 
        </View>
      </TouchableOpacity>
    );
  };

export default IconButton;

const styles = StyleSheet.create({
  
});
