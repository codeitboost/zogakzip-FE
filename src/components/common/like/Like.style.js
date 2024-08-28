import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 188px;
  height: 52px;

  border-radius: 6px;
  border: 1px solid #282828;
  background: #fafafa;

  color: #282828;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.48px;

  * {
    margin: 0;
  }

  user-select: none;
`;
