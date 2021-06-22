import * as React from 'react';
import { Text, View, StyleSheet,Image,ScrollView } from 'react-native';

export default function Apropos() {

  return (
    <ScrollView>
<View style={styles.container}>
<Text style={styles.text}>A propos de nous </Text>
<Image style={styles.image} source={require('../assets/LOGO.png')}/>
<Text style={styles.text1}>
<Text  style={styles.text2}>YL.AGRI</Text>  est un service agronomique automatisé basé à Casablanca qui conçoit des solutions matérielles et logicielles intelligentes de IoT pour les agriculteurs. Ces solutions collectent et analysent des données de n'importe quel endroit pour aider les agriculteurs dans leur processus de prise de décision, offrant une meilleure efficacité et des choix plus intelligents dans l'entreprise agricole.
</Text>
</View>
</ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    //borderWidth: 2,
   // margin: 13,
    //borderRadius: 15,
   // borderColor: '#08ABCC',
   alignItems:'center',
   justifyContent:'center',
   marginTop:30,
  },
  image: {
    width: 360,
    height: 260,
    // borderTopRightRadius:13,
   // borderTopLeftRadius: 14,
  },
  text:{
fontSize:50,
fontWeight:'bold',
//textAlign:'center',
//backgroundColor:'#0A5F13',
color:'#0A5F13',
marginTop:5,
margin:13,
  },
   text1:{
fontSize:20,
padding:10,
marginLeft:10,
  },
   text2:{
fontWeight:'bold',
  },
});

