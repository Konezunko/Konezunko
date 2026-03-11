import React from 'react';
import { Container } from 'react-bootstrap';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const AchievementSection = styled.section`
  background-color: #fff;
  padding: 100px 0;
`;

const Title = styled.h3`
  font-size: 2.2rem;
  font-weight: 800;
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

const ListContainer = styled.div`
  border-top: 1px solid #eee;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9f9f9;
  }

  .date {
    font-size: 0.95rem;
    color: #888;
    min-width: 110px;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }
`;

const LinkText = styled(Link)`
  font-size: 1.1rem;
  color: #4477cc;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    color: #3366bb;
  }
`;

const Achievements = () => {
  const data = [
    { date: '2026-02', text: '卒論発表を終えて', link: '/blog/atcoder-heuristic-suicoder' },
    { date: '2026-02', text: '室蘭でのスマホ教室開催を終えて', link: '/blog/master-of-it-2022' },
    { date: '2025-12', text: '2025年を振り返る', link: '/blog/joi-2021-2022-honzen' },
    { date: '2025-12', text: '出雲大社参拝を終えて', link: '/blog/atcoder-algorithm-suicoder' },
    { date: '2025-10', text: '室蘭満点花火良かった', link: '/blog/it-passport-2021-fall' },
  ];

  return (
    <AchievementSection id="recent-posts">
      <Container>
        <Title>Recent Posts</Title>
        <ListContainer>
          {data.map((item, index) => (
            <ListItem key={index}>
              <span className="date">{item.date}</span>
              <LinkText to={item.link}>{item.text}</LinkText>
            </ListItem>
          ))}
        </ListContainer>
      </Container>
    </AchievementSection>
  );
};

export default Achievements;
