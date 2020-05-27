import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from '../components/Cards';
import colors from '../constants/Colors';

const GameOver = (props) => {
    return (
        <Card style={styles.card}>
            <View style={styles.screen}>
                <View>
                    <Text style={styles.text}><Text style={styles.gameOver}>!!! Game Over !!!</Text></Text>
                </View>
                <View>
                    <Text style={styles.text}>
                        You Number is {props.finalNumber}, guessed by computer in {props.TotalRound} guess.
                    </Text>
                </View>

                <View style={styles.button}>
                    <Button title="Start Again" onPress={() => props.startAgain} />
                </View>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    screen: {
        //flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    text: {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 22,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 5
    },
    card:{
       // marginTop:200,
       
    },
    gameOver:{
        color:'red',
    }
});

export default GameOver;