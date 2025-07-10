import styled from 'styled-components';

export const CardContainer = styled.div<{
  width: string | number;
  height: string | number;
  isMobile: boolean;
}>`
  background-color: #fff;
  color: ${({ theme }) => theme.colors.text};
  width: ${({ width }) => width};
  min-height: ${({ height }) => height};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid ${({ theme }) => theme.colors.background};
  padding: 1rem;                /* espaço interno maior */
  margin: 0 auto;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  display: flex;                /* flex para centralizar conteúdo */
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }

  @media (max-width: 600px) {
    padding: 0.75rem;
  }
`;
