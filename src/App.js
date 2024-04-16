import Input from './components/input';
import Button from './components/button';
import { Container, Content, Row, Column } from "./syles";
import { useState } from 'react';

const App = () =>{

  const [currentNumber, setCurrentNumber] = useState(0);
  const [firsNumber, setFirsNumber ] = useState ('0');
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '':prev}${num}`)
  };
  const[operation, setOperation] = useState('');
  


  const handleonClear = () =>{
      setCurrentNumber('0')
      setFirsNumber('0')
      setOperation('')
  };

  const handleSumNumbers = ()=> {

    if (firsNumber === '0') {
        setFirsNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else{
      const sum = Number(firsNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    
    }
  };
 const handleSubNumbers = ()=> {

    if (firsNumber === '0') {
        setFirsNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else{
      const sum = Number(firsNumber) - Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    
    }
  };

  const handMultiNumbers = ()=> {
    if (firsNumber === '0') {
        setFirsNumber(String(currentNumber))
        setCurrentNumber('0')
        setOperation('*')
    } else {
        const sum = Number(firsNumber) * Number(currentNumber)
        setCurrentNumber(String(sum))
        setOperation('')
    }
  };


  const handDivNumbers = ()=> {
    if (firsNumber === '0') {
      setFirsNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('÷')
    } else {
        const sum = Number(firsNumber) / Number(currentNumber)
        setCurrentNumber(String(sum))
        setOperation('')
    }
  };

  const handleEsquals = ()=> {
    if (firsNumber !== '0' && operation !== '' && currentNumber !== '0') {
        switch(operation){
          case '+': 
            handleSumNumbers();
            break;
          case '-':
            handleSubNumbers();
            break;
          case '*':
            handMultiNumbers();
            break;
          case '÷':
            handDivNumbers();
            break;
          default: 
            break;
        }
    };
  };

  return (
    <Container>
      <Content>
          <Input value={currentNumber}></Input>
            <Row>
              <Button label="%" onClick={() => handleAddNumber('%')}></Button>
              <Button label="÷" onClick={handDivNumbers}></Button>
              <Button label="*" onClick={handMultiNumbers}></Button>
              <Button label="c" onClick={handleonClear}></Button>
            </Row>
            <Row>
              <Button label="7" onClick={() => handleAddNumber('7')}></Button>
              <Button label="8" onClick={() => handleAddNumber('8')}></Button>
              <Button label="9" onClick={() => handleAddNumber('9')}></Button>
              <Button label="-" onClick={handleSubNumbers}></Button>
            </Row>
            <Row>
              <Button label="4" onClick={() => handleAddNumber('4')}></Button>
              <Button label="5" onClick={() => handleAddNumber('5')}></Button>
              <Button label="6" onClick={() => handleAddNumber('6')}></Button>
              <Button label="+" onClick={handleSumNumbers}></Button>
            </Row>
            <Row>
              <Button label="1" onClick={() => handleAddNumber('1')}></Button>
              <Button label="2" onClick={() => handleAddNumber('2')}></Button>
              <Button label="3" onClick={() => handleAddNumber('3')}></Button>
              <Button label="=" onClick={handleEsquals}></Button>
            </Row>
      </Content>
    </Container>
  );
}

export default App;
