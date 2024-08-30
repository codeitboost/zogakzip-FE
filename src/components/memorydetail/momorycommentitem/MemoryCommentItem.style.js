import styled from 'styled-components';

export const Container = styled.div`
  color: #282828;
  font-size: 16px;
  font-weight: 500;
`;

export const Info = styled.div`
  display: flex;
  gap: 10px;

  margin-bottom: 15px;

  div {
    margin: 0;
  }
`;

export const Name = styled.div``;

export const Date = styled.div`
  color: #b8b8b8;
  font-weight: 400;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;

  div {
    margin: 0;
  }
`;

export const Comment = styled.div``;

export const Edit = styled.div`
  display: flex;
  gap: 20px;
`;

export const Line = styled.div`
  width: 1560px;
  height: 1px;

  background-color: #ddd;
  opacity: 0.5;

  margin-bottom: 20px;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
`;
