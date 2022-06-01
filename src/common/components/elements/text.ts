import styled from "styled-components";

interface TextProps {
  size?: string;
  muted?: boolean;
  weight?: string;
  casing?: string;
  width?: string;
  mb?:string;
  ls?:string;
  color?: string
}

interface SubTitleProps {
  color?: string;

}

export const Text1 = styled.h3<TextProps>`
  color: ${({ theme, color }) => color? theme.text[color] : theme.text.primary};
  opacity: ${({ muted }) => (muted ? 0.54 : 1)};
  font-size: 16px;
  font-weight: ${({ weight }) => weight};
  z-index: 1;
  line-height: 2.2rem;
  font-weight: 300;
  font-size: ${({theme}) => theme.font.content};

  @media screen and (max-width: ${({theme}) => theme.screen.phone}){
      font-size: 12px;
      line-height: 2rem;
    }

  
`;

export const Title = styled.h1<TextProps>`
  
  color: ${({ theme, color }) => color? theme.text[color] : theme.text.primary};
  opacity: ${({ muted }) => (muted ? 0.54 : 1)};
  font-size: ${({ size }) => size};
  width: ${({ width }) => width};
  margin-bottom: 1rem;
  text-transform: ${({ casing }) => casing};
  line-height: 4rem;
  z-index: 1;
  font-size: 4rem;
  font-weight: 400;

  @media screen and (max-width: ${({ theme }) => theme.screen.phone}) {
    font-size : 2rem;
    line-height: 2rem;
  }
  
  
`;

export const Bold = styled.span`
  font-weight: 600;
`

export const Title2 = styled.article<SubTitleProps>`
  color: ${({ theme, color}) =>  color? theme.text[color] : theme.text.primary};
  font-size: 2.5rem;
`

export const Subtitle = styled.article<SubTitleProps>`
  color: ${({ theme, color}) =>  color? theme.text[color] : theme.text.primary};
  font-size: 2rem;
  font-weight: 500;
`
