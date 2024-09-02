import styled from 'styled-components';

export const Title = styled.div`
  margin-top: 130px;
  margin-bottom: 67px;

  color: #282828;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.72px;
`;

export const Container = styled.div`
  width: 1560px;
  max-height: 1400px;

  margin-bottom: 60px;

  .my-masonry-grid {
    display: flex;
    margin-left: -20px; /* 열 간격 조정 */
    width: auto;
  }

  .my-masonry-grid_column {
    padding-left: 20px; /* 열 간격 조정 */
    background-clip: padding-box;

    display: flex;
    flex-direction: column;
    gap: 20px;

    margin: 0;
  }
`;
