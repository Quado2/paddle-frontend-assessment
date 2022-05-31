import styled from 'styled-components'

import { Flex } from "../components/elements/containers";


export const ListContainer = styled(Flex)`
 width: 25rem;

`

export const MainWrapper = styled(Flex)`
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  position: relative;
 
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
  height: 20vh;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  z-index: 5;
`

export const TextWrapper = styled.div`
  margin: 0 1rem 1.2rem 1rem;
`
