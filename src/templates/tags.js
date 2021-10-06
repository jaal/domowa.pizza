import Helmet from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';
import userConfig from '../../config';
import Layout from './layout';
import Card from '../components/Card';
import Container from '../components/Container';
import Summary from '../components/Summary';
import Headline from '../components/Headline';
import Pagination from '../components/Pagination';

const TagPage = ({ pageContext, data: { allMarkdownRemark: { totalCount, edges } } }) => {
  const { slug, name, pages, current } = pageContext;

  const previousUrl = current - 1 === 1 ? `/tag/${slug}/` : `/tag/${slug}/${(current - 1).toString()}/`;
  const nextUrl = `/tag/${slug}/${(current + 1).toString()}/`;

  return (
    <Layout>
      <Container>
        <Helmet
          title={`${userConfig.title} | ${userConfig.author}`}
          htmlAttributes={{ lang: 'PL' }}
        >
          <meta
            name="description"
            content={`"${name}" | ${userConfig.title} | ${userConfig.description}`}
          />
        </Helmet>
        <Headline>
          Tag "{name}" - {totalCount} wpisów
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
query TagPage($slug: String, $limit: Int!, $skip: Int!) {
  site {
    siteMetadata {
      title
      author
    }
  }
  allMarkdownRemark(
    limit: $limit
    skip: $skip
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {fields: {tags: {in: [$slug]}}}
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
              gatsbyImageData(width: 850, placeholder: BLURRED, layout: FIXED)
            }
          }
        }
      }
    }
  }
}
`;

export default TagPage;
