

import styled from 'styled-components';
import React from 'react';
const Control = styled.div `
margin-bottom: 0.5rem;
position: relative;
`
const Label = styled.label `
display: block;
font-weight: bold;
margin-bottom: 0.5rem;
`
const Input = styled.input `
display: block;
font: inherit;
border-radius: 4px;
border: 1px solid #ccc;
padding: 0.25rem;
width: 100%;
`
const InputText = props => {

    return(
        <Control>
            <Label htmlFor={props.name}>{props.label}</Label>
            <i className={props.eyeOff} onClick={props.onclick}></i>
           <Input type={props.type} id={props.id} name={props.name}  onChange={props.onChange}></Input>
            <div>{props.errorMsg}</div>
        </Control>
    );
};

export default InputText;

