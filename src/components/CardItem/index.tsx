import { JSX } from 'react';
import { Link } from 'react-router-dom';
import { IRepo } from '@/models/IRepo';
import SimpleCard from '@/components/SimpleCard';
import { UilBooks } from '@iconscout/react-unicons';
import * as S from './CardItem.styles';
import routesConfig from '@/config/routes';

interface CardItemProps {
  repo: IRepo;
}

const CardItem = ({ repo }: CardItemProps): JSX.Element => {
  if (!repo.owner?.login || !repo.name) return <></>;

  const detailsUrl = routesConfig.REPO_DETAILS
    .replace(':owner', repo.owner.login)
    .replace(':repo', repo.name);

  return (
    <Link to={detailsUrl} style={{ textDecoration: 'none' }}>
      <SimpleCard height={150} onClick={() => {}}>
        <S.HeaderContent>
          <UilBooks size={24} color="#6D7891" />
          <h3>{repo.name}</h3>
          <p>{repo.full_name}</p>
        </S.HeaderContent>
      </SimpleCard>
    </Link>
  );
};

export default CardItem;
