import styled from "styled-components";
import { Title } from "../../common/components/elements";
import { Flex } from "../../common/components/elements/containers";


interface MoonProps {
  show: boolean;
}

export const TextWrapper = styled.div`
  z-index: 1;
`;

export const DetailsWrapper = styled.div`
  margin-top: 1.1rem;
  width: 40rem;
  text-align: center;
  z-index: 1;

  @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
    width: 100%;
    padding: 1rem 2rem;
  }
`;

export const Bold = styled.span`
  font-weight: 500;
`;

export const Circle = styled.div`
  position: absolute;
  width: 95rem;
  height: 95rem;
  border-radius: 50%;
  background-image: linear-gradient(
    180deg,
    rgba(33, 21, 57, 0.329) 12.5%,
    21%,
    white
  );
  bottom: -81rem;
  border: 1px solid ${({ theme }) => theme.text.muted};
  z-index: 1;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);

  //background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15px);
`;

export const MoonsWrapper = styled.div<MoonProps>`
  height: 100%;
  .left-moon {
    position: absolute;
    transition: ease-in 0.9s 0.3s;
    top: ${({ show }) => (show ? "13vh" : "17vh")};
    left: 12.1vw;
    width: 6.6rem;
    height: 6.6rem;

    @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
      width: 4.6rem;
      height: 4.6rem;
      left: 10vw;
    }
  }

  .right-moon {
    position: absolute;
    transition: ease-in 0.9s 0.3s;
    top: ${({ show }) => (show ? "28vh" : "35vh")};
    right: 19.5vw;
    width: 5rem;
    height: 5rem;

    @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
      width: 3.5rem;
      height: 3.5rem;
      right: 10vw;
    }
  }

  .bottom-moon {
    position: absolute;
    transition: ease-in 0.9s 0.3s;
    bottom: ${({ show }) => (show ? "23vh" : "17vh")};
    left: ${({ show }) => (show ? "29vw" : "26vw")};
    width: 9.5rem;
    height: 9.5rem;

    @media screen and (max-width: ${({ theme }) => theme.screen.tablet}) {
      bottom: ${({ show }) => (show ? "20vh" : "15vh")};
    }

    @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
      width: 7rem;
      height: 7rem;
      bottom: ${({ show }) => (show ? "38vh" : "28vh")};
    }
  }
`;

export const Text = styled(Title)<MoonProps>`
  text-transform: ${({ show }) => (show ? "lowercase" : "uppercase")};
  font-size: 3rem;
  font-weight: 600;

  @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
    font-size: 1.7rem;
  }
`;

export const InputWrapper = styled(Flex)`
  margin-top: 1rem;
  z-index: 1;
  @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
    flex-direction: column;
  }
`;

export const TopWrapper = styled.div`
 

  @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
   margin-top: 4rem;;
  }
`
