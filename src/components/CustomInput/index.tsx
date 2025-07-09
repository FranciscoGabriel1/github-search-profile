import { ChangeEvent, KeyboardEvent, JSX } from 'react';
import { useTheme } from 'styled-components';
import { UilSearch, UilTimes } from '@iconscout/react-unicons';
import {
  Container,
  Label,
  InputWrapper,
  InputField,
  StartIcon,
  ClearButton,
} from './CustomInput.styles';

interface CustomInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onSubmit?: () => void;
}

export default function CustomInput({
  label,
  value,
  onChange,
  placeholder,
  onSubmit,
}: CustomInputProps): JSX.Element {
  const theme = useTheme();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSubmit) onSubmit();
  };

  const clear = () => onChange('');

  return (
    <Container>
      <Label>{label}</Label>
      <InputWrapper>
        <StartIcon>
          <UilSearch size={20} color={theme.colors.text} />
        </StartIcon>

        <InputField
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        {value && (
          <ClearButton onClick={clear} aria-label="Clear input">
            <UilTimes size={20} color={theme.colors.text} />
          </ClearButton>
        )}
      </InputWrapper>
    </Container>
  );
}
