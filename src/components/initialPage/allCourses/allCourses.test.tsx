import React from 'react';
import { render, screen } from '@testing-library/react';
import AllCourses from './allCourses';
import '@testing-library/jest-dom';

const mockCourses = [
  {
    id: 1,
    title: 'Curso de React',
    description: 'Aprenda React do zero',
    imageUrl: 'react.jpg',
    price: 149.9,
  },
  {
    id: 2,
    title: 'Curso de TypeScript',
    description: 'Domine o TypeScript',
    imageUrl: 'ts.jpg',
    price: 179.9,
  },
];

describe('AllCourses Component', () => {
  it('Ensure the title is displayed', () => {
    render(<AllCourses courses={mockCourses} />);
    const title = screen.getByText(/cursos disponíveis/i);
    expect(title).toBeInTheDocument();
  });

  it('Ensure that the description and price are displayed', () => {
    render(<AllCourses courses={mockCourses} />);
    mockCourses.forEach(course => {
      expect(screen.getByText(course.description)).toBeInTheDocument();
      expect(screen.getByText(`R$ ${course.price}`)).toBeInTheDocument();
    });
  });
});
