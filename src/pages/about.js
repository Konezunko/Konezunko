import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Container } from 'react-bootstrap';
import styled from '@emotion/styled';

const AboutWrapper = styled.div`
  padding: 80px 0;
  color: #333;
  font-family: 'Inter', sans-serif;

  h2 {
    font-size: 2.8rem;
    font-weight: 900;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .last-updated {
    font-size: 0.9rem;
    color: #888;
    font-weight: 400;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 800;
    margin-top: 50px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

  .profile-info {
    font-family: 'Roboto Mono', monospace;
    background: #f8f8f8;
    padding: 20px;
    border-left: 4px solid #333;
    margin-bottom: 25px;
    
    div {
      margin-bottom: 8px;
    }
    
    span {
      font-weight: bold;
      color: #555;
    }
  }

  a {
    color: #4477cc;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const AboutPage = () => {
  const [age, setAge] = useState('0.00000000');

  useEffect(() => {
    const birthDate = new Date('2002-10-03T00:00:00');

    const updateAge = () => {
      const now = new Date();
      const diff = now.getTime() - birthDate.getTime();
      const ageValue = diff / (1000 * 60 * 60 * 24 * 365.25);
      setAge(ageValue.toFixed(8));
      requestAnimationFrame(updateAge);
    };

    const animFrame = requestAnimationFrame(updateAge);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <Layout>
      <Container>
        <AboutWrapper>
          <h2>About <span className="last-updated">🔄 Last updated: 2026/03/4</span></h2>

          <section>
            <h3>このサイトについて</h3>
            <p>
              個人サイト兼ブログサイトです。自分の作品もまとめたりします。<br />
              Gatsby.jsで書き、GitHub Pagesでホスティングをしています。ブログはマークダウン形式で書いたりもします。<br />
              一応オープンソースなので、<a href="https://github.com/Konezunko/Konezunko" target="_blank" rel="noopener noreferrer">GitHubのリポジトリ</a>からソースコード等を見ることができます。<br />
              その他の詳しい技術等はリポジトリのREADMEをご覧ください。
            </p>
          </section>

          <section id="profile">
            <h3>Profileなど</h3>
            <div className="profile-info">
              <div><span>Name:</span> Hiro.exe</div>
              <div><span>Age:</span> {age}</div>
              <div><span>Birthday:</span> 2002/10/03</div>
            </div>
            <p>
              Hiro.exeというHNで活動しています。北海道在住（春から北大院）です。<br />
              プログラミングが好きです。基礎はほぼ全ての言語を扱えそう。<br />
              よくゲームプログラミングをやります。主にC#を使います。Web関係の技術も好きです。このサイトをデザインも込みで作れる程度の能力はあります。<br />
              それと、最近は動画編集のお仕事もやってます。
            </p>
          </section>

          <section id="skills">
            <h3>Skills</h3>
            <p>
              React / Gatsby.js / Next.js / Node.js / Claude Code / Python / Unity (C#) / Arduino / NoSQL (MongoDB) など。<br />
              最近はAIを活用した開発に力を入れています。
            </p>
          </section>
        </AboutWrapper>
      </Container>
    </Layout>
  );
};

export default AboutPage;
