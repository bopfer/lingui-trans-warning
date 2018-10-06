import * as React from 'react';
import { renderWrapper } from '../utils/testing';

import { Router } from '@reach/router';
import { App } from '../App';
import { AppContextConsumer, AppContext } from '../AppContext';

it('should render Trans', () => {
  const { getByText, debug } = renderWrapper({
    node: (
      <AppContextConsumer>
        {(appContext: AppContext) => (
          <Router>
            <App path="/" appContext={appContext} />
          </Router>
        )}
      </AppContextConsumer>
    )
  });
  debug();
  expect(getByText('Testing Trans Component')).toBeTruthy();
});
