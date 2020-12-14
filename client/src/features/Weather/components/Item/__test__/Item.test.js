import React from 'react';
import ReactDOM from 'react-dom';
import Item from '../index';

const input = {
    applicable_date: '2020-12-12',
    min_temp: 10,
    max_temp: 30
}

test('renders item have data', () => {
    const root = document.createElement('div');
    ReactDOM.render(<Item item={input} />, root);
    expect(root.querySelector('h3').textContent).toBe('Saturday');
    expect(root.querySelector('.min').textContent).toBe('Min: 10');
    expect(root.querySelector('.max').textContent).toBe('Max: 30');
});
