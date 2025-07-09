import styled from 'styled-components';

export const HeaderContent = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin: 0.5rem 0 0.25rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.text};
  }
  p {
    margin: 0;
    font-size: 1rem;
    color: #6d7891;
  }
`;

export const ModalBody = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const OwnerSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h3 {
    margin: 0;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.text};
  }
  p {
    margin: 0;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const StatsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
`;
