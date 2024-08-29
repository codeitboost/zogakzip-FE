import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.div`
  color: #282828;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.48px;

  margin-bottom: 10px;
`;

export const Input = styled.textarea`
  width: 400px;
  height: 120px;

  padding: 15px 20px;

  resize: none;

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
`;
