import * as React from 'react';

interface ProviderState {
  isAuthenticated: boolean;
}

interface AppContext extends ProviderState {
  setAuthenticated(): void;
}

const notImplemented = () => { throw new Error('Not Implemented'); };
const defaultContext: AppContext = {
  isAuthenticated: false,
  setAuthenticated: notImplemented
};

const Context = React.createContext(defaultContext);

class AppContextProvider extends React.PureComponent<{}, ProviderState> {
  public state = {
    isAuthenticated: false
  };

  public render() {
    const context: AppContext = {
      ...this.state,
      setAuthenticated: this.setAuthenticated
    };

    return (
      <Context.Provider value={context}>
        {this.props.children}
      </Context.Provider>
    );
  }

  private setAuthenticated = () => {
    this.setState({ isAuthenticated: true });
  }
}

/**
 * The consumer will be used by components downstream to gain access to the context.
 */
const AppContextConsumer = Context.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };