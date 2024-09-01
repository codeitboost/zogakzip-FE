import styled from 'styled-components';

export const Container = styled.div`
  width: 160px;
  height: 45px;
  padding: 20px;

  border-radius: 6px;
  border: 1px solid #282828;
  background-color: #fafafa;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  cursor: pointer;
`;

export const Text = styled.div`
  margin: 0;

  color: #282828;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.42px;

  user-select: none;
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
  margin: 0;

  position: relative;
  left: 5px;

  user-select: none;
`;

export const Options = styled.ul`
  position: absolute;
  top: 45px;
  left: 0;
  width: 100%;

  border-radius: 6px;
  box-shadow: 0 0 5px #b8b8b8;

  padding: 3px;
  margin: 0;

  list-style: none;
  z-index: 10;
`;

export const Option = styled.li`
  padding: 10px 20px;
  font-size: 14px;
  color: #282828;

  border-radius: 6px;

  &:hover {
    background-color: #eaeaea;
  }

  user-select: none;
  cursor: pointer;
`;
