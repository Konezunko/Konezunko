import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Layout from "../components/Layout";
import Kv from "../components/organisms/top/kv";
import AboutMe from "../components/organisms/top/aboutMe";
import Skills from "../components/organisms/top/skills";
import Works from "../components/organisms/top/works";
import Achievements from "../components/organisms/top/achievements";
import Services from "../components/organisms/top/services";
import Contact from "../components/organisms/top/contact";
import { Container } from "react-bootstrap";
import styled from "@emotion/styled";

const BlogHeader = styled.h3`
  font-size: 2.2rem;
  font-weight: 800;
  margin-top: 100px;
  margin-bottom: 40px;
  display: inline-block;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 6px;
    background-color: #0044cc;
  }
`;

const BlogList = styled.div`
  border-top: 1px solid #eee;
`;

const BlogListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const BlogDate = styled.span`
  font-size: 0.95rem;
  color: #888;
  min-width: 110px;
  font-family: 'Roboto', sans-serif;
`;

const BlogTitleLink = styled(Link)`
  font-size: 1.1rem;
  color: #4477cc;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    color: #3366bb;
  }
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            createdAt(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Kv />
      <AboutMe />
      <Skills />
      <Services />
      <Works />
      <Achievements />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

