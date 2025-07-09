import styled, { keyframes } from 'styled-components';

/** Animação de pulsar para o skeleton */
const pulse = keyframes`
  0% { background-color: #eee; }
  50% { background-color: #ddd; }
  100% { background-color: #eee; }
`;

export const Container = styled.div`
  overflow: hidden;
`;

export const MediaContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 1.25rem;
  margin: 2rem 0;
`;

export const MediaBox = styled.div`
  flex: 0 0 auto;
  width: 210px;
`;

export const RectSkeleton = styled.div`
  width: 210px;
  height: 118px;
  border-radius: 4px;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

export const TextSkeleton = styled.div<{ width?: string }>`
  width: ${({ width }) => width ?? '100%'};
  height: 1em;
  margin-top: 0.5rem;
  border-radius: 4px;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;
