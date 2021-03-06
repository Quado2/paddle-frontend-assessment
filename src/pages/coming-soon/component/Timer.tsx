import styled from "styled-components";
import { Flex } from "../../../common/components/elements/containers";

interface TimerProps {
  last?: boolean
}
const TimerWrapper = styled(Flex)<TimerProps>`
  width: 90px;
  height: 102px;
  flex-direction: column;
  background-color: ${({theme}) => theme.bg.primary};
  border-radius: .5rem;
  border-top-right-radius: ${({last}) => last ? "2px": "none"};
  border-bottom-right-radius: ${({last}) => last ? "2px": "none"};
  margin: .5rem;
  z-index: 1;

  @media screen and (max-width: ${({theme}) => theme.screen.phone}){
      width: 70px;
      height: 90px 
    }

 h2{
   font-weight: 600;
   font-size: 2.2rem;
 }

 h3{
   font-size: .75rem;
   font-weight: normal;
 }

`

export interface IAppProps {
  value: number;
  type: string;
  last?: boolean
}

export function Timer ({value, type,last}: IAppProps) {
  
  return (
    <TimerWrapper last={last} >
      <h2>{value}</h2>
      <h3>{(value < 2) ? type.slice(0,-1): type}</h3>
    </TimerWrapper>
  );
}
