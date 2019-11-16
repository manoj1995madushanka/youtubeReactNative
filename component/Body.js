import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Image from "react-native-web/src/exports/Image";

export default class Body extends React.Component {
    render() {
        let video = this.props.video;
        return (
            <View style={styles.container}>
                <Image source={{uri:video.snippet.thumbnails.medium.url}} style={{height:200,borderRadius:5}}/>
                <View style={styles.textcontainer}>
                    <Image source={{uri:video.snippet.thumbnails.default.url}} style={styles.profilepic}/>
                    <View style={styles.innercontainer}>
                        <Text style={styles.videotitle}>{video.snippet.title}</Text>
                        <Text style={styles.videostats}>{video.snippet.channelTitle} - 100K views</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:15,
        backgroundColor: '#fff',
    },
    textcontainer:{
        flexDirection:'row',
        paddingTop:15,
        marginLeft:10,
        paddingRight:5,
    },
    videotitle:{
        fontSize:14,
        fontWeight:'bold',
        color:'#fff',
        marginRight:4,
    },
    profilepic:{
        borderWidth:2,
        height:50,
        width:50,
        borderRadius:25,
        borderColor:'#fff',
    },
    innercontainer:{
        marginLeft: 10,
        padding: 5,
    },
    videostats:{
        fontSize: 12,
        color:'#fff',
        marginTop:5,
    },
});
