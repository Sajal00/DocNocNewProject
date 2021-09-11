import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Modal,  } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

const myModal = (props) => {
    const [modal, Setmodal] = useState(false);
    const { modalProps, SetmodalProps } = props;

    const { navigation } = props

    useEffect(() => {
        Setmodal(modalProps)
    }, [])
    

    return (
        <View style={{ alignItems: 'center' }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalProps}
                onRequestClose={() => {
                    Setmodal(!modal)
                }}>
                <>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center' }} >
                        <View style={{backgroundColor: '#ffffff', width: '90%', height: Deviceheight / 2, marginHorizontal: '10%', borderRadius: 5, padding: '3%' }}>
                        <TouchableOpacity style={{ alignItems: 'flex-end', marginTop: 5, marginRight: 5 ,width:Devicewidth/15,alignSelf:'flex-start'}}
                                onPress={() => props.CloseModalProps()}
                                activeOpacity={0.5}
                            >
                                  <Icon size={24} color="#000" name="close" />
                            </TouchableOpacity>
                            
                            <Text>hello</Text>

                        </View>
                    </View>
                </>
            </Modal>
        </View>
    )
}

export default myModal;