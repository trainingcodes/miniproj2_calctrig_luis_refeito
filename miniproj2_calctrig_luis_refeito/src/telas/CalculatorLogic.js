const CalculatorLogic = (atualNumero, trigonometricFunction, aritmetica) => {
    console.log(atualNumero);
    const splitNumbers = atualNumero.split(' ');
    let operador = ' ';
    let realNumero = 0;
    let novoNumero = parseFloat(splitNumbers[0].toString(10));
    let index = 1;
    while (index <= splitNumbers.length - 1) {
      operador = splitNumbers[index];
      realNumero = parseFloat(splitNumbers[index + 1]);
  
      if (!isNaN(actualNumber)) {
      
        switch (operador) {
          case '+':
            novoNumero = novoNumero + realNumero;
            break;
          case '-':
            novoNumero = novoNumero - realNumero;
            break;
          case 'x':
            novoNumero = novoNumero * realNumero;
            break;
          case '/':
            novoNumero = novoNumero / realNumero;
            break;
          case '^':
            novoNumero = Math.pow(novoNumero, realNumero);
            break;
          case '%':
            novoNumero = (novoNumero / 100) * realNumero;
            break;
        }
  
        index = index + 2;
      } else {
        return;
      }
    }
  
    novoNumero = handleTrigonometric(novoNumero);
  
    return handleAritmetica(novoNumero);
  
    function handleTrigonometric(numeroRecebe) {
      switch (trigonometricFunction) {
        case 'SIN':
          return (numeroRecebe = Math.sin(numeroRecebe));
        case 'COS':
          return (numeroRecebe = Math.cos(numeroRecebe));
        case 'TG':
          return (numeroRecebe = Math.tan(numeroRecebe));
        default:
          return numeroRecebe;
      }
    }
  
    function handleAritmetica(numeroRecebe) {
      switch (aritmetica) {
        case 'DEC':
          return numeroRecebe.toString();
        case 'BIN':
          return numeroRecebe.toString(2);
        case 'OCT':
          return numeroRecebe.toString(8);
        case 'HEX':
          return numeroRecebe.toString(16);
      }
    }
  };
  
  export default CalculatorLogic;
  