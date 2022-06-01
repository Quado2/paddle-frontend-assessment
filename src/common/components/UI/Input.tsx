import * as React from "react";
import styled from "styled-components";
import { Text1 } from "../elements";

export interface IInputProps {
  title: string;
  placeholder: string;
  name: string;
  type?: string;
}

const InputWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2.5rem;

  .input-item {
    width: 100%;
    border-radius: 0.7rem;
    background-color: ${({ theme }) => theme.bg.primary};
    border: none;
    outline: none;
    padding: 2rem;
    margin-top: 1rem;

    @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
    padding: 1rem;
    font-size: .8rem;
  }
  }

  input {
    height: 5rem;

    @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
   height: 3rem
  }    
  }

  textarea {
    height: 10rem;
  }
`;

export function Input({ name, title, placeholder, type }: IInputProps) {
  return (
    <InputWrapper>
      <label htmlFor={name}>
        <Text1>{title}</Text1>
      </label>
      <input
        className="input-item"
        type={type ? type : "text"}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
}

export function TextArea({ name, title, placeholder }: IInputProps) {
  return (
    <InputWrapper>
      <label htmlFor={name}>
        <Text1>{title}</Text1>
      </label>
      <textarea  className="input-item" placeholder={placeholder}></textarea>
    </InputWrapper>
  );
}
