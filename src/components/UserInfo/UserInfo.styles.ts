import styled from 'styled-components';

export const Box = styled.section`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 2rem 0;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const Meta = styled.div`
  h2 {
    margin: 0 0 0.25rem;
    color: ${({ theme }) => theme.colors.text};
  }
  span {
    display: block;
    font-size: 0.85rem;
  }
`;
