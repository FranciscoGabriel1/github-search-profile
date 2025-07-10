import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  gap: 1rem;

  /* força o grid a ocupar 100% do espaço disponível */
  width: 100%;
  max-width: 960px;      /* opcional */
  margin: 0 auto;

  /* de 1 a N colunas: cada coluna no mínimo 250px, no máximo 1fr */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  /* em telas pequenas, 1 coluna só */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
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
