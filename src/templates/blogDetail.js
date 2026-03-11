import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Container } from 'react-bootstrap';
import styled from '@emotion/styled';

const ArticleWrapper = styled.article`
  padding: 60px 0;
  max-width: 1000px;
  margin: 0 auto;
`;

const ArticleTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  color: #111;
  font-family: 'Inter', sans-serif;
`;

const ArticleDate = styled.div`
  font-size: 0.95rem;
  color: #888;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  gap: 6px;

  i {
    font-size: 0.85rem;
  }
`;

const ArticleContent = styled.div`
  line-height: 1.8;
  font-size: 1.1rem;
  color: #222;

  h2 {
    font-size: 1.8rem;
    font-weight: 800;
    margin-top: 50px;
    margin-bottom: 20px;
    padding-bottom: 8px;
    border-bottom: 1px solid #eee;
  }

  p {
    margin-bottom: 20px;
  }

  ul, ol {
    margin-bottom: 20px;
    padding-left: 1.5rem;
  }
`;


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
      }
      html
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      createdAt(formatString: "YYYY/MM/DD")
    }
  }
`;



function BlogDetail({ data }) {
  const isMarkdown = !!data.markdownRemark;
  const post = isMarkdown ? {
    title: data.markdownRemark.frontmatter.title,
    date: data.markdownRemark.frontmatter.date,
    html: data.markdownRemark.html
  } : {
    title: data.contentfulBlogPost?.title,
    date: data.contentfulBlogPost?.createdAt,
    html: "<p>Contentful integration is being fixed...</p>"
  };




  if (!post.title) return <Layout><Container><p>Post not found</p></Container></Layout>;

  return (
    <Layout>
      <Container>
        <ArticleWrapper>
          <ArticleTitle>{post.title}</ArticleTitle>
          <ArticleDate>
            <i className="fa-solid fa-calendar"></i>
            {post.date}
          </ArticleDate>
          <ArticleContent dangerouslySetInnerHTML={{ __html: post.html }} />
        </ArticleWrapper>
      </Container>
    </Layout>
  );
}

export default BlogDetail;

