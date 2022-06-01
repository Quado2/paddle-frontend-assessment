import styled from "styled-components";
import { ListItem, Text1 } from "../components/elements";

import { Flex } from "../components/elements/containers";

interface NavProps {
  isBlog?: boolean;
}
export const ListContainer = styled(Flex)`
  width: 25rem;
  @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
    width: 68vw;
  }
`;

export const NavList = styled(ListItem)<NavProps>`
  padding: 0;
`;

export const Button = styled(NavList)<NavProps>`
  background-color: ${({ theme, isBlog }) =>
    isBlog ? theme.bg.primary : theme.button.primary};
  box-shadow: 0px 0px 30px #00000028;
  color: ${({ isBlog, theme }) =>
    isBlog ? theme.text.inverted : theme.text.primary};
  padding: 0.9rem 1.5rem;

  @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
    padding: 0.7rem 1.1rem;
  }
`;

export const MainWrapper = styled(Flex)`
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  overflow-y: scroll;
`;

export const MainNav = styled.nav<NavProps>`
  transition: all 0.7s ease-in;
  width: 100%;
  height: ${({ isBlog }) => (isBlog ? "19.5vh" : "15vh")};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7vw;
  z-index: 5;

  .nav-link {
    color: ${({ isBlog, theme }) =>
      isBlog ? theme.text.inverted : theme.text.primary};
    font-weight: ${({ isBlog }) => (isBlog ? "600" : "none")};
    font-size: ${({ isBlog }) => (isBlog ? "13px" : "none")};
    text-decoration: none;
    padding: 1rem;

    @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
      font-size: 12px;
      padding: 0.5rem;
    }

    :hover {
      color: ${({ theme }) => theme.text.active_link};
    }
  }

  .active {
    color: ${({ theme }) => theme.text.active_link};
  }
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
`;

export const TextWrapper = styled.div`
  margin: 0 1rem 0.5rem 1rem;
`;

export const Text = styled(Text1)<NavProps>`
  color: ${({ isBlog, theme }) =>
    isBlog ? theme.text.inverted : theme.text.primary};
  
`;
