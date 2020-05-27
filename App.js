import React, { useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';

export default function App() {

  const [userSelectedNumber, setUserSelectedNumber] = useState();
  const [noOfRounds, setnoOfRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserSelectedNumber(selectedNumber);
    setnoOfRounds(0);
  }

  const gameOverHandler = (rounds) => {
    setnoOfRounds(rounds);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userSelectedNumber && noOfRounds <= 0) {
    content = <GameScreen
      userChoice={userSelectedNumber}
      onGameOver={gameOverHandler}
    />
  }
  else if (noOfRounds > 0) {
    content = <GameOver
      finalNumber={userSelectedNumber}
      TotalRound={noOfRounds}
      startAgain={startGameHandler}
    />
  }



  return (
    <View style={styles.container}>
      <Header title='Guess a Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
