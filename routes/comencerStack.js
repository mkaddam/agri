import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Commencer from '../screens/comencer';
import Objectifs from '../screens/objectifs';
import Connect from '../screens/connect';
import Inscription from '../screens/Inscription';
import Compte from '../screens/Compte';
import Header from '../shared/header';
import HeaderCompte from '../shared/headercompte'
import React from 'react';

const screens = {
  Commencer: {
    screen: Commencer,
    navigationOptions:{
      headerShown:false
    }
  },
  Objectifs: {
    screen: Objectifs,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft:()=> null,
        headerTitle: () => <Header  navigation={navigation} />
      }
    },
  },
  Connect:{
      screen: Connect,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft:()=> null,
          headerTitle: () => <Header  navigation={navigation} />
        }
      },
    },
  Inscription:{
    screen: Inscription,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft:()=> null,
        headerTitle: () => <Header  navigation={navigation} />
      }
    },
  },
  Compte:{
    screen: Compte,
    navigationOptions:{
      headerTitle: () => <HeaderCompte   />,
      headerLeft:null,
      // headerShown:false
    }
  }
}


const comencerStack = createStackNavigator(screens);

export default createAppContainer(comencerStack);