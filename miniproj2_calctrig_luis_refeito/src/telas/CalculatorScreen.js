import React from 'react';
import { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './ScreenStyle';
import Basica from '../componentes/Basica/Basica';
import Trigonometria from '../componentes/Trigonometria/Trigonometria';
import Aritmetica from '../componentes/Aritmetica/Aritmetica';
import  CalculatorLogic  from './CalculatorLogic';
export default ({ orientation }) => {
  const [atualNumero, setAtualNumero] = useState('');
  const [ultimoNumero, setUltimoNumero] = useState('');
  const [trigonometricFunction, setTrigonometricFunction] = useState('');
  const [aritmetica, setAritmetica] = useState('DEC');

  function handleInputBasic(buttonPressed) {
    switch (buttonPressed) {
      case '+':
      case '-':
      case 'x':
      case '/':
        setAtualNumero(atualNumero + ' ' + buttonPressed + ' ');
        return;
      case 'DEL':
        setAtualNumero(atualNumero.substring(0, atualNumero.length - 1));
        return;
      case 'LIMPAR':
        setUltimoNumero('');
        setAtualNumero('');
        setAritmetica('DEC');
        setTrigonometricFunction('');
        return;
      case '=':
        setUltimoNumero(atualNumero + ' = ');
        setAtualNumero(
          CalculatorLogic(
            atualNumero,
            trigonometricFunction,
            aritmetica
          )
        );
        return;
      case '+/-':
        setAtualNumero((-1 * atualNumero).toString());
        return;
    }

    setAtualNumero(atualNumero + buttonPressed);
  }

  function handleInputTrigonometrica(buttonPressed) {
    if (buttonPressed != trigonometricFunction)
      setTrigonometricFunction(buttonPressed);
    else setTrigonometricFunction('');
  }

  function handleInputArtimetica(buttonPressed) {
    setAritmetica(buttonPressed);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.results}>
          <Text style={styles.historyText}>{ultimoNumero}</Text>
          <Text style={styles.resultText}>{atualNumero}</Text>
          <Text style={styles.historyText}>
            {trigonometricFunction} {aritmetica}
          </Text>
        </View>
        <Aritmetica action={handleInputAritmetica} />
        <Trigonometria action={handleInputTrigonometrica} />
        <Basica action={handleInputBasic} />
      </View>
    </>
  );
};
