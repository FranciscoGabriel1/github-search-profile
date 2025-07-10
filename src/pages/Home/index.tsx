import { JSX, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';

import githubAnimation from '@/assets/animations/githublogo.json';
import * as S from './Home.styles';
import CustomInput from '@/components/CustomInput';
import CustomButton, { CustomButtonVariant } from '@/components/CustomButton';
import UserList from '@/components/UserList';
import UserInfo from '@/components/UserInfo';
import RepoSort from '@/components/RepoSort';
import ListResultSearch from '@/components/ListResultSearch';
import { useUserContext } from '@/context/UserContext';
import { useAnimation } from '@/context/AnimationContext';
import Switch from '@/components/Switch';

export default function Home(): JSX.Element {
  const [input, setInput] = useState('');
  const {
    usersList,
    searchUsers,
    user,
    fetchUser,
    loading,
    searchMade,
    clearSearch
  } = useUserContext();

  const { enabled, toggle } = useAnimation();
  const navigate = useNavigate();

  const handleSearch = async (): Promise<void> => {
    const q = input.trim();
    if (!q) return;
    await searchUsers(q);
  };

  const handleSelectUser = async (login: string) => {
    await fetchUser(login);
    setInput('');
    navigate('/');
  };

  const handleReset = (): void => {
    clearSearch();
    setInput('');
    navigate('/');
  };

  return (
    <S.Wrapper centered={!searchMade}>
      <S.AnimationToggle>
        <Switch
          checked={enabled}
          onChange={toggle}
          aria-label="Toggle background animation"
        />
      </S.AnimationToggle>

      <S.Header centered={!searchMade}>
        <S.Title onClick={handleReset}>
          <Lottie
            animationData={githubAnimation}
            loop
            autoplay
            style={{ width: 50, height: 50 }}
          />
          GitHub User Search
        </S.Title>

        <S.SearchControls>
          <CustomInput
            value={input}
            onChange={setInput}
            placeholder="Search GitHub user"
            onSubmit={handleSearch}
          />
          <CustomButton
            title="Search"
            onClick={handleSearch}
            variant={
              loading
                ? CustomButtonVariant.CONTAINED_LOADING
                : CustomButtonVariant.CONTAINED
            }
            isLoading={loading}
          />
        </S.SearchControls>
      </S.Header>

      {usersList.length > 0 && !user && (
        <UserList users={usersList} onSelect={handleSelectUser} />
      )}

      {user && <UserInfo user={user} />}

      {!loading && user && <RepoSort />}
      {!loading && user && <ListResultSearch />}
    </S.Wrapper>
  );
}
