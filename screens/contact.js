import * as React from 'react';
import { Text, View, StyleSheet,Image,ScrollView } from 'react-native';
// import Constants from 'expo-constants';

// You can import from local files
// import AssetExample from './components/AssetExample';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// or any pure javascript modules available in npm

export default function Contact() {

  return (
    <View style={styles.container1}>
        <Text style={styles.text}> Contacts</Text>
        <View style={styles.container}>
            <FontAwesome5 style={styles.icon} name='map-marker-alt' size={40} color='#137112' />
            <Text style={styles.text2}>Adresse:
            <Text style={styles.text1}>{'\n'}YL.AGRI,402 Boulevard Mohamed Zerktouni,Casablanca </Text></Text>
        </View>
        <View style={styles.container}>
        <FontAwesome5 style={styles.icon} name='envelope-open-text' size={40} color='#137112' />
        <Text style={styles.text2}>E-mail:<Text style={styles.text1}>{'\n'}YL-AGRI@gmail.com</Text></Text>
        </View>
        <View style={styles.container}>
        <FontAwesome5 style={styles.icon} name='phone-alt' size={40} color='#137112' />
        <Text style={styles.text2}>Téléphone:<Text style={styles.text1}>{'\n'}0748792330</Text></Text>
        </View>
        <View style={styles.container}>
        <FontAwesome5 style={styles.icon} name='calendar-alt' size={40} color='#137112' />
        <Text style={styles.text2}>Lundi-Vendredi:<Text style={styles.text1}>{'\n'}08:00/12:30-13:30/18:30</Text></Text>
        </View>
        <View style={styles.container}>
        <FontAwesome5 style={styles.icon} name='calendar-minus' size={40} color='#137112' />
        <Text style={styles.text2}>Samedi:<Text style={styles.text1}>{'\n'}08:00/12:00</Text></Text>
        </View>
        <View style={styles.container}>
        <FontAwesome5 style={styles.icon} name='calendar-times' size={40} color='#137112' />
        <Text style={styles.text2}>Dimanche:<Text style={styles.text1}>{'\n'}Fermé</Text></Text>
        </View>
  </View>  
  );
}
const styles = StyleSheet.create({
    container1:{
        right:5,
        flex:1,
        justifyContent:'center'

    },
  container: {
    flexDirection: 'row',
   marginTop:30,
  },
   text:{
fontSize:50,
fontWeight:'bold',
color:'#0A5F13',
marginTop:15,
textAlign:'center',
margin:13,
  },
  icon:{
marginLeft:13,
marginTop:5,
  },
  text1:{
    fontSize:20,
    fontWeight:'bold',
marginLeft:11,
marginTop:2,
  },
  text2:{
    fontSize:20,
marginLeft:11,
marginTop:2,
  },
  });
