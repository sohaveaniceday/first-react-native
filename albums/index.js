/*eslint semi: ["error", "never"]*/
//import a library to help create a component
import React from 'react'
import { Text, AppRegistry } from 'react-native'

//create a component
// eslint-disable-next-line arrow-body-style
const App = () => {
    return (
        <Text>Some Text</Text>
    )
}

//render it to the device
AppRegistry.registerComponent('albums', () => App)
