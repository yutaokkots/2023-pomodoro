import React from "react";
import { Button, Pressable, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
type Props = {
    isTimerRunning: boolean,
    pauseTimer: () => void,
    startTimer: () => void
}
export const TimerToggleButton: React.FC<Props> = ({ isTimerRunning, pauseTimer, startTimer}) => {
    return (
        <Pressable onPress={isTimerRunning ? pauseTimer: startTimer}>
            <View style={styles.container}>
                <FontAwesome 
                    name={isTimerRunning? 'pause': 'play' } 
                    size={110} 
                    style={styles.icon}
                    />
            </View>
        </Pressable>
        
    )
}

const styles = StyleSheet.create({
    icon: {
        alignSelf: "center",
        color: "#fff"
    },
    container: {
        borderWidth: 5,
        width: 200,
        height: 200,
        borderRadius: 250/2,
        justifyContent: "center",
        borderColor: '#fff',
        marginVertical: 50
    }
})


// <Button title={isTimerRunning ? 'Stop': 'Start'} onPress={isTimerRunning ? pauseTimer: startTimer}/>
