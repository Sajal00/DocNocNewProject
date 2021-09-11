import React, { useState,useEffect } from 'react';
import { TextInput, Text, Alert, TouchableOpacity, StyleSheet, View, Dimensions, SafeAreaView, ScrollView, } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import LinearGradient from 'react-native-linear-gradient'
import SwitchSelector from "react-native-switch-selector";
import { PermissionsAndroid } from 'react-native';
import FontistoionIcon from 'react-native-vector-icons/Fontisto';
const Deviceheight = Dimensions.get('window').height;
const Devicewidth = Dimensions.get('window').width;


const genderoption = [
  { label: "male", value: "male" },
  { label: "female", value: "female" },

];




const Registration = ({ navigation }) => {
  const [dateInput, setDateInput] = useState({});
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [name, setName] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [gender, setGender] = useState("");
  const [mailid, setMailid] = useState("");

  const [address, setAddress] = useState("");

  useEffect(async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Doc noc',
          'message': 'access to your location ',
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location")
        
      } else {
        console.log("location permission denied")
        alert("Location permission denied");
      }
    } catch (err) {
      console.warn(err)
    }
  });

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    // console.log(typeof(date))
    setDateInput(date);
    hideDatePicker();
  };

  let tempDate = dateInput.toString().slice(4, 15);
  const selectedDate = tempDate.split(" ");
  const displayDate = `${selectedDate[1]}-${selectedDate[0]}-${selectedDate[2]}`;


  const continuebutton = () => {
    if (name == '' || phoneno == '' || gender == '' || mailid == '' || dateInput == '' || address == '') {
      Alert.alert("please enter all fields")

    }
    else {
      navigation.push("homenavigator")
    }
  }

  



  return (
    <SafeAreaView>
      <ScrollView>
        <LinearGradient
          colors={['#90d4dd', '#17bccf', '#b8e2e1']}
          style={styles.container}
          start={{ x: 0, y: 0 }}
          end={{ x: 4, y: 1 }}>
          <View style={styles.container}>
            
            <View style={styles.inputcontainer}>

              <TextInput style={styles.name}
                placeholder={"Name"}
                placeholderTextColor={'#fff'}
                value={name}
                onChangeText={val => setName(val)} />

              <TextInput style={styles.phnno}
                placeholder={"Phone no"}
                placeholderTextColor={'#fff'}

                keyboardType={'number-pad'}
                value={phoneno}
                onChangeText={val => setPhoneno(val)} />

              {/* // gender */}
              <SwitchSelector
                options={genderoption}
                initial={0}
                onPress={value => setGender(value)}
                selectedColor="#fff"
                buttonColor="#1e9ea1" />

              <TextInput style={styles.mailid}
                placeholder={"Mail ID"}
                placeholderTextColor={'#fff'}
                value={mailid}
                onChangeText={val => setMailid(val)}
                 />

              {/* //age */}
              <TouchableOpacity style={styles.age} onPress={showDatePicker}>
                <Text style={{ textAlign: "left", color: "#fff" }}>{displayDate}</Text>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </TouchableOpacity>

              <TextInput style={styles.address}
                placeholder={"Address"}
                placeholderTextColor={'#fff'}
                value={address}
                onChangeText={val => setAddress(val)}
              />

            </View>
            <TouchableOpacity style={styles.button} onPress={continuebutton}>
              <Text style={styles.continue}>Continue </Text>
            </TouchableOpacity>

          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>



  );
}

export default Registration;
const styles = StyleSheet.create({
  container: {
    height: Deviceheight,

    alignItems: "center",
    // justifyContent:"space-between",
    justifyContent: "center",

    paddingTop: 30,

  },
  inputcontainer: {
    height: Deviceheight / 1.5,
    width: Devicewidth / 1.10,
    // backgroundColor:"red",
    marginBottom: 16,
    justifyContent: "space-between",
    marginBottom: 60

  },
  name: {
    borderWidth: 1,
    borderColor: "#fff",
    height: Deviceheight / 15,
    width: Devicewidth / 1.10,
    alignItems: "center",
    color: "#fff"
  },
  phnno: {
    borderWidth: 1,
    borderColor: "#fff",
    height: Deviceheight / 15,
    width: Devicewidth / 1.10,
    alignItems: "center",
    color: "#fff"

  },
  gender: {
    borderWidth: 1,
    borderColor: "#fff",
    height: Deviceheight / 15,
    width: Devicewidth / 1.10,
    alignItems: "center",
    color: "#fff"
  },
  mailid: {
    borderWidth: 1,
    borderColor: "#fff",
    height: Deviceheight / 15,
    width: Devicewidth / 1.10,
    alignItems: "center",
    color: "#fff"
  },
  age: {
    borderWidth: 1,
    borderColor: "#fff",
    height: Deviceheight / 15,
    width: Devicewidth / 1.10,
    //  alignItems: "center",
    color: "#fff"
  },
  address: {
    borderWidth: 1,
    borderColor: "#fff",
    height: Deviceheight / 7,
    width: Devicewidth / 1.10,
    alignItems: "flex-start",
    color: "#fff",
    // justifyContent:"flex-start"

  },

  button: {
    height: Deviceheight / 20,
    width: Devicewidth / 2,
    backgroundColor: "#1e9ea1",
  },
  continue: {
    textAlign: 'center',
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    alignItems: "center"
  },
  
 



},
)