import * as React from "react";
import styled from "styled-components";
import { Button, Input } from "../../../common/components/elements";
import { Flex } from "../../../common/components/elements/containers";

const ButtonInputWrapper = styled(Flex)<IButtonInputProps>`
  width: 32rem;
  background: ${({ theme }) => theme.bg.primary};
  height: 3.2rem;
  border-radius: 1.6rem;
  position: relative;
  transition: all ease-in .9s .3s;
  transform: ${({show}) => show ? "translateY(-4rem)": "translateY(0)" };

  @media screen and (max-width: ${({theme}) => theme.screen.phone}){
     width: 95vw;
    }
`;

const StyledInput = styled(Input)`
  width: 70%;
  height: 100%;
  position: absolute;
  left: 0;
  padding-left: 2rem;
`;

const StyledButton = styled(Button)`
  width: 40%;
  height: 102%;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.bg.button_primary};
  color: ${({ theme }) => theme.text.primary};
  position: absolute;
  right: -1px;

  @media screen and (max-width: ${({theme}) => theme.screen.phone}){
     font-size: .65rem;
    }
`;

export interface IButtonInputProps {
  show: boolean
}

export function ButtonInput({show}: IButtonInputProps) {
  return (
    <ButtonInputWrapper show={show} >
      <StyledInput type="text" placeholder="Enter your email address" />
      <StyledButton>JOIN OUR WAITING LIST</StyledButton>
    </ButtonInputWrapper>
  );
}
