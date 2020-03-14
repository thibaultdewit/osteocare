import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import auth, { firebase } from '@react-native-firebase/auth';

import AppNavigator from './navigation/AppNavigator';

export default function App(props) {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
 
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
 
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
 
  if (initializing) return null;

  if (false) {
    return (
      <View style={styles.loginContainer}>
        <View style={styles.headerTextView}>
          <Text style={styles.headText}>Welcome to OsteoCare</Text>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#2aafc0"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#2aafc0"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  } else if(loading) {
    return (
      <View style={{flex:1, justifyContent : 'center', alignItems : 'center'}}><ActivityIndicator size='large'/></View>
    )
  }
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer : {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems : 'center', 
    justifyContent : 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerTextView : {
    paddingBottom : 40
  },
  headText : {
    fontSize : 24
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    borderColor : '#2aafc0',
    borderWidth : 1,
    backgroundColor:"#ffffff",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:14
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#2aafc0",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  }
});
