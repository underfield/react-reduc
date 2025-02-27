import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as History from 'history';
import createStore from './reducks/store/store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ConnectedRouter } from 'connected-react-router';

const history = History.createBrowserHistory();

// Storeを生成
export const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
