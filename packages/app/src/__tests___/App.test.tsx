import * as React from 'react';
import { render } from '../utils/testing';

import { App } from '../App';

it('should render Trans', () => {
  const { getByText, debug } = render(
    <App />
  );
  debug();
  expect(getByText('Testing Trans Component')).toBeTruthy();
});
