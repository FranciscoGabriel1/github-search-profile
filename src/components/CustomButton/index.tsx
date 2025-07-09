import { JSX } from 'react';
import { useTheme } from 'styled-components';
import { UilImport } from '@iconscout/react-unicons';
import {
  Spinner,
  ButtonContainer,
} from './CustomButton.styles';

// eslint-disable-next-line react-refresh/only-export-components
export enum CustomButtonVariant {
  OUTLINED = 'OUTLINED',
  OUTLINED_LOADING = 'OUTLINED_LOADING',
  OUTLINED_DOWNLOAD = 'OUTLINED_DOWNLOAD',
  OUTLINED_DOWNLOAD_LOADING = 'OUTLINED_DOWNLOAD_LOADING',
  CONTAINED = 'CONTAINED',
  CONTAINED_LOADING = 'CONTAINED_LOADING',
  CONTAINED_DOWNLOAD = 'CONTAINED_DOWNLOAD',
  CONTAINED_DOWNLOAD_LOADING = 'CONTAINED_DOWNLOAD_LOADING',
  DISABLED = 'DISABLED',
}

interface CustomButtonProps {
  variant?: CustomButtonVariant;
  title: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export const CustomButton = ({
  variant = CustomButtonVariant.CONTAINED,
  title,
  onClick,
  disabled = false,
}: CustomButtonProps): JSX.Element => {
  const theme = useTheme();
  const variantKey = variant.toLowerCase();
  const isDownload = variantKey.includes('download');
  const isLoading  = variantKey.includes('loading');

  const textColor = variantKey.includes('contained')
    ? theme.colors.white
    : theme.colors.text;

  const bgColor = variantKey.includes('contained')
    ? theme.colors.primary
    : theme.colors.background;

  const borderColor = theme.colors.primary;

  const spinnerColor = textColor;

  const handleClick = () => {
    if (!isLoading && !disabled && onClick) {
      onClick();
    }
  };

  return (
    <ButtonContainer
      onClick={handleClick}
      disabled={disabled || isLoading}
      variant={variant}
      textColor={textColor}
      bgColor={bgColor}
      borderColor={borderColor}
    >
      {isLoading ? (
        <Spinner color={spinnerColor} />
      ) : (
        <>
          {isDownload && <UilImport size={18} color={textColor} />}
          {title}
        </>
      )}
    </ButtonContainer>
  );
};

export default CustomButton;
