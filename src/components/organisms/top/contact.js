import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import styled from '@emotion/styled';

const ContactSection = styled.section`
  padding: 100px 0;
  background-color: #fff;
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

const FormWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  background: #fdfdfd;
  border-radius: 15px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.03);
`;

const StyledFormLabel = styled(Form.Label)`
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
`;

const StyledFormControl = styled(Form.Control)`
  border: 1px solid #eee;
  padding: 12px 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  
  &:focus {
    border-color: #0044cc;
    box-shadow: 0 0 0 0.25rem rgba(0, 68, 204, 0.1);
  }
`;

const SubmitButton = styled(Button)`
  background-color: #0044cc;
  border: none;
  padding: 12px 30px;
  font-weight: 700;
  border-radius: 50px;
  width: 100%;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #0033aa;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Contact = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    // Formspree handles the submission if we set the action and method.
    // For now, we'll just demonstrate the form.
    // To actually use it, the user would provide a Formspree endpoint.
  };

  return (
    <ContactSection id="contact">
      <Container>
        <div className="text-center">
          <SectionTitle>お問い合わせ</SectionTitle>
          <p className="mb-5 text-muted">制作のご依頼やご相談、メッセージなどお気軽にお送りください。</p>
        </div>
        
        <FormWrapper>
          <Form 
            action="https://formspree.io/f/xqeyqjjq" 
            method="POST"
          >
            <Form.Group controlId="formName">
              <StyledFormLabel>お名前</StyledFormLabel>
              <StyledFormControl 
                type="text" 
                name="name" 
                placeholder="Name" 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <StyledFormLabel>メールアドレス</StyledFormLabel>
              <StyledFormControl 
                type="email" 
                name="email" 
                placeholder="example@mail.com" 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <StyledFormLabel>お問い合わせ内容</StyledFormLabel>
              <StyledFormControl 
                as="textarea" 
                rows={5} 
                name="message" 
                placeholder="Message" 
                required 
              />
            </Form.Group>

            <SubmitButton type="submit">
              送信する
            </SubmitButton>
          </Form>
          
          <div className="mt-4 text-center">
            <small className="text-muted">
              ※送信後の対応に数日かかる場合がございます。あらかじめご了承ください。
            </small>
          </div>
        </FormWrapper>
      </Container>
    </ContactSection>
  );
};

export default Contact;
