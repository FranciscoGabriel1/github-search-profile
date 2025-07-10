import styled from 'styled-components';

export const Wrapper = styled.main<{ centered: boolean }>`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ centered }) =>
    centered ? 'center' : 'flex-start'};
  padding: 1.5rem;
`;

export const AnimationToggle = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const Header = styled.header<{ centered: boolean }>`
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: ${({ centered }) => (centered ? 'column' : 'row')};
  align-items: center;
  gap: 1rem;
  margin-bottom: ${({ centered }) => (centered ? '2rem' : '1rem')};

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const SearchControls = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Message = styled.p`
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-style: italic;
`;
