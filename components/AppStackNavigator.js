import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import UserDetailsScreen  from '../screens/UserDetailsScreen.js';




export const AppStackNavigator = createStackNavigator({
  BookDonateList : {
    screen : BookDonateScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  UserDetails : {
    screen : UserDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  

},
  {
    initialRouteName: 'BarterList'
  }
);