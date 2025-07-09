import styled from 'styled-components';

export const AvatarContainer = styled.div<{
  bg: string;
  defaultSize: number;
  mobileSize: number;
  hasCustomSize: boolean;
  customSize?: string;
}>`
  width: ${({ hasCustomSize, customSize, defaultSize }) =>
    hasCustomSize ? customSize : `${defaultSize}px`};
  height: ${({ hasCustomSize, customSize, defaultSize }) =>
    hasCustomSize ? customSize : `${defaultSize}px`};
  background-color: ${({ bg }) => bg};
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;

  @media (max-width: 1300px) {
    width: ${({ hasCustomSize, customSize, mobileSize }) =>
      hasCustomSize ? customSize : `${mobileSize}px`};
    height: ${({ hasCustomSize, customSize, mobileSize }) =>
      hasCustomSize ? customSize : `${mobileSize}px`};
  }
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
