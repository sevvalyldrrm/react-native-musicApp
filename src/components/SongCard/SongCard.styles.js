import { StyleSheet } from 'react-native'

export const styles= StyleSheet.create({
    container : {
        flex : 1,
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
        fontSize : 25,

    },

    artist:{
        fontWeight : 'bold',
        
    },
    
    year:{
        color: 'grey',
        marginLeft: 10,
        fontSize : 12,
        flex : 1,
    },
    info_container:{
        flexDirection: 'row',
        flex : 1,
        alignItems : 'center'
    },
    soldout_container: {
        borderWidth : 1,
        borderColor: 'red',
        padding : 5,
        borderRadius: 5,
        
    },

    soldout_title: {
        color: 'red',
        fontSize : 12
    },

    body_container:{
        flexDirection : 'row'
    }
})