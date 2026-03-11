import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import './aboutMe.scss';

const AboutMe = () => {
  return (
    <section id='aboutMe'>
      <Container>
        <div className="about-content">
          <h3 className="section-title">About Me</h3>
          <div className="social-row">
            <a href="https://x.com/taketyan0303" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
            {/* <a href="https://atcoder.jp/users/konezu" target="_blank" rel="noopener noreferrer">
              <StaticImage
                src="../../../images/atcoder-crest.png"
                alt="AtCoder"
                placeholder="blurred"
                layout="fixed"
                width={36}
                height={36}
                style={{ display: 'block' }}
              />
            </a> */}
            <a href="https://github.com/Konezunko/Konezunko" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </div>
          <div className="text-content">
            <p>春から北大大学院に通う予定のただの室工大生です。</p>
            <p>ゲーム開発、Webサイト製作、電子工作などいろいろやっています。</p>
            <p>最近は、ReactやGatsby.js、Aiにハマって勉強していますが、やりたいことが多すぎて方向性が散乱しがちです。</p>
            <p>詳しくはAboutページへ</p>
          </div>
          <div className="btn-row">
            <Link to='/about' className="btn-about">About</Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
