import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Navbar from "./component/Navbar";
import Tabbar from "./component/Tabbar";
import Body from "./component/Body";
import Data from "./component/Data.json";

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Navbar/>
            <ScrollView>
                /*<Body video={Data.items[0]}/>*/
            </ScrollView>
          <Tabbar/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
