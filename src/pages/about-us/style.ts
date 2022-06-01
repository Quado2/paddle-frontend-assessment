import styled, { Interpolation } from "styled-components";
import { Flex, Title } from "../../common/components/elements";

interface Props {
  width?: string;
  height?: string;
}

export const IntroWrapper = styled(Flex)`
  justify-content: flex-end;
  align-items: center;
  margin-top: -2.5rem;
  position: relative;
  height: 42rem;

  .moon-wrapper{
    width: 11rem;
    height: 11rem;
    position: absolute;
    top: 15vh;

    @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
    width: 6rem;
    height: 6rem;
  }
  }

  @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
    height: 20rem;
    margin-top: 3rem;
  }
`;

export const LeftGlassWrapper = styled(Flex)`
  width: 54.5rem;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;

  @media screen and (max-width: ${({ theme }) => theme.screen.tablet}) {
    width: 100vw;
  }
`;

export const InnerPaper = styled.div<Props>`
  width: 21rem;
  height: 30rem;
  margin: 5rem 7rem 6.5rem 7rem;
  background-image: ${({ theme }) =>
    "linear-gradient(177deg, " + theme.paper.paper_1 + " 0%, #19073b 100%)"};

  @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
    width: 10rem;
    height: 15rem;
    margin: 7rem 4rem;
  }
`;

export const Glass = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(252, 253, 252, 0.09);
  backdrop-filter: blur(14px);
  position: absolute;
  top: 0;
`;

export const IntroTextWrapper = styled(Flex)`
  width: 50.5rem;
  z-index: 1;
  flex-direction: column;
  margin-right: 12vw;
`;

export const SmallerTextWrapper = styled(Flex)`
  align-self: flex-start;
  justify-content: flex-start;
  margin-bottom: 2rem;

  div {
    height: 2px;
    width: 4.5rem;
    background-color: ${({ theme }) => theme.bg.primary};
    margin: 0.7rem;
  }
`;

export const LowerText = styled.div`
  width: 25rem;
  position: absolute;
  right: 7vw;
  bottom: 0;

  @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
    width: 100%;
    right: 0;
    bottom: -33%;
    padding: 2rem;
  }
`;

export const BottomMargin = styled(Flex)`
  height: 1rem;
  margin-bottom: 12rem;
`;
export const BigText = styled(Title)`
  font-size: 3rem;
  width: 65rem;
  margin: 10rem 0;

  @media screen and (max-width: ${({ theme }) => theme.screen.small_screen}) {
    font-size: 2.5rem;
    padding: 2rem;
    margin: 5rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
    width: 100%;
    font-size: 1.6rem;
    padding: 1rem;
    margin: 12rem 0 2rem 0;
  }
`;

export const MidWrapper = styled(Flex)`
  height: 30rem;
  position: relative;
  align-items: flex-start;

  @media screen and (max-width: ${({ theme }) => theme.screen.small_screen}) {
    flex-direction: column;
    flex-wrap: wrap;
    height: auto;
  }
`;

export const LeftWrapper = styled(Flex)`
  height: 100%;
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.screen.small_screen}) {
    height: 22rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
    height: 25rem;
  }
`;

export const InnerLeft = styled.div`
  width: 25rem;
  margin-left: 4rem;
  padding-top: 1rem;
  height: 100%;
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.screen.small_screen}) {
    width: 100%;
    padding: 1rem 5rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
    padding: 1rem 1.5rem;
    margin: 0;
  }
`;

export const Dot = styled.div`
  width: 19rem;
  height: 8rem;
  position: absolute;
  bottom: 0;
  left: 0;
  background-size: 23px 25px;
  background-image: radial-gradient(
    circle at center,
    white 0,
    white 2px,
    transparent 0,
    transparent 100%
  );

  @media screen and (max-width: ${({ theme }) => theme.screen.small_screen}) {
    bottom: 2rem;
    left: 4.5rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
    left: 1.5rem;
    bottom: 3rem;
  }
`;

export const RightGlassWrapper = styled(Flex)`
  justify-content: flex-start;
  position: relative;
`;

export const InnerPaper2 = styled.div<Props>`
  width: 17rem;
  height: 22rem;
  margin: 5rem 7rem 4rem 7rem;
  background-image: ${({ theme }) =>
    "linear-gradient(177deg, " + theme.paper.paper_2 + " 0%, #19073b 100%)"};

  @media screen and (max-width: ${({ theme }) => theme.screen.small_screen}) {
    margin: 5rem 7rem 4rem 10rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
    width: 10rem;
    height: 15rem;
    margin: 5rem 2rem 8rem 8rem;
  }
`;

export const Glass2 = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(202, 163, 240, 0.16);
  backdrop-filter: blur(8px);
  position: absolute;
  top: 0;
`;

export const InnerText = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 3rem;

  .question h2 {
    color: ${({ theme }) => theme.text.primary};
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: 1.8rem;

    @media screen and (max-width: ${({ theme }) => theme.screen.small_screen}) {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }

  .description h3 {
    color: ${({ theme }) => theme.text.primary};
    font-weight: 300;
    font-size: 18px;
    line-height: 2rem;
    width: 65%;
    margin-bottom: 1.8rem;

    @media screen and (max-width: ${({ theme }) => theme.screen.small_screen}) {
      width: 100%;
      font-size: 14px;
    }
  }

  .contact {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${({ theme }) => theme.text.active_link};
    font-size: 20px;

    button {
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.text.active_link};
      font-size: 18px;
      font-weight: 400;
      margin-right: 0.7rem;

      @media screen and (max-width: ${({ theme }) => theme.screen.small_screen}) {
      font-size: 14px;
    }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screen.small_screen}) {
    padding-left: 8rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
    padding: 1.5rem;
  }
`;

export const BottomWrapper = styled(Flex)`
  justify-content: flex-end;
  position: relative;
  margin: 15rem 0 0rem 0;

  @media screen and (max-width: ${({ theme }) => theme.screen.small_screen}) {
    margin-top: 7rem;
    margin-bottom: 5rem;
  }
`;

export const InnerPaper3 = styled.div<Props>`
  width: 22rem;
  height: 12rem;
  margin: 5rem 7rem 6rem 7rem;
  background-image: ${({ theme }) =>
    "linear-gradient(177deg, " + theme.paper.paper_3 + " 0%, #19073b 100%)"};

  @media screen and (max-width: ${({ theme }) => theme.screen.small_screen}) {
    margin: 5rem 4rem 6rem 7rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
    width: 15rem;
    height: 7rem;
    margin: 4rem 1rem 3rem 4rem;
  }
`;

export const InnerText2 = styled(InnerText)`
  padding-left: 7rem;
  

  @media screen and (max-width: ${({ theme }) => theme.screen.tablet}) {
    padding-left: 4rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
    padding-left: 1rem;
  }
`;
