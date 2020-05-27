import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import Card from '../components/Cards';
import NumberContainer from '../components/NumberContainer';

//find number by logic
const getRandomComputerGuess = (min, max, selectedNumber) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    let rndNumber = Math.floor((Math.random() * (max - min)) + min);
    if (rndNumber === selectedNumber) {
        return getRandomComputerGuess(min, max, selectedNumber);
    }
    return rndNumber;
};

const GameScreen = (props) => {

    const [computerGuess, setComputerGuess] = useState(getRandomComputerGuess(1, 100, props.userChoice));
    const [rounds, setRound] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const { userChoice, onGameOver } = props;
    useEffect(() => {
        if (computerGuess === userChoice) {
            onGameOver(rounds);
        }
    }, [userChoice, computerGuess, onGameOver]);

    const getNewGuessNumber = (direction) => {

        if ((direction === 'low' && computerGuess < props.userChoice) || (direction === 'high' && computerGuess > props.userChoice)) {
            Alert.alert("Seriously!!", "Are you kidding me!!!!!", [{ text: 'Sorry', style: 'cancel' }]);
            return;
        }

        if (direction === 'low') {
            currentHigh.current = computerGuess;
        }
        else {
            currentLow.current = computerGuess;
        }

        setComputerGuess(getRandomComputerGuess(currentLow.current, currentHigh.current, computerGuess));
        setRound(CurRounds => CurRounds + 1);
    };

    return (
        <View style={styles.screen}>
            <Text>   Computer Guess:</Text>
            <NumberContainer>{computerGuess}</NumberContainer>
            <Card style={styles.cardCss}>
                <Text>If not your number then select any of your number</Text>
                <View style={styles.buttonContainer}>
                    <Button title='Lower' onPress={getNewGuessNumber.bind(this, 'low')} />
                    <Button title='Higher' onPress={getNewGuessNumber.bind(this, 'high')} />
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        // flex:1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    cardCss: {
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;