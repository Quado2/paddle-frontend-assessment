import styled, {Interpolation} from "styled-components";
import { Flex } from "../../common/components/elements/containers";

interface TextWrapperProps {
  styles?: Interpolation<React.CSSProperties>;
}



export const TextWrapper = styled.div<TextWrapperProps>`
  ${({styles}) => styles};
  z-index: 1;

`

export const DetailsWrapper = styled.div`
margin-top: 1.1rem;
width: 40rem;
text-align: center;
`

export const Bold = styled.span`
  font-weight: 500;
`

export const Circle = styled.div`
  position: absolute;
  width: 95rem;
  height: 95rem;
  border-radius: 50%;
  background-image: linear-gradient(180deg, rgba(33, 21, 57, 0.329) 12.5%, 21%, white);
  bottom: -81rem;
  border: 1px solid ${({theme}) => theme.text.muted};
  z-index: 1;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);

//background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 15px );


`