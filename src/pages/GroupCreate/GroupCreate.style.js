import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    color: #282828;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.42px;

    border-radius: 6px;
    border: 1px solid #ddd;
    background-color: #fafafa;

    &::placeholder {
      color: #b8b8b8;
    }
  }
`;

export const Title = styled.div`
  color: #282828;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.72px;

  margin: 60px 0;
`;

export const Intro = styled.div`
  margin-bottom: 40px;
`;

export const IntroTitle = styled.div`
  color: #282828;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.48px;

  margin-bottom: 10px;
`;

export const IntroField = styled.textarea`
  width: 400px;
  height: 120px;

  padding: 15px 20px;

  resize: none;
`;

export const Public = styled.div`
  width: 400px;
  margin-bottom: 40px;
`;

export const PublicTitle = styled.div`
  color: #282828;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.48px;

  margin-bottom: 20px;
`;

export const PublicSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  div {
    margin: 0;
  }
`;

export const PublicSelectState = styled.div`
  color: #282828;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.42px;
`;
