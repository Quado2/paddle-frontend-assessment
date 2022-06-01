import * as React from 'react';
import styled from 'styled-components';

import { useRef } from 'react';

const InputWrapper = styled.div`
 
  width: 11.7rem;
  position: relative;
  margin: 1rem;

  @media screen and (max-width: ${({theme}) => theme.screen.phone}){
     width: 80vw;
     margin: 1.5rem;
    }

  div{
    width: 100%;
    height: 2px;
    background-color: ${({theme}) => theme.bg.muted};
    position: absolute;
    bottom: 0;
    opacity: 0.27;
    border-radius: 1px;
  }

  input{
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    padding: 0 1rem;
    color: ${({theme}) => theme.text.primary}
    
  }

  input:active{
    border: none;
    outline: none
  }

  label{
    color: ${({theme}) => theme.text.muted};
    position: absolute;
    bottom: .4rem;
    left: 1rem;
    font-size: .8rem;
    cursor: auto;
    transition: all .3s ease-in-out;
  }

  input:focus + label{
   font-size: .7rem;
   bottom: 1.5rem;
  }
`

export interface IInputProps {
  name?: string;
  label: string;
}

export  function Input ({name,label}: IInputProps) {
  const inputRef = useRef<any>(null)
  
  function onLabelClick(){
    inputRef?.current?.focus();
  }
  return (
    <InputWrapper>
      <input ref={inputRef} type="text" name={name} />
      <label onClick={onLabelClick} htmlFor={name}>{label}</label>
      <div></div>
    </InputWrapper>
  );
  }