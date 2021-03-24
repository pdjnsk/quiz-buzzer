import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu  from './customSideBarMenu';
import SettingsScreen from '../screens/SettingsScreen'
import ExchangeScreen from '../screens/Exchange'


export const AppDrawerNavigator = createDrawerNavigator ({
    Home: {
      screen : TabNavigator
    },
    
    Settings : {
      screen : SettingsScreen
    },
    Exchange : {
        screen : ExchangeScreen
    }
    },
     {
      contentComponent: CustomSideBarMenu
    },
    {
      initialRouteName: 'home'
    })