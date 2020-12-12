import 'react-native-gesture-handler';

import React from 'react';

import useCachedResources from './hooks/useCachedResources';
import AppGym from './screens/AppGym';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './actions/reducers.js';

const store = createStore(reducer);

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <AppGym />
      </Provider>
    );
  }
}
