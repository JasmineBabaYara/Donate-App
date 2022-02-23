import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign, Entypo } from '@expo/vector-icons';



export default function UserScreen({ navigation }) {
  return (
    <View >
     <Text onPress={()=> navigation.goBack()}>hello</Text>
    </View>
  );
}
