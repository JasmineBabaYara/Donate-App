import React, {useState} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import styles from '../styles/homescreenstyle';
import { LinearGradient } from 'expo-linear-gradient';


export default function Home({ navigation }) {
    return(
        <SafeAreaView style={styles.homecontainer}>
          <LinearGradient colors={['#AEA4E7', '#fff', '#fff', '#fff', '#AEA4E7']} 
          start={{ x:1.2 , y: 0.3 }}
        end={{ x: 0, y: 1 }} 
        style={styles.lineargradient}>
            <View style={styles.searchcontainer}>
              <TextInput placeholder="Search nonprofits" placeholderTextColor='black' style={styles.input}/>
              <TouchableOpacity style={styles.searchicon}>
              <AntDesign name="search1" size={20} color="white" />
              </TouchableOpacity>
            </View>
            <View >
            <LinearGradient colors={['#AEA4E7','#D5D0F3','#fff',"#fff"]} 
          start={{ x: 0, y: 1 }}
        end={{ x: 1.2, y: 0.3 }} style={styles.rounded}/>
            </View>
            <View style={styles.hometext}>
              <Text style={styles.taptext}>
                tap.
              </Text>
              <Text style={styles.donatetext}>
                donate.
              </Text>
              <Text style={styles.donetext}>
                done.
              </Text>
            </View>

            <View style={styles.hometext2}>
              <TouchableOpacity >
              <Text style={styles.donortext} onPress={()=> navigation.navigate("InformationScreen", { screen: "InformationScreen" })}>
                DonorPal
              </Text>
              </TouchableOpacity>
              <Text style={styles.infotext}>
                Search over 1 million nonprofits.
                One time or recurring donations.
                Recieve instant tax reciepts.{'\n'}
                100% free, forever.
              </Text>
            </View>
            </LinearGradient>
      </SafeAreaView>
    );
  };

