import React, {
  createContext,
  JSX,
  useCallback,
  useContext,
  useState,
} from 'react';
import { GithubService } from '@/services/GithubService';
import { IUser } from '@/models/IUser';
import { IRepo } from '@/models/IRepo';
import { RepoSortField } from '@/types/RepoSortField';
import { AxiosHttpClient } from '@/modules/ioc/HttpClient';

export interface UserContextData {
  usersList: IUser[];
  searchUsers: (term: string) => Promise<void>;
  user: IUser | null;
  fetchUser: (username: string) => Promise<void>;

  repos: IRepo[];
  changeSort: (sort: RepoSortField) => Promise<void>;
  sort: RepoSortField;

  loading: boolean;
  error: string | null;
  searchMade: boolean;

  clearSearch: () => void;
}

const UserContext = createContext<UserContextData | undefined>(undefined);

const client = new AxiosHttpClient();
const service = new GithubService(client);

export const UserContextProvider = ({
  children,
}: React.PropsWithChildren<object>): JSX.Element => {
  const [usersList, setUsersList] = useState<IUser[]>([]);
  const [user, setUser] = useState<IUser | null>(null);
  const [repos, setRepos] = useState<IRepo[]>([]);
  const [sort, setSort] = useState<RepoSortField>(RepoSortField.STARS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchMade, setSearchMade] = useState(false);

  const searchUsers = useCallback(async (term: string) => {
    setSearchMade(true);
    setLoading(true);
    setError(null);
    try {
      const items = await service.searchUsers(term);
      setUsersList(items);
      setUser(null);
      setRepos([]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchUser = useCallback(async (username: string) => {
    setLoading(true);
    setError(null);
    try {
      const u = await service.getUser(username);
      const r = await service.getRepos(username, sort);
      setUser(u);
      setRepos(r);
      setUsersList([]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected');
    } finally {
      setLoading(false);
    }
  }, [sort]);

  const changeSort = useCallback(async (newSort: RepoSortField) => {
    if (!user) return;
    setSort(newSort);
    setLoading(true);
    try {
      const sorted = await service.getRepos(user.login, newSort);
      setRepos(sorted);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected');
    } finally {
      setLoading(false);
    }
  }, [user]);

  const clearSearch = () => {
    setUsersList([]);
    setUser(null);
    setRepos([]);
    setSearchMade(false);
    setError(null);
  };

  return (
    <UserContext.Provider value={{
      usersList, searchUsers,
      user, fetchUser,
      repos, sort, changeSort,
      loading, error, searchMade,
      clearSearch,
    }}>
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = (): UserContextData => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUserContext must be used dentro do provider');
  return ctx;
};
