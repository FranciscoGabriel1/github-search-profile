import { JSX, ReactNode } from 'react';
import { CardContainer } from './SimpleCard.styles';

interface SimpleCardProps {
  children: ReactNode;
  width?: string | number;
  height?: string | number;
  onClick: () => void;
}

export default function SimpleCard({
  children,
  width = '100%',
  height = 'auto',
  onClick,
}: SimpleCardProps): JSX.Element {
  const isMobile = window.matchMedia('(max-width: 1300px)').matches;

  return (
    <CardContainer
      width={width}
      height={height}
      isMobile={isMobile}
      onClick={onClick}
    >
      {children}
    </CardContainer>
  );
}
