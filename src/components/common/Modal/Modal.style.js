import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;
  width: 1120px;
  height: 794px;

  padding: 40px;

  border-radius: 6px;
  background: #fafafa;
`;

export const Title = styled.div`
  color: #282828;
  text-align: center;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.72px;
`;

export const Cancel = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;

  border: none;
`;
