
import styled from 'styled-components';
const ButtonS = styled.button `
font: inherit;
cursor: pointer;
background-color: #77002e;
color: white;
padding: 0.5rem 1.5rem;
border: 1px solid #77002e;
border-radius: 4px;
font-weight: bold; 
&:hover {
  background-color: #a50e48;
  border-color: #a50e48;
}  
&:active {
  background-color: #a50e48;
  border-color: #a50e48;
}
&:disabled {
  background-color: #e6b7c8;
}
`
const MyDiv = styled.div `
margin-top: 1rem;
text-align: right;
`


function Button (props) {
    return (
        <MyDiv>
           <ButtonS disabled={props.isDisable}>{props.text}</ButtonS>
        </MyDiv>
    );
}

export default Button; 