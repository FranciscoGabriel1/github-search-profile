import { JSX } from 'react';
import { IUser } from '@/models/IUser';
import * as S from './UserInfo.styles';

interface UserInfoProps {
  user: IUser;
}

export default function UserInfo({ user }: UserInfoProps): JSX.Element {
  return (
    <S.Box>
      <S.Avatar src={user.avatar_url} alt={user.login} />
      <S.Meta>
        <h2>{user.name ?? user.login}</h2>
        <span>
          {user.followers} followers • {user.following} following
        </span>
        {user.email && <span>{user.email}</span>}
        {user.bio && <span>{user.bio}</span>}
      </S.Meta>
    </S.Box>
  );
}
