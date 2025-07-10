import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;

  /* 5 colunas no desktop */
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1200px) {
    /* 4 colunas até 1200px */
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 992px) {
    /* 3 colunas até 992px */
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    /* 2 colunas até 768px */
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    /* 1 coluna até 600px */
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  transition: background 0.2s ease;

  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
  span {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.secondary}20;
  }
`;

export const Pagination = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  margin-top: 1rem;

  button {
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    padding: 0.25rem 0.5rem;
    border-radius: ${({ theme }) => theme.radii.sm};
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &[aria-current='page'] {
      background: ${({ theme }) => theme.colors.primary};
      color: #fff;
    }
  }
`;
