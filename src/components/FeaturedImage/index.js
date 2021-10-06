import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";

import Wrapper from './Wrapper';

function FeaturedImage({ image }) {
  return (
    <Wrapper>
      {image?.childImageSharp?.gatsbyImageData && <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt="" />}
    </Wrapper>
  );
}

export default FeaturedImage;
