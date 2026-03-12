import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from '@emotion/styled';

const ServicesSection = styled.section`
  background-color: #f8f9fa;
  padding: 100px 0;
`;

const SectionTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 60px;
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

const ServiceCard = styled(Card)`
  border: none;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  text-align: center;
  padding: 30px 20px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  }

  .icon-wrapper {
    font-size: 3rem;
    color: #0044cc;
    margin-bottom: 25px;
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 15px;
  }

  .card-text {
    color: #666;
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const Services = () => {
  const serviceList = [
    {
      title: 'Webサイト制作',
      icon: 'fas fa-laptop-code',
      description: 'Gatsby.jsやReactを使用した、高速でモダンなWebサイト・ランディングページを制作します。レスポンシブ対応も標準で行います。'
    },
    {
      title: 'ゲーム開発',
      icon: 'fas fa-gamepad',
      description: 'Unity (C#) や Unreal Engine 5 を使用したゲーム開発を承ります。2D、3D問わずプロトタイプ制作から対応可能です。'
    },
    {
      title: 'AI・アプリ開発',
      icon: 'fas fa-microchip',
      description: 'AI（LLM）を活用したアプリケーションやツールの開発、業務効率化システムの提案・実装を行います。'
    }
  ];

  return (
    <ServicesSection id="services">
      <Container>
        <div className="text-center">
          <SectionTitle>依頼できること</SectionTitle>
        </div>
        <Row className="g-4">
          {serviceList.map((service, index) => (
            <Col key={index} lg={4} md={6}>
              <ServiceCard>
                <div className="icon-wrapper">
                  <i className={service.icon}></i>
                </div>
                <Card.Title className="card-title">{service.title}</Card.Title>
                <Card.Text className="card-text">{service.description}</Card.Text>
              </ServiceCard>
            </Col>
          ))}
        </Row>
      </Container>
    </ServicesSection>
  );
};

export default Services;
