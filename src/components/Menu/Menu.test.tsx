import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Menu from './Menu';

afterEach(() => {
    cleanup();
})

test('render with props', () => {
    const onClick = jest.fn();
    const { container } = render(<Menu handleClick={onClick}/>);
    expect(container.firstChild).toMatchSnapshot();
})

test('render when arrow button click', () => {
    const onClick = jest.fn();
    const { container } = render(<Menu handleClick={onClick}/>);
    fireEvent.click(screen.getByTestId('ArrowBack'));
    expect(onClick).toHaveBeenCalled();
})