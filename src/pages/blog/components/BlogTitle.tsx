import * as React from 'react';
import styled from 'styled-components';
import { Subtitle, Text1 } from '../../../common/components/elements/text';

const Wrapper = styled.div`

.title{
  margin-bottom: 1rem;;
}

h3{
  color: ${({theme}) => theme.text.muted};
  font-weight: 400;
  line-height: 2rem;
  font-size: 18px;
}
`

export interface IAppProps {
  title: string;
  content: string;
}

export function BlogTitle ({title, content}: IAppProps) {
  return (
    <Wrapper>
      <div className="title">
        <Subtitle color='blog_main'>{title}</Subtitle>
      </div>
      <div className="content">
        <h3>{content}</h3>
      </div>
    </Wrapper>
  );
}
