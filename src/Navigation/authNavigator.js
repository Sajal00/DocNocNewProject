import React,{Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import PhoneNumber from "../screen/phoneNumber"
// import OtpVerification from '../screen/otpVerifications';
import Registration from '../screen/registration';
// import Home from "../screen/home";

const Stack = createStackNavigator();
export default class AuthNavigator extends Component {
    render() {
        return (
            <Stack.Navigator screenOptions={{
                headerShown: false
              }}>
                  
                      {/* <Stack.Screen name="phoneNumber" component={PhoneNumber}initialRouteName="PhoneNumber"/> */}
                      
                      {/* <Stack.Screen name="otpVerification" component={OtpVerification}/> */}
                      {/* <Stack.Screen name="registration" component={Registration}/>   */}
                      {/* <Stack.Screen name="home" component={Home}/> */}
                        
                                        

                      <Stack.Screen name="registration" component={Registration}initialRouteName="Registration"/>
                      


                  
              </Stack.Navigator>
        )
    }
}
