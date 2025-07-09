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
  user: IUser | null;
  repos: IRepo[];
  loading: boolean;
  error: string | null;
  searchMade: boolean;

  sort: RepoSortField;
  changeSort: (newSort: RepoSortField) => Promise<void>;

  fetchUser: (username: string) => Promise<void>;
  searchRepositories: (term: string) => Promise<void>;
  clearSearch: () => void;
}

const UserContext = createContext<UserContextData | undefined>(undefined);

const client = new AxiosHttpClient();
const service = new GithubService(client);

export const UserContextProvider = ({
  children,
}: React.PropsWithChildren<object>): JSX.Element => {
  const [user, setUser] = useState<IUser | null>(null);
  const [repos, setRepos] = useState<IRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchMade, setSearchMade] = useState(false);
  const [sort, setSort] = useState<RepoSortField>(RepoSortField.STARS);

  const searchRepositories = useCallback(async (term: string) => {
    setSearchMade(true);
    setLoading(true);
    setError(null);
    try {
      const results = await service.searchRepositories(term);
      setRepos(results);
      setUser(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error');
    } finally {
      setLoading(false);
    }
  }, []);

  // search user and their repositories
  const fetchUser = useCallback(async (username: string) => {
    setSearchMade(true);
    setLoading(true);
    setError(null);
    try {
      const u = await service.getUser(username);
      const r = await service.getRepos(username, sort);
      setUser(u);
      setRepos(r);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error');
    } finally {
      setLoading(false);
    }
  }, [sort]);

  const changeSort = useCallback(
    async (newSort: RepoSortField) => {
      if (!user) return;
      setSort(newSort);
      setLoading(true);
      try {
        const sorted = await service.getRepos(user.login, newSort);
        setRepos(sorted);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unexpected error');
      } finally {
        setLoading(false);
      }
    },
    [user]
  );

  const clearSearch = () => {
    setUser(null);
    setRepos([]);
    setSearchMade(false);
    setError(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        repos,
        loading,
        error,
        searchMade,
        sort,
        changeSort,
        fetchUser,
        searchRepositories,
        clearSearch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = (): UserContextData => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUserContext must be used within UserContextProvider');
  return ctx;
};
