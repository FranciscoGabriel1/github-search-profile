import { JSX } from 'react';
import { stringToColor } from '@/utils';
import * as S from './CustomAvatar.styles';

interface CustomAvatarProps {
  photo?: string;
  name: string;
  width?: number | string;
  height?: number | string;
}

const CustomAvatar = ({
  photo,
  name,
  width,
  height,
}: CustomAvatarProps): JSX.Element => {
  const defaultSize = 50;
  const mobileSize = 38;

  const customVal = width ?? height;
  const hasCustomSize = customVal !== undefined;
  const customSize =
    typeof customVal === 'number' ? `${customVal}px` : customVal;

  const initials = name
    .split(' ')
    .map(p => p[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <S.AvatarContainer
      bg={stringToColor(name)}
      defaultSize={defaultSize}
      mobileSize={mobileSize}
      hasCustomSize={hasCustomSize}
      customSize={customSize}
    >
      {photo ? <S.AvatarImage src={photo} alt={name} /> : initials}
    </S.AvatarContainer>
  );
};

export default CustomAvatar;
