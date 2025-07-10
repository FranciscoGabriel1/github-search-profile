import styled from 'styled-components';

export const IconWrapper = styled.div`
  margin-bottom: 0.75rem;
  display: flex;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    width: 32px;
    height: 32px;
  }
`;

export const Name = styled.h3`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FullName = styled.p`
  margin: 0.25rem 0 0;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
