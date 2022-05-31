import * as React from "react";
import styled from "styled-components";
import { PageWrapper, Glass } from "../../../common/components/elements";
import { Flex } from "../../../common/components/elements";
import { Title2 } from "../../../common/components/elements/text";
import { DashedText } from "../../../common/components/UI";

export const TopWrapper = styled(PageWrapper)`
  padding-top: 0;
  height: 18.5rem;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
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
  background-image: linear-gradient(177deg, #970f93 0%, #19073b 100%);
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
  }

  .article{
    margin-left: 23%;
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
