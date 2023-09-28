import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type Props = {
    timerDate: Date;
}

// expot const functionName: type<proptype> = ({ prop }) => {}
export const TimerCountDownDisplay: React.FC<Props> = ({ timerDate }) => {
    return (
        <Text style={styles.timerCountDownText}>
            {timerDate.getMinutes().toString().padStart(2, "0")}:
            {timerDate.getSeconds().toString().padStart(2, "0")}
        </Text>
    )
}

const styles = StyleSheet.create({
    timerCountDownText: {
        fontSize: 40,
        color:"#fff",
        fontWeight: '800'
    }
})