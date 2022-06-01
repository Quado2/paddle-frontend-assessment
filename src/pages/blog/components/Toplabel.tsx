import * as React from "react";
import styled from "styled-components";
import { Glass } from "../../../common/components/elements";
import { Flex } from "../../../common/components/elements";
import { Title2 } from "../../../common/components/elements/text";
import { DashedText } from "../../../common/components/UI";

export const TopWrapper = styled.div`
  padding-top: 0;
  height: 18.5rem;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  background-image: ${({ theme }) =>
    "linear-gradient(180deg," +
    theme.bg.default_1 +
    "," +
    theme.bg.default_2 +
    ")"};
`;
export const LeftWrapper = styled.div`
  height: 100%;
  width: 34%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 8%;
  padding-top: 2rem;

  @media screen and (max-width: ${({theme}) => theme.screen.tablet}) {
    width: 60%;
  }

  @media screen and (max-width: ${({theme}) => theme.screen.phone}) {
    width: 80%;
  }
`;
export const GlassWrapper = styled(Glass)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;



export const InnerPaper = styled.div`
  width: 10rem;
  height: 15rem;
  background-image:  ${({ theme }) =>
    "linear-gradient(177deg, " + theme.paper.paper_1 + " 0%, #19073b 100%)"};;
`;

const TextWrapper = styled(Flex)`
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  top: 0;
  right: 0;

  .dashed-text{
    margin-left: 19%;

    @media screen and (max-width: ${({theme}) => theme.screen.phone}) {
    margin-left: 5%;
  }
  }

  .article{
    margin-left: 23%;

    @media screen and (max-width: ${({theme}) => theme.screen.phone}) {
    margin-left: 10%;
  }
  }

`

export interface IToblabelProps {}

export function Toplabel(props: IToblabelProps) {
  return (
    <TopWrapper>
      <LeftWrapper>
        <InnerPaper />
        <GlassWrapper />
      </LeftWrapper>
      <TextWrapper>
       <div className="dashed-text">
         <DashedText text="BLOG" />
       </div>
       <div className="article">
         <Title2>Articles and News</Title2>
       </div>
      </TextWrapper>
    </TopWrapper>
  );
}
