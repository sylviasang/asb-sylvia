import { render, screen, fireEvent, getByTestId, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import CardForm from './CardForm';

afterEach(() => {
    cleanup();
})

test('render with props', () => {
    const onClick = jest.fn();
    const { container } = render(<CardForm handleClick={onClick}/>);
    expect(container.firstChild).toMatchSnapshot();
})

test('render when hamburger button click', () => {
    const onClick = jest.fn();
    const { container } = render(<CardForm handleClick={onClick}/>);
    fireEvent.click(screen.getByTestId('HamburgerButton'));
    expect(onClick).toHaveBeenCalled();
})

test('test credit card input', () => {
    const onClick = jest.fn();
    const { container } = render(<CardForm handleClick={onClick}/>);
    const creditCardInput = screen.getByTestId('CreditCardNumber');
    
    fireEvent.change(creditCardInput, {target: {value: 123456789}});

    expect(creditCardInput.value).toBe('123456789')
    expect(screen.queryByText(/This field should be a number/)).toBeNull();

    fireEvent.change(creditCardInput, {target: {value: 'CreditCardNumber'}});

    expect(creditCardInput.value).toBe('CreditCardNumber')
    expect(screen.queryByText(/This field should be a number/)).toBeInTheDocument();
})

test('test cvc input', () => {
    const onClick = jest.fn();
    const { container } = render(<CardForm handleClick={onClick}/>);
    const cvcInput = screen.getByTestId('CVC');
    
    fireEvent.change(cvcInput, {target: {value: 123456789}});

    expect(cvcInput.value).toBe('123456789')
    expect(screen.queryByText(/This field should be a number/)).toBeNull();

    fireEvent.change(cvcInput, {target: {value: 'CreditCardNumber'}});

    expect(cvcInput.value).toBe('CreditCardNumber')
    expect(screen.queryByText(/This field should be a number/)).toBeInTheDocument();

})

test('test expire input', () => {
    const onClick = jest.fn();
    const { container } = render(<CardForm handleClick={onClick}/>);
    const expireInput = screen.getByTestId('Expire');
    
    fireEvent.change(expireInput, {target: {value: '2021-08-29'}});

    expect(expireInput.value).toBe('2021-08-29')
    expect(screen.queryByText(/This field should be a valid date e.g. 2021-08-29/)).toBeNull();

    fireEvent.change(expireInput, {target: {value: 'CreditCardNumber'}});

    expect(expireInput.value).toBe('CreditCardNumber')
    expect(screen.queryByText(/This field should be a valid date e.g. 2021-08-29/)).toBeInTheDocument();
})

test('render when submit button click with uncorrct input values', () => {
    const onClick = jest.fn();
    const { container } = render(<CardForm handleClick={onClick}/>);
    const alertMock = jest.spyOn(window,'alert').mockImplementation(); 

    fireEvent.change(screen.getByTestId('CreditCardNumber'), {target: {value: 'non number input'}});
    fireEvent.change(screen.getByTestId('CVC'), {target: {value: 'non number input'}})
    fireEvent.change(screen.getByTestId('Expire'), {target: {value: 'non date input'}})
    fireEvent.click(screen.getByTestId('Submit'));

    expect(alertMock).toHaveBeenCalledTimes(1);

})
