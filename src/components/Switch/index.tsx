import { JSX } from 'react';
import * as S from './Switch.styles';

interface SwitchProps {
  checked: boolean;
  onChange: () => void;
  'aria-label'?: string;
}

export default function Switch({
  checked,
  onChange,
  'aria-label': ariaLabel = 'toggle',
}: SwitchProps): JSX.Element {
  return (
    <S.SwitchLabel>
      <S.SwitchInput
        type="checkbox"
        checked={checked}
        onChange={onChange}
        aria-label={ariaLabel}
      />
      <S.SwitchSlider />
    </S.SwitchLabel>
  );
}
