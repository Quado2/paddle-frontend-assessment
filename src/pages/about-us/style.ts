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
`;

export const InnerPaper = styled.div<Props>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: 5rem 7rem 6.5rem 7rem;
  background-image: linear-gradient(177deg, #970f93 0%, #19073b 100%);
`;

export const LeftGlassWrapper = styled(Flex)`
  width: 54.5rem;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Glass = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(202, 163, 240, 0.16);
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
`;

export const BottomMargin = styled(Flex)`
  height: 1rem;
  margin-bottom: 12rem;
`;
export const BigText = styled(Title)`
  font-size: 3rem;
  width: 65rem;
  margin: 10rem 0;
`;

export const MidWrapper = styled(Flex)`
  height: 30rem;
  position: relative;
  align-items: flex-start;
`;

export const RightGlassWrapper = styled(Flex)`
  flex: 1;
  justify-content: flex-start;
  position: relative;
`;

export const InnerPaper2 = styled.div<Props>`
  width: 17rem;
  height: 22rem;
  margin: 5rem 7rem 4rem 7rem;
  background-image: linear-gradient(
    177deg,
    rgba(0, 255, 255, 0.315) 0%,
    #19073b 100%
  );
`;

export const Glass2 = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(202, 163, 240, 0.16);
  backdrop-filter: blur(8px);
  position: absolute;
  top: 0;
`;

export const LeftWrapper = styled(Flex)`
  flex: 1;
  height: 100%;
`;

export const InnerLeft = styled.div`
  width: 25rem;
  margin-left: 4rem;
  padding-top: 1rem;
  height: 100%;
  position: relative;
`;

export const InnerText = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 5rem;

  .question h2{
    color: ${({theme}) => theme.text.primary};
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: 1.8rem;
  }

  .description h3{
    color: ${({theme}) => theme.text.primary};
    font-weight: 300;
    font-size: 18px;
    line-height: 2rem;
    width: 65%;
    margin-bottom: 1.8rem;
  }

  .contact{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${({theme}) => theme.text.active_link};
    font-size: 20px;

    button{
    background: transparent;
    border: none;
    color: ${({theme}) => theme.text.active_link};
    font-size: 18px;
    font-weight: 400;
    margin-right: .7rem;;
    ;
  }
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
  transparent 100%);
`;

export const BottomWrapper = styled(Flex)`
justify-content: flex-end;
position: relative;
margin: 15rem 0 0rem 0;
`

export const InnerPaper3 = styled.div<Props>`
  width: 22rem;
  height: 12rem;
  margin: 5rem 7rem 6rem 7rem;
  background-image: linear-gradient(
    177deg,
    #7F4129 0%,
    #19073b 100%
  );
`;


export const InnerText2 = styled(InnerText)`
 padding-left: 7rem;

`
 

