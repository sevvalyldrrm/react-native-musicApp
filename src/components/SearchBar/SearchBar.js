import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './SearchBar.style'

export default function SearchBar(props) {
  return (
    <View style={styles.container}>
        <TextInput 
          placeholder='Ara' onChangeText={props.onChange}
        />
    </View>
  )
}