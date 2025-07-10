import { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';
import { useAnimation } from '@/context/AnimationContext';

const moveGradient = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const FullscreenGradient = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: linear-gradient(270deg, #ff7e5f, #feb47b, #86a8e7, #91eae4);
  background-size: 800% 800%;
  animation: ${moveGradient} 20s ease infinite;
  z-index: -1;
`;

export function AnimatedBackground({ children }: { children: ReactNode }) {
  const { enabled } = useAnimation();
  return (
    <>
      {enabled && <FullscreenGradient />}
      {children}
    </>
  );
}
