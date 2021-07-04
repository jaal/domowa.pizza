import React from 'react';

import Wrapper from './Wrapper';
import Button from '../Button';

function Pagination({previousUrl, nextUrl, isFirst = false, isLast = false}) {
  return (
    <Wrapper>
      {!isFirst &&
        <Button to={previousUrl}>&larr; Nowsze posty</Button>
      }
      {!isLast &&
        <Button to={nextUrl}>Starsze posty &rarr;</Button>
      }
    </Wrapper>
  );
}

export default Pagination;