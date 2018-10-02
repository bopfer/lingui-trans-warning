import * as React from 'react';
import { Trans, withI18n, withI18nProps } from '@lingui/react';

interface AppProps extends withI18nProps { }

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