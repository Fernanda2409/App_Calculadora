import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { evaluate, sin, cos, tan, sqrt, log, exp } from 'mathjs';

const CalculatorScreen = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      const evaluatedResult = evaluate(input);
      setResult(evaluatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  
  const handleTrigPress = (func) => {
    setInput(input + `${func}(`); 
  };

  const handleSqrtPress = () => {
    setInput(input + `sqrt(`); 
  };

  const handleExpPress = () => {
    setInput(input + `exp(`); 
  };

  const handleLogPress = () => {
    setInput(input + `log(`); 
  };

  const renderButton = (title, onPress, style = {}) => (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.row}>
        {renderButton('C', handleClear, styles.functionButton)}
        {renderButton('DEL', handleDelete, styles.functionButton)}
        {renderButton('(', () => handlePress('('))}
        {renderButton(')', () => handlePress(')'))}
      </View>
      <View style={styles.row}>
        {renderButton('sin', () => handleTrigPress('sin'), styles.functionButton)}
        {renderButton('cos', () => handleTrigPress('cos'), styles.functionButton)}
        {renderButton('tan', () => handleTrigPress('tan'), styles.functionButton)}
        {renderButton('/', () => handlePress('/'), styles.operatorButton)}
      </View>
      <View style={styles.row}>
        {renderButton('7', () => handlePress('7'))}
        {renderButton('8', () => handlePress('8'))}
        {renderButton('9', () => handlePress('9'))}
        {renderButton('*', () => handlePress('*'), styles.operatorButton)}
      </View>
      <View style={styles.row}>
        {renderButton('4', () => handlePress('4'))}
        {renderButton('5', () => handlePress('5'))}
        {renderButton('6', () => handlePress('6'))}
        {renderButton('-', () => handlePress('-'), styles.operatorButton)}
      </View>
      <View style={styles.row}>
        {renderButton('1', () => handlePress('1'))}
        {renderButton('2', () => handlePress('2'))}
        {renderButton('3', () => handlePress('3'))}
        {renderButton('+', () => handlePress('+'), styles.operatorButton)}
      </View>
      <View style={styles.row}>
        {renderButton('0', () => handlePress('0'))}
        {renderButton('.', () => handlePress('.'))}
        {renderButton('√', handleSqrtPress, styles.functionButton)}
        {renderButton('=', handleEqual, styles.equalButton)}
        
      </View>
      <View style={styles.row}>
        {renderButton('e', handleExpPress, styles.functionButton)}
        {renderButton('log', handleLogPress, styles.functionButton)}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    justifyContent: 'center',
  },
  display: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  inputText: {
    color: '#000000',
    fontSize: 40,
  },
  resultText: {
    color: '#ba46e9',
    fontSize: 30,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ccc4e5',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
  },
  operatorButton: {
    backgroundColor: '#bfbfd8',
  },
  functionButton: {
    backgroundColor: '#C3B1E1',
  },
  equalButton: {
    backgroundColor: '#c162ff',
  },
});

export default CalculatorScreen;
