import { render, screen, fireEvent, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import App from './App';

afterEach(() => {
    cleanup();
})

test('render with default state', () => {
    const { container } = render(<App />);
    expect(screen.getByTestId('Register')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
})

test('render when hamburgur button click', () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByTestId('HamburgerButton'));
    expect(screen.getByTestId('Menu')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
})