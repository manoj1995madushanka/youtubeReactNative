import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Navbar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <Image style={styles.logo} source={require("./../assets/logo.png")}/>
                </View>
                <View style={styles.moveright}>
                    <TouchableOpacity>
                        <Icon name="search" size={27} style={styles.icons}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="account-circle" size={27} style={styles.icons}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding:2,
    },
    navbar:{
        //android
        marginTop:35,
        height:55,
        elevation:3,
        backgroundColor:'#fff',
        //ios
        paddingHorizontal:15,
        flexDirection:'row',
    },
    logo:{
        width:120,
        height: 23,
    },
    moveright:{
        flexDirection: 'row',
    },
    icons:{
        padding:5,
        marginLeft:15,
    },
});
