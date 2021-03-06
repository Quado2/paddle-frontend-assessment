import styled from 'styled-components';
import { Subtitle } from '../../../common/components/elements/text';

const Wrapper = styled.div`

.title{
  margin-bottom: 1rem;;
}

h3{
  color: ${({theme}) => theme.text.muted};
  font-weight: 400;
  line-height: 2rem;
  font-size: 18px;

  @media screen and (max-width: ${({theme}) => theme.screen.phone}) {
    font-size: 12px;
    line-height: 1.5rem;
  }
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
