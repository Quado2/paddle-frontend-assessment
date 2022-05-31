import * as React from "react";
import styled from "styled-components";

export interface IFullGlassProps {}

const FGlass = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: rgb(252, 253, 252, 0.09);
  backdrop-filter: blur(0px);
  animation: blurIn ease-in .7s .5s forwards;

  @keyframes blurIn {
    to{
      backdrop-filter: blur(14px);
    }
  }
`;

export function FullGlass(props: IFullGlassProps) {
  return <FGlass />;
}
