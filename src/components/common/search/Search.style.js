import styled from 'styled-components';

export const Container = styled.div`
  width: 1186px;
  height: 45px;
  padding: 10px 20px;

  display: flex;
  gap: 10px;

  border-radius: 6px;
  background-color: #f4f4f4;

  user-select: none;
`;

export const TextField = styled.input`
  width: 1000px;
  height: 25px;
  margin: 0;

  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.42px;
  color: #282828;

  &::placeholder {
    color: #b8b8b8;
  }

  border: none;
  outline: none;
  background-color: #f4f4f4;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin: 0;
`;
