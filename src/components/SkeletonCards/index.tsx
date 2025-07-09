import { JSX } from 'react';
import * as S from './SkeletonCards.styles';

export default function SkeletonCards(): JSX.Element {
  return (
    <S.Container>
      <S.MediaContainer>
        {Array.from({ length: 3 }).map((_, idx) => (
          <S.MediaBox key={idx}>
            <S.RectSkeleton />
            <S.TextSkeleton />
            <S.TextSkeleton width="60%" />
          </S.MediaBox>
        ))}
      </S.MediaContainer>
    </S.Container>
  );
}
