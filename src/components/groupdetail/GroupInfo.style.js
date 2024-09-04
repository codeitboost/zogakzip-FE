import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 60px 0 120px 0;

  position: relative;

  color: #282828;
`;

export const Image = styled.img`
  width: 262px;

  margin-right: 60px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Top = styled.div`
  display: flex;
  gap: 870px;
  margin-bottom: 20px;
`;

export const TopLeft = styled.div`
  display: flex;
  gap: 20px;

  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.48px;
`;

export const TopRight = styled.div`
  display: flex;
  gap: 40px;
`;

export const Middle = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 0;
  margin-bottom: 20px;

  div {
    margin: 0;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.9px;
`;

export const Memory = styled.div`
  display: flex;
  gap: 10px;

  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.54px;
`;

export const Like = styled.div`
  display: flex;
  gap: 10px;

  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.54px;
`;

export const Content = styled.div`
  margin: 0;

  font-size: 18px;
  font-weight: 400;
  letter-spacing: -0.54px;
`;

export const Line = styled.div`
  width: 1560px;
  height: 1px;

  background-color: #ddd;
  opacity: 0.5;
`;

export const Bottom = styled.div`
  display: flex;
  position: absolute;

  bottom: 0;
  right: 0;

  margin: 0;
  div {
    margin: 0;
  }
`;
