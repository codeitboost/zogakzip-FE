import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const Logo = styled.img`
  width: 150px;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  text-align: center;
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

export const PasswordInput = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #000;
  }
`;
