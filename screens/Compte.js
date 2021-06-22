import React,{Component,useState} from 'react'
import {StyleSheet,Image,View,SafeAreaView,ScrollView,Text,Button} from 'react-native'
import Home from './Home'
import EditProfile from './editprofile'
import Contact from './contact'
import {createDrawerNavigator, DrawerItems} from "react-navigation-drawer"
import { createAppContainer } from 'react-navigation'
import  AsyncStorage  from '@react-native-async-storage/async-storage'
import BonPratiquestack from '../routes/bonpratiquestack'
import Apropos from './Apropos'
export default class Compte extends Component{
    render(){
   
        const AppNavigator = createAppContainer(AppDrawerNavigator);
        return(
            <AppNavigator/>
        );
    }
}
var value="";
AsyncStorage.getItem('any_key').then((val)=>{value=val})

const CustomDrawerComponent=(props) =>(
 
    <SafeAreaView style={{flex:1}}>
        <View style={{
            height:150,
            backgroundColor:"white",
            flexDirection:"column",
            alignItems:'center',
            justifyContent:'center',
            marginTop:5
            }}>
            <Image source ={require("../assets/images/profile.png")} style={{height:100,width:100,
            borderRadius:100,borderColor:"green",borderWidth:5}}/>
            <Text style={styles.name}>bienvenue {value} </Text>
        </View>
        <ScrollView>
            <DrawerItems {...props}/>
        </ScrollView>
    </SafeAreaView>
)
const AppDrawerNavigator =createDrawerNavigator({
    Home:Home,
    EditProfile:EditProfile,
    Contact:Contact,
    BonPratiquestack:BonPratiquestack,
    Apropos:Apropos,

},
{
    contentComponent:CustomDrawerComponent

});

const styles=StyleSheet.create({
    name:{
        marginTop:10,
        fontSize:20,
        fontWeight: 'bold',
        color: 'black'
    }
})



