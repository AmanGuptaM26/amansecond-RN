import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Cards';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = (inputValue) => {
        //if(value)
        //return;
        console.log(inputValue);
        setEnteredValue(inputValue.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
        setSelectedNumber();
        Keyboard.dismiss();
    };

    const confirmInputHandler = () => {
        const choosenNumber = parseInt(enteredValue);
        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 999) {
            Alert.alert('Invalid Number!', 'Choose between 1 to 999 only',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(choosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

  //  const startGameHandler = () => {
        // Alert.alert('So ja moti bains!!!', 'Bains hoke ullo ki jase kyu jagti hai raat ko',
        //     [{ text: 'Okay main bains hun', style: 'destructive', onPress: resetInputHandler }])


  //  };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryCard}>
                <Text>
                    Choosen Number
                </Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="Start Game" onPress={()=>props.onStartGame(selectedNumber)} />
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
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
                            <Button title='Reset' color={Colors.redbutton} onPress={resetInputHandler} />
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
    },
    summaryCard: {
        marginTop: 20,
        alignItems: "center"
    }
});

export default StartGameScreen;