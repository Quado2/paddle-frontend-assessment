import * as React from 'react';

import { BlogWrapper } from './style';

import { Toplabel } from './components/Toplabel';

export interface IBlogProps {

}

export function Blog (props: IBlogProps) {
  return (
   <BlogWrapper>
     <Toplabel />

   </BlogWrapper>
  );
}
