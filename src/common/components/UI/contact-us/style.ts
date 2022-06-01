import styled from "styled-components";
import { Flex, Title2 } from "../../elements";

interface ContactProps {
  show: boolean;
}

export const ContactWrapper = styled(Flex)<ContactProps>`
  width: 45.5rem;
  transition: ease-in 0.9s all 0.3s;
  z-index: ${({ show }) => (show ? 10 : -1)};
  opacity: ${({ show }) => (show ? 1 : 0)};
  /* height: ${({ show }) => (show ? "auto" : "100vh")}; */
  background-image: linear-gradient(45deg, rgb(19, 0, 46), rgb(33, 0, 69));
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5rem;

  @media screen and (max-width: ${({ theme }) => theme.screen.tablet}) {
    width: 90vw;
  }

  @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
    width: 90vw;
    padding-left: 0rem;
    align-items: center;
  }

  .close {
    width: 4.9rem;
    height: 4.9rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.bg.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 3.5%;
    left: -2.25rem;
    cursor: pointer;

    &:hover {
      .icon {
        color: ${({ theme }) => theme.text.active_link};
      }
    }

    @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
      width: 3rem;
      height: 3rem;
      left: -1.5rem;
      top: 2.5%;
    }

    .icon {
      color: ${({ theme }) => theme.button.primary};
      font-size: 1.8rem;
    }
  }

  .text {
    margin: 10rem 3rem 2rem 3rem;

    @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
      margin: 5rem 0.7rem 2rem 0.7rem;
    }
  }

  @keyframes fadeIn {
    to {
      z-index: 10;
      opacity: 1;
    }
  }

  .button {
    padding-bottom: 3rem;
    button {
      border: none;
      outline: none;
      padding: 1.3rem 3.5rem;
      border-radius: 2.2rem;
      background-color: ${({ theme }) => theme.button.primary};
      color: ${({ theme }) => theme.text.primary};
      font-weight: 500;
      font-size: 1.2rem;

      @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
        padding: 0.8rem 1.8rem;
        border-radius: 1.5rem;
        font-size: .8rem;
      }
    }
  }
`;

export const Text = styled(Title2)`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
    font-size: 1.1rem;
  }
`;
