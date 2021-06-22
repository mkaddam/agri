import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { NavigationEvents } from 'react-navigation';
export default function HeaderCompte() {
 



  return (
    
      <View style={styles.header}>
        <Image source={require('../assets/l.png')} size={100} style={styles.headerImage} />
        <Text></Text>
      </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // justifyContent:'center',
    // height:100,
    marginTop:-10,
    flexDirection: 'row',
  },
  headerImage: {
    width: 70,
    height: 50,
    marginLeft:145,
    marginHorizontal: 145,
  },
  icon:{
      marginLeft:10,
      marginTop:10
  }
});