import React from 'react';
import ReactDOM from 'react-dom';
import List from '../index';

const list = [
    {
        applicable_date: '2020-12-12',
        min_temp: 10,
        max_temp: 30
    },
    {
        applicable_date: '2020-12-13',
        min_temp: 10,
        max_temp: 30
    },
    {
        applicable_date: '2020-12-14',
        min_temp: 10,
        max_temp: 30
    },
    {
        applicable_date: '2020-12-15',
        min_temp: 10,
        max_temp: 30
    },
    {
        applicable_date: '2020-12-16',
        min_temp: 10,
        max_temp: 30
    },
    {
        applicable_date: '2020-12-17',
        min_temp: 10,
        max_temp: 30
    },
];

test('renders list count item toBe 5', () => {
    const root = document.createElement('div');
    ReactDOM.render(<List list={list} />, root);
    expect(root.querySelector('.list-item').childElementCount).toBe(5);
});
