import { View, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import music_data from './music_data.json'
import SongCard from './components/SongCard/SongCard'
import SearchBar from './components/SearchBar'


export default function App() {
  const [list , setList] = useState(music_data)
 
  const renderSong = ({item}) => <SongCard song={item}/>
  const renderSeparator = () => <View style={styles.separator}/>

  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });

    setList(filteredList);
  }
  return (
    <SafeAreaView styles={styles.container}>
      <SearchBar  onChange={handleSearch}/>
       <FlatList 
        keyExtractor={item => item.id}
        data={list} 
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeparator}
        />
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