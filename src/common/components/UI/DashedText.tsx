import * as React from "react";
import styled from "styled-components";
import { Text1 } from "../elements";

interface DashProps {
  height?: string;
  width?: string;
  color?: string;
}
export interface IDashedTextProps {
  text: string;
  dashHeight?: string;
  dashWidth?: string;
  color?: string;
}

const DashedWrapper = styled.div<DashProps>`

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    height: ${({ height }) => (height ? height : "1px")};
    width: ${({ width }) => (width ? width : "3rem")};
    margin-right: .5rem;
    background-color: ${({ theme, color }) =>
    color ? theme.text[color] : theme.text.primary};
  }
`;



export const Text = styled(Text1)<DashProps>`
  color: ${({ theme, color }) =>
    color ? theme.text[color] : theme.text.primary};
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
`;

export function DashedText({ text, color, dashWidth, dashHeight }: IDashedTextProps) {
  return (
    <DashedWrapper color={color} height={dashHeight} width={dashWidth} >
      <div></div>
      <Text color={color}>{text}</Text>
    </DashedWrapper>
  );
}
