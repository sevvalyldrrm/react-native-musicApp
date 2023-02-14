import { StyleSheet } from 'react-native'

export const styles= StyleSheet.create({
    container : {
        backgroundColor: '#E8E2E2',
        padding: 10,
        flexDirection: 'row'
    },
    image : {
        width: 100,
        height: 100,
        borderRadius: 50
    },

    inner_container:{
        padding: 10,
        flex: 1,
        justifyContent: 'center'
    },

    title:{
        color: 'black',
        fontSize : 25
    },

    artist:{
        fontWeight : 'bold',
    },
    
    year:{
        color: 'grey',
        marginLeft: 10,
        fontSize : 12,
    },
    info_container:{
        flexDirection: 'row'
    },
    soldout_container: {
        
    },

    soldout_title: {

    }
})