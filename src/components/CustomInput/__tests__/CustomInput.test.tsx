import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import {theme} from '@/styles/theme';          
import CustomInput from '..';

describe('<CustomInput />', () => {
  it('exibe placeholder e dispara onChange', () => {
    const handleChange = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <CustomInput
          placeholder="Buscar usuário…"
          value=""
          onChange={handleChange}
        />
      </ThemeProvider>
    );

    const input = screen.getByPlaceholderText(/buscar usuário/i);
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'octocat' } });
    expect(handleChange).toHaveBeenCalledWith('octocat');
  });
});
