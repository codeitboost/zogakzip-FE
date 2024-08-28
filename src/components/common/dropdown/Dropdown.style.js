import styled from 'styled-components';

export const Container = styled.div`
  width: 160px;
  height: 45px;
  padding: 20px;

  border-radius: 6px;
  border: 1px solid #282828;
  background-color: #fafafa;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.div`
  margin: 0;

  color: #282828;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.42px;

  user-select: none;
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
  margin: 0;

  position: relative;
  left: 5px;

  user-select: none;
`;
