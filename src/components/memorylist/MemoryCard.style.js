import styled from 'styled-components';

export const Container = styled.div`
  width: 375px;
  padding: 20px;

  border-radius: 12px;
  border: 1px solid #ddd;
  background: #fafafa;
`;

export const Image = styled.img`
  width: 335px;

  border-radius: 6px;

  margin-bottom: 20px;
`;

export const Top = styled.div`
  display: flex;
  gap: 10px;

  color: #b8b8b8;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.42px;

  margin-bottom: 20px;

  div {
    margin: 0;
  }
`;

export const Name = styled.div`
  color: #282828;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.42px;
`;

export const Public = styled.div``;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-bottom: 25px;

  div {
    margin: 0;
  }
`;

export const Title = styled.div`
  color: #282828;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.48px;
`;

export const Tags = styled.div`
  color: #b8b8b8;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.42px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    margin: 0;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 3px;

  color: #282828;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.36px;
`;

export const Location = styled.div``;

export const Date = styled.div``;

export const Count = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  color: #8d8d8d;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.42px;
`;

export const Like = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
`;
