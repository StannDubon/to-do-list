import { StyleSheet, Text, View, TextInput, Button, Touchable, TouchableOpacity } from 'react-native';

export default function Card({ text }) {
    return (
        <View style={cards.Card}>
            <Text style={cards.Text}>{text}</Text>
            <TouchableOpacity style={cards.Button}><Text style={cards.ButtonText}>X</Text></TouchableOpacity>
        </View>
    );
}

const cards = StyleSheet.create({
    Card: {
        flexDirection: 'row',
        width: '85%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text: {
        flexWrap: 'wrap',
        width: '90%',
        paddingLeft: 10
    },
    Button: {
        flexWrap: 'wrap',
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonText: {
        color: 'red',
        fontWeight: 'bold'
    }
});