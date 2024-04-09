import { InputContainer } from "./syles";



const Input = ({value}) => {
    return (
      <InputContainer>
        <input disabled value={value}></input>
      </InputContainer>
    );
  }
  
  export default Input;
  