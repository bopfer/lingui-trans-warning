import * as React from 'react';
import { Trans, withI18n, withI18nProps } from '@lingui/react';
import { RouteComponentProps } from '@reach/router';
import { AppContext } from './AppContext';

interface AppProps extends RouteComponentProps, withI18nProps {
  appContext: AppContext;
}

class AppBase extends React.PureComponent<AppProps> {
  public render() {
    return (
      <div>
        <Trans>Testing Trans Component</Trans>
      </div>
    );
  }
}

export const App = withI18n()(AppBase);