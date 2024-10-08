import styled from 'styled-components';

export const Tab = styled.div`
  display: inline-block;
  height: 45px;
  border-radius: 22.5px;

  background-color: ${({ isActive }) => (isActive ? '#282828' : 'none')};
  color: ${({ isActive }) => (isActive ? '#fafafa' : '#282828')};

  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.42px;

  text-align: center;
  padding: 13px 20px;

  user-select: none;
  cursor: pointer;
`;
