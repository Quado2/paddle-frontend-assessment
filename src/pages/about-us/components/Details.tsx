import * as React from "react";
import styled from "styled-components";
import { Text1 } from "../../../common/components/elements";

export interface IDetailProps {
  content1: string;
  content2?: string;
  title: string;
  number: string;
}

const DetailWrapper = styled.div`
  width: 100%;
  
  .top {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h3 {
      color: white;
      font-weight: 400;
      font-size: 16px;
      line-height: 1rem;
    }
    .number-wrapper {
      padding-left: 1rem;
      margin: 0;
    }

    .inner-1 {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0;

      .line {
        height: 2px;
        width: 4rem;
        margin: 0.5rem;
        background-color: ${({ theme }) => theme.bg.primary};
      }
    }
  }

  .texts {
    margin-top: 2rem;
  }
`;

export function Detail({ content1, content2, title, number }: IDetailProps) {
  return (
    <DetailWrapper>
      <div className="top">
        <div className="number-wrapper">
          <h3>{number}</h3>
        </div>
        <div className="inner-1">
          <div className="line"></div>
          <h3>{title}</h3>
        </div>
      </div>
      <div className="texts">
        <Text1> {content1}</Text1>
      </div>
      {content2 && (
        <div className="texts">
          <Text1> {content2}</Text1>
        </div>
      )}
    </DetailWrapper>
  );
}
