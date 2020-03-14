import * as WebBrowser from 'expo-web-browser';
import React, {useState, useEffect} from 'react';
import {View, Text, Button, ShadowPropTypesIOS} from 'react-native';
import HomeScreen from "./screens/HomeScreen"
import WorkoutSelectionScreen from "./screens/WorkoutSelectionScreen";
import BluetoothScreen from './screens/BluetoothScreen';
import { BleManager } from 'react-native-ble-plx';
import SessionScreen from './screens/SessionScreen';

export default function MainContainer() {

    const [screen, setScreen] = useState('home'); 
    const [sessionActive, setSessionActive] = useState(false)
    const [deviceConnected, setDeviceConnected] = useState(false)

    manager = new BleManager();

    // insert scan and connect function here


    const navigateBack = () => {
        setScreen('home')
    }

    const workoutSelection = () => {
        setScreen('workoutselection')
    }

    const startBluetooth = () => {
        setScreen('bluetooth')
    }

    const startSession = () => {
        setSessionActive(true)
        setScreen('session')
    }

    const navigateSession = () => {
        setScreen('session')
    }



    switch(screen) {
        case 'home':
            return (<HomeScreen sessionActive={sessionActive} workoutSelection={workoutSelection} startBluetooth={startBluetooth} navigateSession={navigateSession} />)
        case 'workoutselection':
            return (<WorkoutSelectionScreen startSession={startSession} navigateBack={navigateBack} />)
        case 'bluetooth':
            return (<BluetoothScreen navigateBack={navigateBack}/>)    
        case 'session':
            return (<SessionScreen navigateBack={navigateBack}/>)  
    }
}