import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: ${(props) => (props.isInvalid ? '15px' : '40px')};
`;

export const Title = styled.div`
  color: #282828;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.48px;

  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 400px;
  height: 45px;

  padding: 0 20px;

  color: #282828;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.42px;

  border-radius: 6px;
  border: 1px solid #ddd;
  background-color: #fafafa;

  &::placeholder {
    color: #b8b8b8;
  }

  &:focus {
    border-color: ${(props) => (props.isInvalid ? '#FF5757' : '#282828')};
    outline: none; /* 기본 아웃라인 제거 */
  }
`;

export const Error = styled.div`
  margin-top: 10px;

  color: #ff5757;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.36px;
`;
