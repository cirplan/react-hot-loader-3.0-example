import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import RootContainer from './components/Hello';

render((
  <AppContainer>
    <RootContainer />
  </AppContainer>
), document.getElementById('content'));

if (module.hot) {
  module.hot.accept('./components/Hello', () => {
    let NextRootContainer = require('./components/Hello');
	  NextRootContainer = NextRootContainer.default;

    render((
      <AppContainer>
        <NextRootContainer />
      </AppContainer>
    ), document.getElementById('content'));
  })
}
