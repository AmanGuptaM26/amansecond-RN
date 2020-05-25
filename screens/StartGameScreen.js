import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start New Game</Text>
            <View style={styles.inputContainer}>
                <Text>Select a number</Text>
                <TextInput placeholder="Text" />
                <View style={styles.buttonContainer}>
                    <Button title='Reset' color='red' onPress={() => {props.text}} />
                    <Button title='Confirm' onPress={() => {props.text}} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
       // flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation:5,
        backgroundColor:'white',
        padding:10,
        borderRadius:10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
});

export default StartGameScreen;