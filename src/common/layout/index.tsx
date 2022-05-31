import * as React from "react";

import { List, ListItem } from "../components/elements";
import { MainWrapper } from './style'

import { Logo } from "../components/UI/index";
import { ListContainer, MainNav, Footer, TextWrapper } from "./style";
import { Flex, IconWrapper } from "../components/elements/containers";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { Text1 } from "../components/elements/text";

export interface ILayoutProps {
  children: JSX.Element;
}

export function Layout(props: ILayoutProps) {
  // const theme:ThemeType = useTheme();

  return (
    <MainWrapper>
      <MainNav>
        <Logo />
        <ListContainer>
          <List>
            <ListItem>ABOUT US</ListItem>
            <ListItem>BLOG</ListItem>
            <ListItem background>CONTACT US</ListItem>
          </List>
        </ListContainer>
      </MainNav>
      {props.children}
      <Footer>
        <Flex>
          <IconWrapper bright size="30px">
            <BsYoutube />
          </IconWrapper>
          <IconWrapper size="25px">
            <FaFacebookSquare />
          </IconWrapper>
          <IconWrapper size="23px">
            <ImLinkedin />
          </IconWrapper>
          <IconWrapper size="30px">
            <IoLogoInstagram />
          </IconWrapper>
          <IconWrapper size="23px">
            <FaTwitterSquare />
          </IconWrapper>
        </Flex>
        <Flex>
          <TextWrapper>
            <Text1 muted weight="400" size="16px">Terms of service</Text1>
          </TextWrapper>
          <TextWrapper>
            <Text1 muted weight="400" size="16px">Privacy policy</Text1>
          </TextWrapper>
        </Flex>
        <Flex>
          <TextWrapper>
          <Text1 muted weight="400" size="16px">Copyright 2021 @ Peddle Technologies. All Rights </Text1>
          </TextWrapper>
        </Flex>
      </Footer>
    </MainWrapper>
  );
}
