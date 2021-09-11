import React, { useState } from 'react';
// import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { View, Text, TextInput, Dimensions, StyleSheet, Alert, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Deviceheight = Dimensions.get('window').height;
const Devicewidth = Dimensions.get('window').width;


const PhoneNumber = ({ navigation }) => {
  const [phoneNumber, setphoneNumber] = useState('');

  const hadleSubmit = () => {
    if (phoneNumber == '') {
      Alert.alert("please enter your number")
    }
    else if (phoneNumber.length < 10 || phoneNumber.length > 10) {
      Alert.alert("please enter a valid number")
    }
    else if (phoneNumber.length == 10) {
      navigation.navigate("registration")
    }
    // else{
    //     null
    // }
    // navigation.navigate("otpVerification")
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Doc noc</Text>
      </View>
      <View style={{
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center",
        width: Devicewidth / 1.5,
        marginTop: Deviceheight / 30,
        marginRight: 20
      }}>
        <View style={styles.circlular}>

          <Icon size={24} color="#fff" name="dialpad" />

        </View>
        <View>
          <TextInput style={styles.textinput}
            placeholder={'PHONE NUMBER'}
            keyboardType={'number-pad'}
            placeholderTextColor={'#fff'}
            value={phoneNumber}
            onChangeText={val => setphoneNumber(val)}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.Registercontainer} onPress={hadleSubmit}>
        <Text style={styles.Register}>Register</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PhoneNumber;



const styles = StyleSheet.create({
  container: {
    height: Deviceheight,
    backgroundColor: "#90d4dd",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30
  },
  Registercontainer: {
    height: Deviceheight / 20,
    width: Devicewidth / 2,
    alignSelf: "center",
    backgroundColor: "#1e9ea1",
    justifyContent: "center",
    marginTop: Deviceheight / 4
  },
  Register: {
    textAlign: 'center',
    fontSize: 14,
    color: "#fff",
    textAlign: "center"
  },
  text: {
    textAlign: 'center',
    fontSize: 53,
    color: "#fff",
    fontWeight: "bold"
  },
  textinput: {
    borderBottomColor: '#1e9ea1',
    borderBottomWidth: 2,
    height: Deviceheight / 18,
    width: Devicewidth / 2,
    alignItems: "center",
    marginBottom: 15,
    color: "#fff"
  },
  circlular: {
    height: Deviceheight / 18,
    width: Devicewidth / 9,
    backgroundColor: "#1e9ea1",
    borderRadius: 360,
    alignItems: "center",
    justifyContent: "center"
  },

})













