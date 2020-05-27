import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input =props =>{
return <TextInput {...props}  style={{...styles.input,...props.style}} />
};

const styles = StyleSheet.create({
  input:{
      height:30,
      borderColor:'grey',
      borderBottomWidth:1,
      marginVertical:10,
      width:90
  }
});

export default Input;