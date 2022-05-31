import * as React from 'react';
import { Image } from '../elements/image';
import styled from 'styled-components';
import { Flex } from "../elements/containers";
import logo1 from '../../../assets/images/logo1.png'

export const LogoWrapper = styled(Flex)`
  width: 90px;
  height: 70px;
`


interface ILogoProps {
}

export const Logo: React.FC<ILogoProps> = (props) => {
  return <LogoWrapper>
    <Image src={logo1} />
  </LogoWrapper>;
};


