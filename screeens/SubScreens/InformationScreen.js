import React, { useRef, useMemo, useState, useCallback} from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';
import styles from '../../styles/informationscreenstyle';
import panda from "../../assets/img/panda1.png"
import { LinearGradient } from "expo-linear-gradient";
import Popup from "./Popup";

export default function InformationScreen({ navigation }) {
  let popupRef = React.createRef()

  const onShowPopup = () => {
    popupRef.show()
  }


  return (
    <SafeAreaView style={styles.usercontainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
      <AntDesign name="left" size={24} color="white"  />
      </TouchableOpacity>
        <Text style={styles.headertext}>world wildlife fund</Text>
        <Entypo name="share-alternative" size={26} color="white" />
        </View>
        <View style={styles.imagecontainer}>
          <Image source={panda} style={styles.image} />
        </View>

          <View>
            <LinearGradient colors={['#000','#000028','#00027A',"#00027A", '#00008b']} 
          start={{ x: 0, y: 1 }}
        end={{ x: 1.2, y: 0.3 }} style={styles.rounded} />
          </View>
          <Text style={styles.boldtext}>
            world wildlife fund
          </Text>

        <View style={styles.bodytext}>
          <Text style={styles.bodytext1}>
            About this charity
          </Text>
          <Text style={styles.bodytext2}>
            World Wildlife Fund Inc, is a nonprofit, tax-exempt, charitable organization. 
          </Text>
        </View>
        <Text style={styles.addresstext}>
          1250 24th street, NW, Washington, DC 20037
        </Text>
        <View style={styles.detailscontainer}>
        <AntDesign name="arrowdown" size={20} color='rgba(255,255,255,0.6 )' />
        <Text style={styles.detailstext}>
          Organization Details
        </Text>
        </View>
      <TouchableOpacity
         onPress={() => onShowPopup()}
        
        style={styles.donatecontainer}
      >
        <Text style={styles.donate}>
          Donate
        </Text>
      </TouchableOpacity>
      {/* rendering popup  */}
      <Popup 
      ref={(target) => popupRef = target}
      />
    
    </SafeAreaView>
  );
}



