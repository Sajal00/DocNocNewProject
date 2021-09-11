import React,{Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeNavigator from "../Navigation/homeNavigator"
import AuthNavigator from "../Navigation/authNavigator"



const Stack = createStackNavigator();
export default class AppNavigator extends Component {
   
    render() {
        return (
            <Stack.Navigator screenOptions={{
                headerShown: false
              }}>
                  
                      <Stack.Screen name="authnavigator" component={AuthNavigator} initialRouteName="authnavigator"/>
                      
                      <Stack.Screen name="homenavigator" component={HomeNavigator}/>


              </Stack.Navigator>
        )
    }
}
