import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import MovieForm from './index';

test('<MovieForm/>', () => {
    const { debug, getByTestId } = render(<MovieForm/>);
    debug();

})