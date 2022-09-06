import React from "react"
import { Image, Text, View } from "react-native"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const ForecastItem = () => {
    return (
        <View>
            <Text>Terça feira</Text>
            <Text>14/09</Text>
            <Text>19°</Text>
            <Text>24°</Text>
            <FontAwesomeIcon icon={'cloud-sun'} />
        </View>
    )
}

export default ForecastItem