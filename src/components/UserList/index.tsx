import { JSX, useState } from 'react';
import { IUser } from '@/models/IUser';
import * as S from './UserList.styles';

interface UserListProps {
  users: IUser[];
  onSelect: (login: string) => void;
}

const ITEMS_PER_PAGE = 20;

export default function UserList({
  users,
  onSelect,
}: UserListProps): JSX.Element | null {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  if (users.length === 0) {
    return null;
  }

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageItems = users.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const goPrev = () => setCurrentPage(p => Math.max(p - 1, 1));
  const goNext = () => setCurrentPage(p => Math.min(p + 1, totalPages));
  const goTo   = (p: number) => setCurrentPage(p);

  return (
    <>
      <S.List>
        {pageItems.map(u => (
          <S.Item key={u.id} onClick={() => onSelect(u.login)}>
            <img src={u.avatar_url} alt={u.login} />
            <span>{u.login}</span>
          </S.Item>
        ))}
      </S.List>

      {totalPages > 1 && (
        <S.Pagination aria-label="Pagination">
          <button onClick={goPrev} disabled={currentPage === 1}>
            ‹ Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => goTo(page)}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          ))}

          <button onClick={goNext} disabled={currentPage === totalPages}>
            Next ›
          </button>
        </S.Pagination>
      )}
    </>
  );
}
