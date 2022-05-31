import * as React from "react";
import styled from "styled-components";
import { Button, Input } from "../../../common/components/elements";
import { Flex } from "../../../common/components/elements/containers";

const ButtonInputWrapper = styled(Flex)`
  width: 32rem;
  background: ${({ theme }) => theme.bg.primary};
  height: 3.2rem;
  border-radius: 1.6rem;
  position: relative;
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
  height: 100%;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.bg.button_primary};
  color: ${({ theme }) => theme.text.primary};
  position: absolute;
  right: -1px;
`;

export interface IButtonInputProps {}

export function ButtonInput(props: IButtonInputProps) {
  return (
    <ButtonInputWrapper>
      <StyledInput type="text" placeholder="Enter your email address" />
      <StyledButton>JOIN OUR WAITING LIST</StyledButton>
    </ButtonInputWrapper>
  );
}
