import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Card from '../components/Cards';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start New Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number</Text>
                <TextInput placeholder="Text" />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonStyle}>
                        <Button title='Reset' color='red' onPress={() => { props.text }} />
                    </View>
                    <View style={styles.buttonStyle}>
                        <Button title='Confirm' onPress={() => { props.text }} />
                    </View>
                </View>
            </Card>
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

    },
    buttonContainer: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    buttonStyle:{
        width:'45%'
    }
});

export default StartGameScreen;