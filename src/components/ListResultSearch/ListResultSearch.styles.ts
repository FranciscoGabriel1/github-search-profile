import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
`;

export const NoResults = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  padding: 2rem 0;
`;
