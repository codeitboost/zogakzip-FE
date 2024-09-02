import styled from 'styled-components';

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
  }
`;
