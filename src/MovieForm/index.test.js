import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import MovieForm from './index';

const onSubmit = () => jest.fn();

test('<MovieForm/>', () => {

    const { getByText } = render(
        <MovieForm 
            submitForm={onSubmit}
        />
    );

    const submitButton = getByText('Submit')
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledTimes(1);

})