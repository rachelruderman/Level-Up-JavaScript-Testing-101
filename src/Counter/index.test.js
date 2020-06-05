import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Counter from './index';

test('<Counter/>', () => {
    const { debug, getByTestId } = render(<Counter/>);
    debug();
    const button = getByTestId('counter-button');
    expect(button.tagName).toBe('BUTTON');
    expect(button.textContent).toBe('0');

    fireEvent.click(button);
    expect(button.textContent).toBe('1');

})