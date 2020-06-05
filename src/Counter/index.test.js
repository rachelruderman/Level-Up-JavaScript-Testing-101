import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Counter from './index';

test('<Counter/>', () => {
    const { debug, getByTestId } = render(<Counter/>);
    debug();
    const element = getByTestId('counter-button');
    expect(element.tagName).toBe('BUTTON');
    expect(element.textContent).toBe('0');
})