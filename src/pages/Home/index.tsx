import { JSX, useState } from 'react';
import { useNavigate }   from 'react-router-dom';
import { UilGithubAlt }  from '@iconscout/react-unicons';

import * as S from './Home.styles';
import CustomInput from '@/components/CustomInput';
import CustomButton, { CustomButtonVariant } from '@/components/CustomButton';
import ListResultSearch from '@/components/ListResultSearch';
import UserInfo   from '@/components/UserInfo';
import RepoSort   from '@/components/RepoSort';
import { useUserContext } from '@/context/UserContext';

export default function Home(): JSX.Element {
  const [input, setInput] = useState('');
  const {
    fetchUser,
    loading,
    searchMade,
    user,
    clearSearch,          
  } = useUserContext();

  const navigate = useNavigate();

  const handleSearch = async (): Promise<void> => {
    const q = input.trim();
    if (!q) return;
    await fetchUser(q);
  };

  const handleReset = (): void => {
    clearSearch();  
    setInput(''); 
    navigate('/');  
  };

  return (
    <S.Wrapper center={!searchMade}>
      <S.Header>
        <button onClick={handleReset} style={{ all: 'unset', cursor: 'pointer' }}>
          <S.Title>
            <UilGithubAlt size={28} />
            GitHub User Search
          </S.Title>
        </button>

        <S.SearchControls>
          <CustomInput
            label="Pesquisar usuário"
            value={input}
            onChange={setInput}
            onSubmit={handleSearch}
          />

          <CustomButton
            title="Pesquisar"
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

      {user && <UserInfo user={user} />}

      {!loading && user && <RepoSort />}

      <ListResultSearch />
    </S.Wrapper>
  );
}
