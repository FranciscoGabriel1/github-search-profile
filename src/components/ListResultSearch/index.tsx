import { JSX } from 'react';
import { useUserContext } from '@/context/UserContext';
import CardItem from '@/components/CardItem';
import SkeletonCards from '@/components/SkeletonCards';
import * as S from './ListResultSearch.styles';

export default function ListResultSearch(): JSX.Element | null {
  const { repos, loading, searchMade } = useUserContext();

  if (!searchMade) return null;

  if (loading) return <SkeletonCards />;

  return (
    <S.GridContainer>
      {repos.map((repo) => (
        <S.CardWrapper key={repo.id}>
          <CardItem repo={repo} />
        </S.CardWrapper>
      ))}

      {repos.length === 0 && (
        <S.NoResults>
          Não há repositórios encontrados para essa pesquisa.
        </S.NoResults>
      )}
    </S.GridContainer>
  );
}
