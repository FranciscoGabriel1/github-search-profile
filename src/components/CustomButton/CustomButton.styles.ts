import styled, { keyframes } from 'styled-components';
import { CustomButtonVariant } from '.';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Spinner = styled.div<{ color: string }>`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top-color: ${({ color }) => color};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const ButtonContainer = styled.button<{
  variant: CustomButtonVariant;
  textColor: string;
  bgColor: string;
  borderColor: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0.5rem 1rem;
  font-family: inherit;
  font-weight: 700;
  font-size: 1rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;
  
  color: ${({ textColor }) => textColor};
  background-color: ${({ bgColor }) => bgColor};
  border: 1px solid ${({ borderColor }) => borderColor};

  &:hover:not(:disabled) {
    opacity: 0.9;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
