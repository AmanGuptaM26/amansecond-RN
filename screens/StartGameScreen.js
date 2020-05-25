import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Cards';
import Colors from '../constants/Colors';
import Input from '../components/Input';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed]= useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
           
    const numberInputHandler = (inputValue) => {
        //if(value)
        //return;
        console.log(inputValue);
        setEnteredValue(inputValue.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
    };

    const confirmInputHandler = () => {
        const choosenNumber =parseInt(enteredValue);
        if(choosenNumber === NaN || choosenNumber<=0 || choosenNumber>999){
        //Alert.alert('Invalid Number!')
            return;
        }
        setConfirmed(true);
        setSelectedNumber(choosenNumber);
        setEnteredValue('');
    };
    
    let confirmedOutput;

    if(confirmed)
    {
    confirmedOutput =<Text>Choosen Number: {selectedNumber}</Text>
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start New Game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <Input
                      //  placeholder="Test"
                        maxLength={3}
                        keyboardType="number-pad"
                        autoCorrect={false}
                        blurOnSubmit
                        autoCapitalize='none'
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    ></Input>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonStyle}>
                            <Button title='Reset' color={Colors.redbutton} onPress={ resetInputHandler } />
                        </View>
                        <View style={styles.buttonStyle}>
                            <Button title='Confirm' color={Colors.bluebutton} onPress={confirmInputHandler} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
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
    buttonStyle: {
        width: '45%'
    }
});

export default StartGameScreen;