import React, { useState } from 'react';
import { TextInput, Text,Icon, ImageBackground, TouchableOpacity, StyleSheet, View, Dimensions, SafeAreaView, ScrollView, } from 'react-native';

import icon from 'react-native-vector-icons/FontAwesome5';

import FoundationIcon from 'react-native-vector-icons/Foundation';
import StarRating from 'react-native-star-rating';

const Deviceheight = Dimensions.get('window').height;
const Devicewidth = Dimensions.get('window').width;


const DoctorProfile = () => {

  const [starcount, setStarcount] = useState(2.5);


  return (

    <SafeAreaView>
      <ScrollView>

        <View style={styles.container}>

          {/* //header */}
          <View style={styles.headercontainer}>

            <TouchableOpacity>
              <View style={{ paddingLeft: 10 }}>
          
              </View>
            </TouchableOpacity>

            <View>
              <Text style={styles.text}>Doctor Profile</Text>
            </View>

            <TouchableOpacity>
              <View style={{ paddingRight: 10 }}>
                <Icon size={24} color="#309699" name="bars" />
              </View>
            </TouchableOpacity>

          </View>

          {/* name designation */}

          <View style={styles.namedesignationcontainer}>

            <ImageBackground
              source={require('../../src/Assets/pic.jpg')}
              resizeMode="cover"
              style={styles.image}>
              <View style={{ height: Deviceheight / 15, width: Devicewidth / 1.9, backgroundColor: "#309699" }}>
                <Text style={{
                  color: "#fff",
                  fontSize: 15
                }}>Name</Text>
                <Text style={{
                  color: "#fff",
                  fontSize: 15
                }}>Designation</Text>
              </View>
              <View style={{
                height: Deviceheight / 25, width: Devicewidth / 4.7,
                alignItems: "center", justifyContent: "center",
                marginleft: 16
                //  backgroundColor:"yellow",
              }}>
                <StarRating
                  disabled={false}
                  emptyStar={'star-o'}
                  fullStar={'star'}
                  halfStar={'star-half-empty'}
                  iconSet={'FontAwesome'}
                  maxStars={5}
                  rating={starcount}
                  selectedStar={(rating) => setStarcount(rating)}
                  fullStarColor={"#309699"}
                  starSize={15}
                />
              </View>

            </ImageBackground>

          </View>


          {/* inputcontainer */}
          <View style={styles.inputcontainer}>

            <TextInput style={styles.name}
              placeholder={"Name"}
              placeholderTextColor={'#17bccf'}></TextInput>

            <TextInput style={styles.qualification}
              placeholder={"Qualification"}
              placeholderTextColor={'#17bccf'}></TextInput>

            <TextInput style={styles.experience}
              placeholder={"Experience"}
              placeholderTextColor={'#17bccf'}></TextInput>

            <TextInput style={styles.address}
              placeholder={"Address"}
              placeholderTextColor={'#17bccf'}></TextInput>


          </View>

          {/* footer */}

          <View style={styles.footer}>

            <View style={{
              height: Deviceheight / 18,
              width: Devicewidth / 2.7,
              // backgroundColor:"green",
              marginTop: 15,
              flexDirection: "row",
              justifyContent: "space-between"
            }}>

              <TouchableOpacity>
                <View style={{ marginTop: 10, paddingLeft: 10 }}>
                  <Icon size={24} color="black" name="whatsapp" />
                </View>
              </TouchableOpacity>


              <TouchableOpacity>
                <View style={{ marginTop: 12 }}>
                  <FoundationIcon size={24} color="black" name="mail" />
                </View>
              </TouchableOpacity>



              <TouchableOpacity>
                <View style={{ marginTop: 13 }}>
                  <Icon size={20} color="black" name="phone" />
                </View>
              </TouchableOpacity>


            </View>
            <TouchableOpacity>
              <View style={{
                height: Deviceheight / 15,
                width: Devicewidth / 2.2,
                backgroundColor: "#309699", paddingRight: 17,
                marginTop: 10
              }}>
                <Text style={{ color: "#fffeff", fontSize: 15, textAlign: "center", marginTop: 10 }}>Book an Appoitment</Text>

              </View>
            </TouchableOpacity>



          </View>




        </View>


      </ScrollView>
    </SafeAreaView>
  )
};

export default DoctorProfile;
const styles = StyleSheet.create({
  container: {
    height: Deviceheight,
    width: Devicewidth,
    backgroundColor: "#eff0f2",
    alignItems: "flex-start",
  },
  headercontainer: {
    height: Deviceheight / 7.8,
    width: Devicewidth,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: 20
  },
  text: {
    color: "#309699",
    fontSize: 18,
  },
  namedesignationcontainer: {
    height: Deviceheight / 2.98,
    width: Devicewidth,
    backgroundColor: "red",
    justifyContent: "flex-start"

  },
  inputcontainer: {
    height: Deviceheight / 2.3,
    width: Devicewidth,
    backgroundColor: "#fff",
    marginTop: 8,
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingLeft: 15



  },

  footer: {
    height: Deviceheight / 8,
    width: Devicewidth,
    backgroundColor: "#fff",
    // marginTop:10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  qualification: {
    borderWidth: 1,
    borderColor: "#309699",
    height: Deviceheight / 13,
    width: Devicewidth / 1.10,
    color: "#fff",
    alignItems: "center",
    // marginTop:10,
    paddingLeft: 10

  },
  name: {
    borderWidth: 1,
    borderColor: "#309699",
    height: Deviceheight / 13,
    width: Devicewidth / 1.10,
    color: "#fff",
    alignItems: "center",
    // marginTop:10,
    paddingLeft: 10
  },
  experience: {
    borderWidth: 1,
    borderColor: "#309699",
    height: Deviceheight / 13,
    width: Devicewidth / 1.10,
    alignItems: "center",
    color: "#fff",
    paddingLeft: 10
  },
  address: {
    borderWidth: 1,
    borderColor: "#309699",
    height: Deviceheight / 13,
    width: Devicewidth / 1.10,
    alignItems: "center",
    color: "#fff",
    paddingLeft: 10
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
})