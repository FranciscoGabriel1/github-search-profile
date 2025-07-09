import { JSX } from 'react';
import { useUserContext } from '@/context/UserContext';
import { RepoSortField } from '@/types/RepoSortField';
import * as S from './RepoSort.styles';

export default function RepoSort(): JSX.Element | null {
  const { repos, sort, changeSort, loading } = useUserContext();
  if (!repos.length) return null;

  return (
    <S.Select
      disabled={loading}
      value={sort}
      onChange={e => changeSort(e.target.value as RepoSortField)}
    >
      <option value={RepoSortField.STARS}>Stars ↓</option>
      <option value={RepoSortField.NAME}>Name ↑</option>
      <option value={RepoSortField.UPDATED}>Updated ↓</option>
    </S.Select>
  );
}
