import styled from 'styled-components';

export const Container = styled.div`
  width: 375px;
  padding: 20px;

  color: var(--black-black_282828, #282828);
  font-family: 'Spoqa Han Sans Neo';

  border-radius: 12px;
  border: 1px solid #ddd;
  background-color: #fafafa;

  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  margin-bottom: 20px;
`;

export const Info = styled.div`
  margin: 0px;
  div {
    margin: 0px;
  }

  display: flex;
  gap: 10px;

  color: #b8b8b8;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.42px;
`;

export const Day = styled.div`
  color: #282828;
`;

export const Public = styled.div`
  color: #8d8d8d;
`;

export const Title = styled.div`
  margin: 20px 0;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
`;

export const Name = styled.div`
  margin-bottom: 10px;

  font-weight: 700;
`;

export const Content = styled.div``;

export const Count = styled.div`
  margin: 0px;
  div {
    margin: 0px;
  }

  display: flex;
  gap: 40px;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.42px;
`;

export const Badge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const BadgeTitle = styled.div`
  color: #b8b8b8;
  font-size: 12px;
`;

export const BadgeCount = styled.div``;

export const Memory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MemoryTitle = styled.div`
  color: #b8b8b8;
  font-size: 12px;
`;

export const MemoryCount = styled.div``;

export const Like = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const LikeTitle = styled.div`
  color: #b8b8b8;
  font-size: 12px;
`;

export const LikeCount = styled.div`
  display: flex;
  gap: 5px;
`;
