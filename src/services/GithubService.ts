import { IRepo } from '@/models/IRepo';
import { IUser } from '@/models/IUser';
import { API_URLS } from '@/config/config';
import { RepoSortField } from '@/types/RepoSortField';
import { IHttpClient } from '@/modules/ioc/IHttpClient';

export class GithubService {
  constructor(private http: IHttpClient) { }

  public async getUser(username: string): Promise<IUser> {
    const url = `${API_URLS.GITHUB_BASE}/users/${encodeURIComponent(username)}`;
    return this.http.get<IUser>(url);
  }

  public async getRepos(
    username: string,
    sort: RepoSortField = RepoSortField.STARS
  ): Promise<IRepo[]> {
    const url = `${API_URLS.GITHUB_BASE}/users/${encodeURIComponent(
      username
    )}/repos?per_page=100&sort=${sort}`;
    return this.http.get<IRepo[]>(url);
  }

  public async searchRepositories(query: string): Promise<IRepo[]> {
    const trimmed = query.replace(/\s+/g, '');
    const encoded = encodeURIComponent(trimmed);
    const url = `${API_URLS.GITHUB_REPOSITORIES}?q=${encoded}+in:name`;
    const { items } = await this.http.get<{ items: IRepo[] }>(url);
    return items;
  }

  public async searchUsers(query: string): Promise<IUser[]> {
    const q = query
      .trim()
      .split(/\s+/)
      .map(term => encodeURIComponent(term))
      .join('+');
    const url = [
      `${API_URLS.GITHUB_BASE}/search/users`,
      `?q=${q}+in:login+in:name`,
      `&per_page=100`
    ].join('');

    const { items } = await this.http.get<{ items: IUser[] }>(url);
    return items;
  }

  public async getRepo(owner: string, repo: string): Promise<IRepo> {
    const url = `${API_URLS.GITHUB_BASE}/repos/${owner}/${repo}`;
    return this.http.get<IRepo>(url);
  }
}
