import React from 'react';

import H2 from '../H2';
import Wrapper from './Wrapper';
import TaxonomyButton from './Button';

function Taxonomy({ title, entries }) {
  if (entries.length === 0) {
      return null
  }
  return (
    <Wrapper>
      <H2>{title}</H2>
      {entries.map(({name, url}) => (
          <TaxonomyButton
            href={url}
          >
            {name}
          </TaxonomyButton>
      ))}
    </Wrapper>
  );
}

export default Taxonomy;

export const Tags = ({items}) => {
    if (!Array.isArray(items)) {
        return null
    }
    return <Taxonomy title={"Tagi"} entries={items.map(item => ({name: item, url: `/tag/${item}`}))} />
}

export const Categories = ({items}) => {
    if (!Array.isArray(items)) {
        return null
    }
    return <Taxonomy title={"Kategorie"} entries={items.map(item => ({name: item, url: `/category/${item}`}))} />
}