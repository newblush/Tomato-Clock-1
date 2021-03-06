import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  AsyncStorage
} from 'react-native';

import Swiper from 'react-native-swiper';
import { StackNavigator } from 'react-navigation';

export default class _Swiper extends Component {

  constructor(props) {
    super(props);

  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount(){
    AsyncStorage.setItem("1","4")
    AsyncStorage.setItem("2","6")
    AsyncStorage.setItem("3","4")
    AsyncStorage.setItem("4","3")
    AsyncStorage.setItem("5","5")
    AsyncStorage.setItem("6","8")
    AsyncStorage.setItem("7","7")
  }

  render(){
    const { navigate } = this.props.navigation;
    return (
      <Swiper 
      style={styles.wrapper} 
      autoplay={true} 
      autoplayTimeout={1}
      loop={false}
      activeDot={<View style={{backgroundColor:'white', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}>
        <View style={styles.slide1}>            
            <View style={styles.center}>
                <Text style={styles.text}>Welcome to IFruit</Text>
            </View>
            <View style={styles.center}>
            </View>
        </View>
        <View style={styles.slide2}>
            <View style={styles.center}>
                <Text style={styles.text}>Focus</Text>
            </View>
            <View style={styles.center}>
            </View>
        </View>
        <View style={styles.slide3}>
            <View style={styles.center}>
                <Text style={styles.text}>And Focus</Text>
            </View>
            <View style={styles.center}>
            </View>
        </View>
        <ImageBackground
          style={{flex:1}}
          source={require('../../resource/Back_changed.png')}
          resizeMode="cover">
          <View style={styles.center}>
            <Text style={styles.text}>Sign In | Up</Text>
            <Text style={styles.text}>For Full Experience</Text>
          </View>
          <View style={styles.center}>
            <TouchableOpacity
            style={styles.button}
            onPress={() => navigate('Signin')}>
                <Text style={styles.btText}>Experience!</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button}
            onPress={() => navigate('BaseTab')}>
                <Text style={styles.btText}>Not Now!</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Swiper>
    );
  }


}

const styles = StyleSheet.create({
    wrapper: {
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#686868',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#686868',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#686868',
    },
    slide4: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#686868',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: 'white',    
        marginBottom: 8,
        opacity:0.9,
    },  
    center:{
        alignItems:'center',
        justifyContent: 'center',
        flex: 1,
    },
    btText: {
        color:  '#686868',
    },
  })