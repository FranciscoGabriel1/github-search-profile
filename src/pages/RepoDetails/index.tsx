import { JSX, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GithubService } from '@/services/GithubService';
import { IRepo } from '@/models/IRepo';
import { formatIsoDateToBrDateTime } from '@/utils';
import {
  UilStar,
  UilEye,
  UilArrowLeft
} from '@iconscout/react-unicons';
import * as S from './RepoDetails.styles';
import { AxiosHttpClient } from '@/modules/ioc/HttpClient';
import SkeletonCards from '@/components/SkeletonCards';

export default function RepoDetails(): JSX.Element {
  const { owner, repo } = useParams();
  const [data, setData] = useState<IRepo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!owner || !repo) return;
    const svc = new GithubService(new AxiosHttpClient());

    (async () => {
      try {
        const details = await svc.getRepo(owner, repo);
        setData(details);
      } finally {
        setLoading(false);
      }
    })();
  }, [owner, repo]);

 if (loading) {
  return (
    <S.Wrapper>
      <SkeletonCards />
    </S.Wrapper>
  );
}
  if (!data) return <S.Wrapper><p>Repositório não encontrado.</p></S.Wrapper>;

  return (
    <S.Wrapper>
      <S.BackLink>
        <Link to="/" aria-label="Voltar" title='Voltar'>
          <UilArrowLeft size={24} />
        </Link>
      </S.BackLink>

      <S.Title>{data.full_name}</S.Title>
      {data.description && <S.SubTitle>{data.description}</S.SubTitle>}

      <S.StatsGrid>
        <span><UilStar size={16} /> {data.stargazers_count}</span>
        <span><UilEye size={16} /> {data.watchers_count}</span>
        {data.language && <span>{data.language}</span>}
      </S.StatsGrid>

      <S.Dates>
        <p><strong>Criado em:</strong> {formatIsoDateToBrDateTime(data.created_at)}</p>
        <p><strong>Atualizado em:</strong> {formatIsoDateToBrDateTime(data.updated_at)}</p>
      </S.Dates>

      <S.GithubLink href={data.html_url} target="_blank" rel="noreferrer">
        Ver no GitHub
      </S.GithubLink>
    </S.Wrapper>
  );
}
