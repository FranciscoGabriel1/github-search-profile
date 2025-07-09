import styled from 'styled-components';

export const CardContainer = styled.div<{
  width: string | number;
  height: string | number;
  isMobile: boolean;
}>`
  background-color: #fff;
  color: black;
  max-width: ${({ isMobile }) => (isMobile ? '90%' : '80%')};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: 0px 4px 4px rgba(176, 193, 225, 0.25);
  margin: auto;
  border: 1px solid ${({ theme }) => theme.colors.background};
  padding: 0;
  transition: background 0.2s ease;

  &:hover {
    background: #e3eff7;
    cursor: pointer;
  }
`;
