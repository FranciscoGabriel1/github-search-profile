import styled from 'styled-components';


export const Wrapper = styled.main`
  max-width: 960px;
  margin: 3rem auto;
  padding: 2rem 1.5rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, .06);

  @media (max-width: 600px) {
    padding: 1.25rem;
    margin: 1.5rem 1rem;
  }
`;

export const BackLink = styled.div`
  margin-bottom: 1.5rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      text-decoration: underline;
    }
  }
`;


export const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  word-break: break-all;
  color: ${({ theme }) => theme.colors.text};
`;

export const SubTitle = styled.p`
  margin: .25rem 0 2rem;
  font-size: .95rem;
`;


export const StatsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1.5rem 0;

  span {
    background: ${({ theme }) => theme.colors.background};
    border-radius: 8px;
    padding: .5rem .75rem;
    font-size: .875rem;
    display: flex;
    align-items: center;
    gap: .35rem;
  }
`;


export const Dates = styled.div`
  font-size: .875rem;
  line-height: 1.6;
  margin-bottom: 2rem;

  strong { font-weight: 600; }
`;


export const GithubLink = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: .75rem 1.25rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    opacity: .9;
  }
`;
