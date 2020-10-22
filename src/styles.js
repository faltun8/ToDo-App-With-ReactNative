import {Dimensions, StyleSheet} from 'react-native'

const color = '#ff9b31'

const main = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: '#303e45',
    },
    banner: {
        flexDirection: 'row',
        justifyContent:'space-between',
        padding: 10,
        alignItems: 'center'

    },todoText: {
        fontSize: 50,
        fontWeight: 'bold',
        color,
    },
    todoDoneCount: {
        fontSize: 35,
        color:'green',
        margin:10,
    },
    todoUndoneCount: {
        fontSize: 35,
        color: 'red',
        margin: 10
    },
    emptyComponent: {
        color: 'white',
        textAlign: 'center'
    }
})

const todo_input = StyleSheet.create({
    inputContainer: {
        backgroundColor:'#e0e0e0',
        padding:10,
        margin:10,
        borderRadius: 5,
    },
    container: {
        backgroundColor: color,
        padding:10,
        margin:10,
        borderRadius: 5,
    },
    buttonContainer: {
        backgroundColor:'#4a636e',
        padding:10,
        margin:10,
        borderRadius: 5,
        alignSelf:'center',
        width: Dimensions.get('window').width/2.5
    },
    buttonText: {
        color:'white',
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

const todo_card = StyleSheet.create({
    container: {
        backgroundColor: '#a7b6bd',
        padding: 8,
        margin: 5,
        borderRadius: 7,
    },
    text: {
        fontSize: 18,
    }
})

export {main, todo_input, todo_card}