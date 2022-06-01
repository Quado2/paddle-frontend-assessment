import * as React from 'react';
import { Image } from '../elements/image';
import styled from 'styled-components';
import { Flex } from "../elements/containers";
import logo1 from '../../../assets/images/logo1.png'
import logo2 from '../../../assets/images/logo2.png'

export const LogoWrapper = styled(Flex)<ILogoProps>`
  width: 90px;
  height: ${({isBlog}) => isBlog ? "55px": "70px"};

  @media screen and (max-width: ${({theme}) => theme.screen.phone}) {
    width: 40px;
    height: 30px;
   }
`


interface ILogoProps {
  isBlog: boolean
}

export const Logo: React.FC<ILogoProps> = ({isBlog}) => {
  return <LogoWrapper isBlog={isBlog}>
    <Image src={isBlog ? logo2 : logo1} />
  </LogoWrapper>;
};


