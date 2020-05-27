import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {

  const [userSelectedNumber, setUserSelectedNumber] =useState();
   const startGameHandler = (selectedNumber) =>{
     setUserSelectedNumber(selectedNumber);
   }
   

  let content = <StartGameScreen onStartGame={startGameHandler}/>;
  if(userSelectedNumber){
    content=<GameScreen userChoice={userSelectedNumber}/>
  }


  return (
    <View style={styles.container}>
      <Header title='Guess a Number'/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
screen:{
  flex:1
}
});
