import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TimerCountDownDisplay } from './Components/TimerCountDownDisplay';


const FOCUS_TIME_MIN = 0.2 * 60 * 1000;   // 12 seconds
const REST_TIME_MIN = 0.1 * 60 * 1000;    // 6 seconds
// <View> is a foundational component in React Native
// all text in React Native must be wrapped in <Text> component
// <StatusBar> is the top status bar found in mobile devices; 
//     style="auto" -> light mode or dark mode set in mobile
//

export default function App() {
    const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MIN);
    const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null)
    const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false)


    const startTimer = () => {
        const id = setInterval(() => setTimerCount((prev) => prev - 1000), 1000)
        setTimerInterval(id)
        setIsTimerRunning(true)
      }

    const pauseTimer = () => {
        if (timerInterval !== null){
            clearInterval(timerInterval)
        }
        setIsTimerRunning(false)
    }

    

    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
            <Button title={isTimerRunning ? 'Stop': 'Start'} onPress={isTimerRunning ? pauseTimer: startTimer}/>
            <TimerCountDownDisplay timerDate={ new Date(timerCount) } />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
