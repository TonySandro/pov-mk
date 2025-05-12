import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AddCourse from './addCourse';

const mockConsole = jest.spyOn(console, 'log').mockImplementation(() => {});

describe('AddCourse component', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<AddCourse />);
  });

  it('Ensure that the form is sent with valid data', async () => {
    fireEvent.input(screen.getByLabelText(/título/i), {
      target: { value: 'Curso de Testes' },
    });
    fireEvent.input(screen.getByLabelText(/descrição/i), {
      target: { value: 'Aprenda a testar componentes React.' },
    });
    fireEvent.input(screen.getByLabelText(/preço/i), {
      target: { value: '99.99' },
    });
    fireEvent.input(screen.getByLabelText(/url da imagem/i), {
      target: { value: 'https://exemplo.com/imagem.jpg' },
    });

    fireEvent.click(screen.getByRole('button', { name: /adicionar curso/i }));

    await waitFor(() => {
      expect(mockConsole).toHaveBeenCalledWith('Curso adicionado:', {
        title: 'Curso de Testes',
        description: 'Aprenda a testar componentes React.',
        price: 99.99,
        imageUrl: 'https://exemplo.com/imagem.jpg',
        modules: [],
      });
    });
  });
});
