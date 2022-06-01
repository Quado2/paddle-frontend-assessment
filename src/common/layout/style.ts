import styled from 'styled-components'

import { Flex } from "../components/elements/containers";


export const ListContainer = styled(Flex)`
 width: 25rem;

 @media screen and (max-width: ${({theme}) => theme.screen.phone}) {
  width: 68vw; 
  }

`

export const MainWrapper = styled(Flex)`
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  overflow-y: scroll;
`;

export const MainNav = styled.nav`
  width: 100%;
  height: 15vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7vw;
  z-index: 5;


  
`;


export const Footer = styled.footer`
  width: 100%;
  height: 25vh;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  z-index: 5;
  margin: 0;
`

export const TextWrapper = styled.div`
  margin: 0 1rem .5rem 1rem;
`
