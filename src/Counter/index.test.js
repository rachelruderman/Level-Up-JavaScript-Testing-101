import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Counter from './index';

test('<Counter/>', () => {
    const wrapper = render(<Counter/>);
    wrapper.debug();
    console.log(wrapper.getByText('0').textContent);
})