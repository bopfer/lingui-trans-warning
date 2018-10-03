import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import * as React from 'react';
import { render } from 'react-testing-library';
import { RouteComponentProps, createHistory, createMemorySource, LocationProvider } from '@reach/router';
import { I18nProvider } from '@lingui/react';
import { setupI18n } from '@lingui/core';
import { MockedProvider, MockedResponse } from 'react-apollo/test-utils';

import { AppContextProvider } from '../AppContext';

beforeEach(() => {
  jest.resetModules();
});

interface RenderWrapperProps {
  node: React.ReactElement<RouteComponentProps>;
  options?: { container: HTMLElement; baseElement?: HTMLElement };
}

export const renderWrapper = (props: RenderWrapperProps) => {
  const testHistory = createHistory(createMemorySource('/'));
  const i18n = setupI18n();
  const gqlMocks: MockedResponse[] = [];

  return render(
    <AppContextProvider>
      <MockedProvider mocks={gqlMocks}>
        <I18nProvider i18n={i18n} language="en">
          <LocationProvider history={testHistory}>
            {props.node}
          </LocationProvider>
        </I18nProvider>
      </MockedProvider>
    </AppContextProvider>,
    props.options
  );
};

// re-export everything in r-t-l so they can all be imported from this file.
export * from 'react-testing-library';
