import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import styled from '@emotion/styled';

const SkillSection = styled.section`
  background-color: #f9f9f9;
  padding: 100px 0;
`;

const SectionTitle = styled.h3`
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

const Category = styled.div`
  margin-bottom: 40px;
`;

const SkillContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CategoryTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #111;
`;

const CategoryText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 0;
`;

const ButtonRow = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 15px;
`;

const StyledLink = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  font-weight: 600;
  border-radius: 6px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0044cc;
    color: #fff;
    text-decoration: none;
  }
`;

const Skills = () => (
  <SkillSection id='skills'>
    <Container>
      <SkillContent>
        <SectionTitle>Skills</SectionTitle>
        <Row>
          <Col md={12}>
            <Category>
              <CategoryTitle>Programming</CategoryTitle>
              <CategoryText>
                プログラミングが少しできます。最近は研究兼ビジネスコンテストに向けて画像認識について学習中です。
                ゲームプログラミングもしており、Unityで2Dゲームを作りました。競技の実力はまだ初心者でAtCoderは茶色です。
              </CategoryText>
            </Category>
            <Category>
              <CategoryTitle>Creating & Design</CategoryTitle>
              <CategoryText>
                ものづくりが好きです。このサイトをデザインも込みで作れる程度の能力はあります。
                また、電子工作や
                自作PCをしたり、除草機を作ったり創作活動が大好きです。

              </CategoryText>
            </Category>
            <Category>
              <CategoryTitle>Teaching</CategoryTitle>
              <CategoryText>
                地域の高齢者の方々に向けたスマホ・パソコン教室の講師をしています。専門的な内容を、誰にでも分かりやすく噛み砕いて説明することを大切にしています。
              </CategoryText>
            </Category>
            <Category>
              <CategoryTitle>Skiing</CategoryTitle>
              <CategoryText>
                祖母の影響で社交ダンスやっていますスキーも大好きです。冬にはよく山へ行きます。
              </CategoryText>
            </Category>
          </Col>
        </Row>
        <ButtonRow>
          <StyledLink as={Link} to='/about#skills'>Skills</StyledLink>
          <StyledLink href='https://www.resume.id/konezunko' target="_blank" rel="noopener noreferrer">See my resume</StyledLink>
        </ButtonRow>
      </SkillContent>
    </Container>
  </SkillSection>
);

export default Skills;
