import styled from 'styled-components';

export const Container = styled.div``;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 60px;
  margin-bottom: 20px;

  color: #282828;

  div {
    margin: 0;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 20px;

  color: #b8b8b8;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.48px;
`;

export const Writer = styled.div`
  color: #282828;
`;

export const Public = styled.div`
  color: #8d8d8d;
`;

export const Menu = styled.div`
  display: flex;
  gap: 60px;

  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.42px;
`;

export const Edit = styled.div`
  user-select: none;
  cursor: pointer;
`;

export const Delete = styled.div`
  color: #8d8d8d;

  user-select: none;
  cursor: pointer;
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-bottom: 30px;

  div {
    margin: 0;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.9px;
`;

export const Tag = styled.div`
  color: #b8b8b8;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -0.54px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 60px;

  div {
    margin: 0;
  }
`;

export const BottomLeft = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 35px;
`;

export const WriteInfo = styled.div`
  display: flex;
  gap: 10px;

  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.48px;
`;

export const Location = styled.div``;

export const Date = styled.div``;

export const Count = styled.div`
  display: flex;
  gap: 20px;

  color: #8d8d8d;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.42px;
`;

export const Heart = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const BottomRight = styled.div``;

export const Line = styled.div`
  height: 1px;
  background-color: #ddd;
  opacity: 0.5;

  margin-bottom: 60px;
`;
