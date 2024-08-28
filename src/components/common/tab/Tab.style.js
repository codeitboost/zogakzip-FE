import styled from 'styled-components';

export const Tab = styled.div`
  display: inline-block;
  height: 45px;
  border-radius: 22.5px;

  background-color: ${(props) => (props.state ? '#282828' : 'none')};
  color: ${(props) => (props.state ? '#fafafa' : '#282828')};

  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.42px;

  text-align: center;
  padding: 13px 20px;

  user-select: none;
`;
