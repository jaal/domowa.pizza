import Helmet from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';
import userConfig from '../../config';
import Layout from './layout';
import Card from '../components/Card';
import Container from '../components/Container';
import Pagination from '../components/Pagination';
import Summary from '../components/Summary';

const AllPage = ({ pageContext, data: { allMarkdownRemark: { edges } } }) => {
  const { pages, current } = pageContext;

  const previousUrl = current - 1 === 1 ? `/` : `/${(current - 1).toString()}/`;
  const nextUrl = `/${(current + 1).toString()}/`;

  return (
    <Layout>
      <Container>
        <Helmet
          title={`${userConfig.title} | ${userConfig.author}`}
          htmlAttributes={{ lang: 'PL' }}
        >
          <meta
            name="description"
            content={`${userConfig.title} | ${userConfig.description}`}
          />
        </Helmet>
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
        <Pagination
          isFirst={current === 1}
          isLast={current === pages}
          nextUrl={nextUrl}
          previousUrl={previousUrl}
        />
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query AllPage(
    $limit: Int!
    $skip: Int!
    ) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
        limit: $limit
        skip: $skip
        sort: { fields: [frontmatter___date], order: DESC }
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

export default AllPage;
