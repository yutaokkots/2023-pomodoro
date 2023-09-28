import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TimerCountDownDisplay } from './Components/TimerCountDownDisplay';
import { TimerToggleButton } from './Components/TimerToggleButton';


const FOCUS_TIME_MIN = 0.2 * 60 * 1000;   // 12 seconds
const REST_TIME_MIN = 0.1 * 60 * 1000;    // 6 seconds

// View
//   <View> is a foundational component in React Native
// Text
//   all text in React Native must be wrapped in <Text> component
// StatusBar
//   <StatusBar> is the top status bar found in mobile devices; 
//     style="auto" -> light mode or dark mode set in mobile
// Pressable - Pressable is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.

export default function App() {
    const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MIN);
    const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null);
    const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
    const [timerMode, setTimerMode] = useState<"Focus" | "Break">("Focus"); // a union-type - defines the values that this type is defined to

    useEffect(() => {
      if (timerCount == 0){
        if (timerMode === "Focus"){
          setTimerMode("Break");
          setTimerCount(REST_TIME_MIN);
        } else {
          setTimerMode("Focus");
          setTimerCount(FOCUS_TIME_MIN)
        }
        pauseTimer()
      }
    }, [timerCount])


    const startTimer = () => {
        const id = setInterval(() => setTimerCount((prev) => prev - 1000), 1000) // removes 1000 ms for every 1000 ms
        setTimerInterval(id)
        setIsTimerRunning(true)
      }

    const pauseTimer = () => {
        if (timerInterval !== null){
            clearInterval(timerInterval)
        }
        setIsTimerRunning(false)
    }


    // destructure the styles.container and add an in-line style for the backgroundColor
    return (
        <View style={{...styles.container, ...{backgroundColor: timerMode==="Break" ? "#2a9d8f":"#d95558"}}}>
            <Text>{timerMode} Time: </Text>
            <Text>{timerMode === "Focus" ? "breath": "rest"}</Text>
            <StatusBar style="auto" />
            <TimerToggleButton isTimerRunning={isTimerRunning} pauseTimer={pauseTimer} startTimer={startTimer}/>
            <TimerCountDownDisplay timerDate={ new Date(timerCount) } />

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 40,
    color:"#fff",
    backgroundColor: '#c95550',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
