import React from 'react';
import Layout from '../components/Layout';
import { Container } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';

const WorksWrapper = styled.div`
  padding: 80px 0;
  color: #333;
  font-family: 'Inter', sans-serif;

  h2 {
    font-size: 2.8rem;
    font-weight: 900;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 800;
    margin-top: 50px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
  }

  .works-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
  }

  .work-item {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    .work-content {
      padding: 20px;
    }

    h4 {
      font-weight: 700;
      margin-bottom: 10px;
    }

    p {
      color: #666;
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .video-wrapper {
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
      background: #000;
      aspect-ratio: 16 / 9;
      
      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

const WorksPage = () => {
  return (
    <Layout>
      <Container>
        <WorksWrapper>
          <h2>Works</h2>
          <p>
            これまでに制作したプロジェクトの一覧です。
          </p>

          <div className="works-grid">
            <div className="work-item">
              <div className="work-content">
                <h4>MUROPYON 3D</h4>
                <p>3Dアクションゲームのプロジェクトです。Unreal Engine5を使用して開発されています。</p>
                <div className="video-wrapper">
                  <video autoPlay loop muted playsInline>
                    <source src="/videos/muropyon3d.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            <div className="work-item">
              <div className="work-content">
                <h4>Zombie Survival</h4>
                <p>サバイバルホラーゲームのプロトタイプです。AIとリソース管理に焦点を当てています。Unreal Engine5を使用して開発されています。</p>
                <div className="video-wrapper">
                  <video autoPlay loop muted playsInline>
                    <source src="/videos/Zombie Survival.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            <div className="work-item">
              <div className="work-content">
                <h4>MUROPYON GAME</h4>
                <p>僕が大学二年の時に初めて開発したゲームです。Unityで作られています。レトロスタイルの2Dプラットフォーマーです。ピクセルアートとシンプルな操作性を追求しました。</p>
                <div className="video-wrapper">
                  <video autoPlay loop muted playsInline>
                    <source src="/videos/MUROPYON GAME.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            <div className="work-item">
              <div className="work-content">
                <h4>学内落とし物アプリ</h4>
                <p style={{ marginBottom: '20px' }}>学内で見つかった落とし物を管理しいつでも見られるようにしたアプリです。貴重品についてはプライバシーに配慮しながら開発しました。</p>
                <div className="video-wrapper" style={{ backgroundColor: '#f0f0f0' }}>
                  <video autoPlay loop muted playsInline style={{ objectFit: 'contain' }}>
                    <source src="/videos/otoshimono.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            <div className="work-item">
              <div className="work-content">
                <h4>基幹業務アプリ</h4>
                <p style={{ marginBottom: '20px' }}>食品会社にて基幹業務アプリの開発に携わりました。</p>
                <div className="image-wrapper">
                  <StaticImage
                    src="../images/No_Image.png"
                    alt="No Image"
                    placeholder="blurred"
                    layout="constrained"
                    aspectRatio={16 / 9}
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
            <div className="work-item">
              <div className="work-content">
                <h4>医療機関向けAIマニュアルアプリ</h4>
                <p style={{ marginBottom: '20px' }}>現在開発中の医療機関向けAIマニュアルアプリで、私の父が監修しています。</p>
                <div className="image-wrapper">
                  <StaticImage
                    src="../images/medical.png"
                    alt="医療機関向けAIマニュアルアプリ"
                    placeholder="blurred"
                    layout="constrained"
                    aspectRatio={16 / 9}
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </WorksWrapper>
      </Container>
    </Layout>
  );
};

export default WorksPage;
