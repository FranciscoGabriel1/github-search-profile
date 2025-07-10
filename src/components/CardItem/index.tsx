import { JSX } from 'react';
import { Link } from 'react-router-dom';
import { IRepo } from '@/models/IRepo';
import SimpleCard from '@/components/SimpleCard';
import { UilBooks } from '@iconscout/react-unicons';
import { IconWrapper, Name, FullName } from './CardItem.styles';
import routesConfig from '@/config/routes';

interface CardItemProps {
  repo: IRepo;
}

export default function CardItem({ repo }: CardItemProps): JSX.Element {
  if (!repo.owner?.login || !repo.name) return <></>;

  const detailsUrl = routesConfig.REPO_DETAILS
    .replace(':owner', repo.owner.login)
    .replace(':repo', repo.name);

  return (
    <Link to={detailsUrl} style={{ textDecoration: 'none' }}>
      <SimpleCard height={150}>
        <IconWrapper>
          <UilBooks />
        </IconWrapper>
        <Name title={repo.name}>{repo.name}</Name>
        <FullName title={`${repo.owner.login}/${repo.name}`}>
          {repo.owner.login}/{repo.name}
        </FullName>
      </SimpleCard>
    </Link>
  );
}
