import React from "react"
import { Text, View } from "react-native"
import { MainDayProps } from "./interface"
import Styles from "./styles"

const MainDay = ({temperature, city, date}: MainDayProps) => {
    return (
        <View>
            <Text style={Styles.mainDayTemperature}> { temperature } </Text>
            <Text style={Styles.mainDayCity}> { city } </Text>
            <Text style={Styles.mainDayDate}> { date.toString() } </Text>
        </View>
    )
}

export default MainDay