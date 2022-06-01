import * as React from "react";

import { List } from "../components/elements";
import { MainWrapper, NavList, Button } from "./style";

import { FullGlass, Logo } from "../components/UI/index";
import { ListContainer, MainNav, Footer, TextWrapper, Text } from "./style";
import { Flex, IconWrapper } from "../components/elements/containers";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { ContactUs } from "../components/UI/contact-us";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link, NavLink } from "react-router-dom";
export interface ILayoutProps {
  children: JSX.Element;
}

export function Layout(props: ILayoutProps) {
  

  const { setShowContactForm, isBlogShowing } = useContext(AppContext);
 
  return (
    <MainWrapper>
      <MainNav isBlog={isBlogShowing}>
        <Link to="/" ><Logo isBlog={isBlogShowing} /></Link>
        <ListContainer>
          <List>
            <NavList isBlog={isBlogShowing}>
              <NavLink
                to="about-us"
                className={({isActive}) => "nav-link "  + (isActive ? "active": "")}
              >
                ABOUT US
              </NavLink>
            </NavList>
            <NavList isBlog={isBlogShowing}>
              <NavLink
                to="blog"
                className={({isActive}) => "nav-link "  + (isActive ? "active": "")}
              >
                BLOG
              </NavLink>
            </NavList>
            <Button
              isBlog={isBlogShowing}
              onClick={() => setShowContactForm(true)}
              background
            >
              CONTACT US
            </Button>
          </List>
        </ListContainer>
      </MainNav>
      <ContactUs />
      <FullGlass />
      {props.children}
      <Footer>
        <Flex>
          <IconWrapper isBlog ={isBlogShowing} bright size="30px">
            <BsYoutube />
          </IconWrapper>
          <IconWrapper isBlog ={isBlogShowing} size="25px">
            <FaFacebookSquare />
          </IconWrapper>
          <IconWrapper isBlog ={isBlogShowing} size="23px">
            <ImLinkedin />
          </IconWrapper>
          <IconWrapper isBlog ={isBlogShowing} size="30px">
            <IoLogoInstagram />
          </IconWrapper>
          <IconWrapper isBlog ={isBlogShowing} size="23px">
            <FaTwitterSquare />
          </IconWrapper>
        </Flex>
        <Flex>
          <TextWrapper>
            <Text isBlog ={isBlogShowing}>
              Terms of service
            </Text>
          </TextWrapper>
          <TextWrapper>
            <Text isBlog ={isBlogShowing}>
              Privacy policy
            </Text>
          </TextWrapper>
        </Flex>
        <Flex>
          <TextWrapper>
            <Text isBlog ={isBlogShowing} >
              Copyright 2021 @ Peddle Technologies. All Rights{" "}
            </Text >
          </TextWrapper>
        </Flex>
      </Footer>
    </MainWrapper>
  );
}
