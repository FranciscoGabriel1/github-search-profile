export interface IRepo {
  id?: number;
  name?: string;
  full_name?: string;
  description?: string;
  owner?: {
    login?: string;
    id?: number;
    avatar_url?: string;
  };
  html_url?: string;
  stargazers_count?: number;
  watchers_count?: number;
  created_at?: string;
  updated_at?: string;
  forks?: string;
  language?: string;
}
