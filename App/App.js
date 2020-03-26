import React, { Component } from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Styles } from "./src/common";

const instructions = Platform.select({
  android: 
    "Double tap R on your keyboard to reload, \n"+
    "Shake or press menu button for dev menu"
});

type Props = {};

export default class App extends Component<Props>{
  render(){
    return(
      <View style={Styles.container}>
        <View style={Styles.top}>
          <View></View>
        </View>
        <View style={Styles.bottom}>

        </View>
      </View>

    );
  }
}
