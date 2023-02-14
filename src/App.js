import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import music_data from './music_data.json'
import SongCard from './components/SongCard/SongCard'

export default function App() {
  const renderSong = ({item}) => <SongCard song={item}/>
  const renderSeparator = () => <View style={styles.separator}/>
  return (
    <SafeAreaView styles={styles.container}>
      <View styles={styles.container}>
        <FlatList 
        keyExtractor={item => item.id}
        data={music_data} 
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </SafeAreaView>
  )
}


export const styles = StyleSheet.create({
  container : {
    flex : 1
  },
  separator: {
    borderWidth: 1,
    borderColor : '#CACACA',
  }
});