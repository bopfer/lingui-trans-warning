import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { I18nProvider } from '@lingui/react'

import { App } from './App';

ReactDOM.render(
  <I18nProvider language="en">
    <App />
  </I18nProvider>,
  document.getElementById('root')
);
