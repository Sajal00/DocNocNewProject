import React,{Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PhoneNumber from "../screen/phoneNumber"
import Registration from '../screen/registration';

const Stack = createStackNavigator();
export default class AuthNavigator extends Component {
    render() {
        return (
            <Stack.Navigator screenOptions={{
                headerShown: false
              }}>
                  
                      <Stack.Screen name="phoneNumber" component={PhoneNumber}initialRouteName="PhoneNumber"/>
                      
                      <Stack.Screen name="registration" component={Registration}/>  
                        
                      


                  
              </Stack.Navigator>
        )
    }
}
