import React,{Component,useState} from 'react'
import {ImageBackground,StyleSheet,Image,View,SafeAreaView,ScrollView,Text,Button, Dimensions} from 'react-native'
import Home from './Home'
import EditProfile from './editprofile'
import Contact from './contact'
import {createDrawerNavigator, DrawerItems} from "react-navigation-drawer"
import { createAppContainer } from 'react-navigation'
import  AsyncStorage  from '@react-native-async-storage/async-storage'
import BonPratiquestack from '../routes/bonpratiquestack'
import Apropos from './Apropos'
import {Feather} from '@expo/vector-icons'

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
            <ImageBackground source={ require('../assets/images/drawer.png')} style={styles.image1}>
        <View style={{
            height:150,
            // backgroundColor:"white",
            flexDirection:"column",
            alignItems:'center',
            justifyContent:'center',
            marginTop:5
            }}>
            <Image source ={require("../assets/images/profile.png")} style={{height:100,width:100,
            borderRadius:100,borderColor:"green",borderWidth:5}}/>
            <Text style={styles.name}>bienvenue {value} </Text>
        </View>
        </ImageBackground>
        <ScrollView>
            <DrawerItems {...props}/>
        </ScrollView>
    </SafeAreaView>
)
const AppDrawerNavigator =createDrawerNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            title:'Principale',
            drawerIcon:({tintcolor})=> <Feather name="home" size="16" color={tintcolor}/>
        }},
    EditProfile:{
        screen:EditProfile,
        navigationOptions:{
            title:'Modifier votre profile',
            drawerIcon:({tintcolor})=> <Feather name="edit" size="16" color={tintcolor}/>
        }},
    Contact:{
        screen:Contact,
        navigationOptions:{
            title:'Contact',
            drawerIcon:({tintcolor})=> <Feather name="mail" size="16" color={tintcolor}/>
        }},
    BonPratiquestack:{
        screen:BonPratiquestack,
        navigationOptions:{
            title:'Les bons pratiques',
            drawerIcon:({tintcolor})=> <Feather name="star" size="16" color={tintcolor}/>
        }},
    Apropos:{
        screen:Apropos,
        navigationOptions:{
            title:'A propos de nous',
            drawerIcon:({tintcolor})=> <Feather name="info" size="16" color={tintcolor}/>
        }},

},
{
    contentComponent:     CustomDrawerComponent,
     drawerWidth:Dimensions.get("window").width*0.85,
     hideStatusBar:true,
     contentOptions:{
         activeBackgroundColor:"rgba(22,228,111,0.2)",
         activeTintColor:"#531158",
         itemsContainerStyle:{
             margintTop:16,
             marginHorizontal:8
         },
         timeStyle:{
             borderRadius:4
         }
     }

    // props=><Compte {...props}/>,

    
    

});

const styles=StyleSheet.create({
    image1: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
        
      },
    name:{
        marginTop:10,
        fontSize:20,
        fontWeight: 'bold',
        color: 'white'
    }
})



