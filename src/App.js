import Input from './components/input';
import Button from './components/button';
import { Container, Content, Row, Column } from "./syles";
import { useState } from 'react';

const App = () =>{

  const [currentNumber, setCurrentNumber] = useState(0);

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${num}${prev}`)

  };
  return (
    <Container>
      <Content>
          <Input value={currentNumber}></Input>
            <Row>
              <Button label="%" onClick={() => handleAddNumber('%')}></Button>
              <Button label="÷" onClick={() => handleAddNumber('÷')}></Button>
              <Button label="x" onClick={() => handleAddNumber('x')}></Button>
              <Button label="c" onClick={() => handleAddNumber('c')}></Button>
            </Row>
            <Row>
              <Button label="7" onClick={() => handleAddNumber('7')}></Button>
              <Button label="8" onClick={() => handleAddNumber('8')}></Button>
              <Button label="9" onClick={() => handleAddNumber('9')}></Button>
              <Button label="-" onClick={() => handleAddNumber('-')}></Button>
            </Row>
            <Row>
              <Button label="4" onClick={() => handleAddNumber('4')}></Button>
              <Button label="5" onClick={() => handleAddNumber('5')}></Button>
              <Button label="6" onClick={() => handleAddNumber('6')}></Button>
              <Button label="+" onClick={() => handleAddNumber('+')}></Button>
            </Row>
            <Row>
              <Button label="1" onClick={() => handleAddNumber('1')}></Button>
              <Button label="2" onClick={() => handleAddNumber('2')}></Button>
              <Button label="3" onClick={() => handleAddNumber('3')}></Button>
              <Button label="=" onClick={() => handleAddNumber('=')}></Button>
            </Row>
      </Content>
    </Container>
  );
}

export default App;
