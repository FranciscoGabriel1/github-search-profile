import styled from 'styled-components';

export const Wrapper = styled.main<{ center: boolean }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
  padding: 1.5rem;
`;

export const Header = styled.header`
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const SearchControls = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
