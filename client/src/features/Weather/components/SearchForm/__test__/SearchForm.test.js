import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Search from '../index';

it('renders form search correctly', () => {
    const {queryByTestId, queryByPlaceholderText} = render(<Search />);

    expect(queryByTestId('exampleSearch')).toBeTruthy();
    expect(queryByPlaceholderText('Search')).toBeTruthy();
});

describe('input value form search', () => {
    it('update on change ', function () {
        const {queryByPlaceholderText} = render(<Search />);
        const searchInput = queryByPlaceholderText('Search');

        fireEvent.change(searchInput, {target : {value: 'test'}});

        expect(searchInput.value).toBe('test')
    });
})
