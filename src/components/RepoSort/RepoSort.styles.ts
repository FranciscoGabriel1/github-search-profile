import styled from 'styled-components';

export const Select = styled.select`
  margin-bottom: 1.5rem;
  padding: .5rem .75rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
