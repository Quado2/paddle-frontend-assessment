import styled from "styled-components";

export interface FlexProps {
  height?: string;
  flexDirection?: string;
  mt?: string;
  mb?: string;
}

export interface IconWrapperProps {
  size: string;
  bright?: boolean;
}

export const Flex = styled.div<FlexProps>`
  width: 100%;
  height: ${({ height }) => (height ? height : "auto")};
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  align-items: center;
  justify-content: center;
  margin-top: ${({mt}) => mt};
  margin-bottom: ${({mb}) => mb};
`;



export const IconWrapper = styled.div<IconWrapperProps>`
  color: ${({ theme }) => theme.text.primary};
  font-size: ${({ size }) => size};
  color: ${({ theme }) => theme.text.primary};
  opacity: ${({ bright }) => (bright ? 1 : 0.54)};
  margin: 0.5rem 1rem;
`;

export const PageWrapper = styled(Flex)`
padding-top: 11rem;
flex-direction: column;
justify-content: flex-start;
background-image: ${({theme}) =>  "linear-gradient(180deg,"+theme.bg.default_1+","+theme.bg.default_2+")" } ;
position: relative;
overflow-y: hidden;
`

export const BottomMargin = styled(Flex)`
  height: 1rem;
  margin-bottom: 12rem;
`;
