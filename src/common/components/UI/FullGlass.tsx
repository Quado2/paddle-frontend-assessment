import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../context/AppContext";

export interface IFullGlassProps {}

interface GlassProps {
  show: boolean
}

const FGlass = styled.div<GlassProps>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgb(252, 253, 252, 0.09);
  transition: all .9s ease-in  .3s;
  backdrop-filter: ${({show}) => show ? "blur(14px) ": "blur(0px)"}; ;
  z-index: ${({show}) => show ? 7 : -1};


`;

export function FullGlass(props: IFullGlassProps) {

  const {showContactForm} = useContext(AppContext)

  return <FGlass show={showContactForm} />;
}
