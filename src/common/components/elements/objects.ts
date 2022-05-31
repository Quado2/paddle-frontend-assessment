import * as React from "react";

import styled, { Interpolation } from "styled-components";

export interface MoonProps {
  size: string;
  color: string;
  styles?: Interpolation<React.CSSProperties>;
}

export const Moon = styled.div<MoonProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  position: absolute;
  ${({ styles }) => styles};
  background-image: ${({ color }) =>
    "linear-gradient(177deg, " + color + " 0%," + "#19073B " + " 100%)"};
  z-index: 0;
`;

export const Glass = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(252, 253, 252, 0.09);
  backdrop-filter: blur(8px);
  

`
 