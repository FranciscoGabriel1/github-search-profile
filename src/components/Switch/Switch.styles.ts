import styled from 'styled-components';

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 52px;
  height: 28px;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  &:focus + span {
    box-shadow: 0 0 2px ${({ theme }) => theme.colors.primary};
  }
  &:checked + span:before {
    transform: translateX(24px);
  }
`;

export const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0; left: 0;
  right: 0; bottom: 0;
  background-color: #ccc;
  border-radius: 28px;
  transition: 0.2s;

  &:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    transition: 0.2s;
  }
`;
