import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 48px;
  height: 24px;

  background-color: ${(props) => (props.state ? '#282828' : '#b8b8b8')};
  border-radius: 12px;
  padding: 2px;
  transition: background-color 0.3s ease;

  cursor: pointer;
`;

export const Circle = styled.div`
  width: 20px;
  height: 20px;

  margin: 0;

  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.state ? 'translateX(24px)' : 'translateX(0)')};
`;
