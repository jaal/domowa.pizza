import Helmet from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';
import userConfig from '../../config';

import Layout from './layout';

import Card from '../components/Card';
import Container from '../components/Container';
import Summary from '../components/Summary';
import Headline from '../components/Headline';

const CategoryPage = ({ pageContext, data: { allMarkdownRemark: { totalCount, edges } }, ...rest }) => {
  const { category } = pageContext;

  return (
    <Layout>
      <Container>
        <Helmet
          title={`${userConfig.title} | ${userConfig.author}`}
          htmlAttributes={{ lang: 'PL' }}
        >
          <meta
            name="description"
            content={`"{category}" | ${userConfig.title} | ${userConfig.description}`}
          />
        </Helmet>
        <Headline>
          Kategoria "{category}" - {totalCount} wpisów
        </Headline>
        {edges.map(({ node }) => (
          <Card key={node.fields.slug}>
            <Summary
              date={node.frontmatter.date}
              title={node.frontmatter.title}
              excerpt={node.excerpt}
              image={node.frontmatter.featuredImage}
              slug={node.fields.slug}
            />
          </Card>
        ))}
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
        filter: { fields: { category: { eq: $category } } }
      ) {
      totalCount
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
              title
              date(formatString: "DD MMMM YYYY", locale: "pl-PL")
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 850) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
              }
            }
          }
        }
      }
    }
  }
`;

export default CategoryPage;
