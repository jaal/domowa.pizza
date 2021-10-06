import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React from 'react';
import userConfig from '../../config';
import Layout from './layout';
import Article from '../components/Article';
import ArticleHeader from '../components/ArticleHeader';
import Button from '../components/Button';
import Card from '../components/Card';
import Container from '../components/Container';
import FeaturedImage from '../components/FeaturedImage';
import PageNav from '../components/PageNav';
import Share from '../components/Share';
import { Tags, Categories } from '../components/Taxonomy'
import { Disqus } from 'gatsby-plugin-disqus'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const author = this.propsdata?.site?.siteMetadata?.author
    const { slug, previous, next } = this.props.pageContext;

    const location = this.props.location
    const disqusConfig = {
      url: `${userConfig.siteUrl + location.pathname}`,
      identifier: slug,
      title: post.frontmatter.title,
    }

    return <>
      <Helmet
        title={post.frontmatter.meta?.title || `${post.frontmatter.title} | ${author}`}
        htmlAttributes={{ lang: 'PL' }}
      >
        <meta
          name="description"
          content={post.frontmatter.meta?.description || `${userConfig.title} | ${userConfig.description}`}
        />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${userConfig.siteUrl}${slug}`} />
        <meta property="og:title" content={post.frontmatter.meta?.title || `${post.frontmatter.title} | ${author}`} />
        <meta property="og:description" content={post.frontmatter.meta?.description || `${userConfig.title} | ${userConfig.description}`} />
        <meta property="og:site_name" content={userConfig.headline} />
        <meta property="article:author" content="https://www.facebook.com/olek83" />
        <meta property="article:published_time" content={post.frontmatter.createdAt} />
        {post.frontmatter.featuredImage && (
          <meta property="og:image" content={`${userConfig.siteUrl}${post.frontmatter.featuredImage.childImageSharp.gatsbyImageData.src}`} />
        )}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@olekjaworski" />
        <meta name="twitter:label1" content="Napisane przez" />
        <meta name="twitter:data1" content="Olek" />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": `${userConfig.siteUrl}#website`,
                "url": userConfig.siteUrl,
                "name": userConfig.headline,
                "description": userConfig.description,
                "inLanguage": "pl-PL"
              },
              post.frontmatter.featuredImage ? ({
                "@type": "ImageObject",
                "@id": `${userConfig.siteUrl}${slug}#primaryimage`,
                "inLanguage": "pl-PL",
                "url": `${userConfig.siteUrl}${post.frontmatter.featuredImage.childImageSharp.gatsbyImageData.src}`,
                "contentUrl": `${userConfig.siteUrl}${post.frontmatter.featuredImage.childImageSharp.gatsbyImageData.src}`,
                "caption": post.frontmatter.title
              }) : undefined,
              {
                "@type": "WebPage",
                "@id": `${userConfig.siteUrl}${slug}#webpage`,
                "url": `${userConfig.siteUrl}${slug}`,
                "name": post.frontmatter.meta?.title || `${post.frontmatter.title} | ${author}`,
                "isPartOf": {
                  "@id": `${userConfig.siteUrl}#website`
                },
                "primaryImageOfPage": {
                  "@id": `${userConfig.siteUrl}${slug}#primaryimage`
                },
                "datePublished": post.frontmatter.createdAt,
                "author": {
                  "@id": `${userConfig.siteUrl}#/schema/person/Olek`
                },
                "description": post.frontmatter.meta?.description || `${userConfig.title} | ${userConfig.description}`,
                "breadcrumb": {
                  "@id": `${userConfig.siteUrl}${slug}#breadcrumb`
                },
                "inLanguage": "pl-PL",
                "potentialAction": [
                  {
                    "@type": "ReadAction",
                    "target": [
                      `${userConfig.siteUrl}${slug}`
                    ]
                  }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "@id": `${userConfig.siteUrl}${slug}#breadcrumb`,
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                      "@type": "WebPage",
                      "@id": userConfig.siteUrl,
                      "url": userConfig.siteUrl,
                      "name": "Główna"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                      "@id": `${userConfig.siteUrl}${slug}#webpage`
                    }
                  }
                ]
              },
              {
                "@type": "Person",
                "@id": `${userConfig.siteUrl}#/schema/person/Olek`,
                "name": "Olek",
                "image": {
                  "@type": "ImageObject",
                  "@id": `${userConfig.siteUrl}#person`,
                  "inLanguage": "pl-PL",
                  "url": "https://secure.gravatar.com/avatar/0d024e116fc72b45dff6d3e4425be04c?s=96&d=https%3A%2F%2Fdomowa.pizza%2Fwp-content%2Fuploads%2Fap_avatars%2F0d024e116fc72b45dff6d3e4425be04c.jpg&r=g",
                  "contentUrl": "https://secure.gravatar.com/avatar/0d024e116fc72b45dff6d3e4425be04c?s=96&d=https%3A%2F%2Fdomowa.pizza%2Fwp-content%2Fuploads%2Fap_avatars%2F0d024e116fc72b45dff6d3e4425be04c.jpg&r=g",
                  "caption": "Olek"
                },
                "sameAs": [
                  "https://www.facebook.com/olek83",
                  "https://twitter.com/olekjaworski"
                ]
              }
            ].filter(Boolean)
          }
        )
      }} />
      <Layout>
        <Container>
          <Card>
            {false && (
              <code>
                <pre>
                  {JSON.stringify(this.props, null, 2)}
                </pre>
              </code>
            )}
            <ArticleHeader>
              {post.frontmatter.featuredImage && (
                <FeaturedImage
                  image={post.frontmatter.featuredImage}
                />
              )}
              <h1>{post.frontmatter.title}</h1>
              <p>{post.frontmatter.date}</p>
              <span />
            </ArticleHeader>
            <Article>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Article>
            <Disqus config={disqusConfig} />
            <Categories items={post.frontmatter.categories} />
            <Tags items={post.frontmatter.tags} />
            {userConfig.showShareButtons && (
              <Share url={userConfig.siteUrl + location.pathname} title={post.frontmatter.title} />
            )}
          </Card>
          <PageNav>
            {previous && (
              <Button to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Button>
            )}
            {next && (
              <Button to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Button>
            )}
          </PageNav>
        </Container>
      </Layout>
    </>;
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
  site {
    siteMetadata {
      title
      author
    }
  }
  markdownRemark(fields: {slug: {eq: $slug}}) {
    id
    html
    frontmatter {
      title
      tags
      categories
      meta {
        title
        description
      }
      date(formatString: "DD MMMM YYYY", locale: "pl-PL")
      createdAt: date(formatString: "YYYY-MM-DDTHH:mm:ssZ", locale: "pl-PL")
      featuredImage {
        childImageSharp {
          gatsbyImageData(width: 850, placeholder: BLURRED, layout: FIXED)
        }
      }
    }
  }
}
`;
