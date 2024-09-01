import styled from 'styled-components';

export const Button = styled.div`
  width: ${(props) => props.width || '400px'};
  height: ${(props) => props.height || '50px'};
  border-radius: 6px;

  background-color: #282828;
  color: #fafafa;

  font-size: ${(props) => props.fontsize || '16px'};
  font-weight: 500;
  line-height: 20.03px;
  letter-spacing: -0.03em;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;
  cursor: pointer;
`;
