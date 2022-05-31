import styled from "styled-components";
import { Flex,Title2 } from "../../elements";

interface ContactProps{
  show: boolean;
}

export const ContactWrapper = styled(Flex)<ContactProps>`
  width: 45.5rem;
  transition: ease-in .9s all .3s;
  z-index: ${({show}) => show ? 10: -1};
  opacity: ${({show}) => show ? 1: 0};
  background-image: linear-gradient(45deg, rgb(19, 0, 46), rgb(33, 0, 69));
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5rem;
 
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
   

    .icon {
      color: ${({ theme }) => theme.button.primary};
      font-size: 1.8rem;
    }
  }

  .text {
    margin: 10rem 3rem 2rem 3rem;
  }

  @keyframes fadeIn{
    to{
      z-index: 10;
      opacity: 1;
      
    }
  }
`;

export const Text = styled(Title2)`
 font-size: 2rem;
 font-weight: 500;
 text-align: center;
`
