import React from 'react';
import { Text, View, StyleSheet } from "react-native";

export type TimerModes = "Focus" | "Break";

type Props = {
    timerMode: TimerModes;
}

export const TimerModeDisplay: React.FC<Props> = ({ timerMode }) => {
  return (
    <>
        <View style={Styles.container}>
            <Text style={Styles.timerModeText}>{timerMode} Time: </Text>
            <Text style={Styles.timerModeText}>{timerMode} {timerMode === "Focus" ? "breath": "rest"}</Text>
        </View>
    </>
  )
}


const Styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: "100%",
    },
    timerModeText: {
        fontSize: 25,
        color:"#fff",
        fontWeight: '800'
    }
})