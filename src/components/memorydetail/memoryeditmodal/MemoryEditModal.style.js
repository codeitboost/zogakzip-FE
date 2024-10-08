import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;
  padding: 0 40px;
`;

export const Row = styled.div`
  display: flex;
  gap: 80px;
`;

export const Line = styled.div`
  width: 1px;

  background-color: #ddd;
  opacity: 0.5;
`;

export const LastLine = styled.div`
  width: 1px;
  height: 185px;

  background-color: #ddd;
  opacity: 0.5;
`;

export const Button = styled.div`
  margin-top: 10px;
`;

export const Error = styled.div`
  color: red;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.42px;

  position: relative;
  bottom: 35px;
`;
