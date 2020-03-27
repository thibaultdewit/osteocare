import React, {useState, useEffect} from 'react';
import HomeScreen from "./screens/HomeScreen"
import WorkoutSelectionScreen from "./screens/WorkoutSelectionScreen";
import BluetoothScreen from './screens/BluetoothScreen';
import { BleManager } from 'react-native-ble-plx';
import SessionScreen from './screens/SessionScreen';

export default function MainContainer() {

    console.log('MAIN CONTAINER')

    duration = 30 

    const [screen, setScreen] = useState('home'); 
    const [deviceConnected, setDeviceConnected] = useState(false)
    const [deviceObject, setDeviceObject] = useState()
    const [timeLeft, setTimeLeft] = useState(duration)
    const [timerOn, setTimerOn] = useState(false)
    const [bodyPart, setBodyPart] = useState()

    useEffect(() => {
        console.log('use effect nothing')
    })

    useEffect(() => {
        console.log('use effect empty array')
    }, [])

    useEffect(() => {
        console.log('use effect timerOn')
        var count = timeLeft
        if(timerOn) {
            this.intervalObject = setInterval(() => {
                count--
                setTimeLeft(count)
                if(count == 0) {
                    clearInterval(this.intervalObject)
                    setTimeLeft(duration)
                    setTimerOn(false)
                }
              }, 1000);
        } else if(!timerOn) {
            clearInterval(this.intervalObject)
        }
    }, [timerOn]);

    const scanDevices = () => {

    }

    const pairDevice = () => {

    }

    const startTimer = () => {
        setTimerOn(true)
    }

    const pauseTimer = () =>  {
        setTimerOn(false)
    }

    const stopTimer = () => {
        setTimerOn(false)
        setTimeLeft(duration)
    }

    const navigateBack = () => {
        setScreen('home')
    }

    const workoutSelection = () => {
        setScreen('workoutselection')
    }

    const startBluetooth = () => {
        setScreen('bluetooth')
    }

    const navigateSession = () => {
        setScreen('session')
    }

    switch(screen) {
        case 'home':
            return (<HomeScreen 
                timeLeft={timeLeft} timerOn={timerOn} 
                workoutSelection={workoutSelection} startBluetooth={startBluetooth} 
                navigateSession={navigateSession} />)
        case 'workoutselection':
            return (<WorkoutSelectionScreen 
                bodyPart={bodyPart} navigateSession={navigateSession} navigateBack={navigateBack} />)
        case 'bluetooth':
            return (<BluetoothScreen
                scanDevices={scanDevices} pairDevice={pairDevice}
                navigateBack={navigateBack}
                deviceConnected={deviceConnected} deviceObject={deviceObject} />)    
        case 'session':
            return (<SessionScreen 
                duration={duration} timerOn={timerOn} stopTimer={stopTimer} 
                pauseTimer={pauseTimer} startTimer={startTimer} timeLeft={timeLeft} 
                navigateBack={navigateBack}/>)  
    }
}