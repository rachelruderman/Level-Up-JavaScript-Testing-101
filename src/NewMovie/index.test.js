import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import NewMovie from './index';

test('<NewMovie/>', () => {
    const { debug, getByTestId } = render(<NewMovie/>);
    debug();

})