import React from 'react';
import { render } from 'react-dom';

import Loadable from '~/Components/Loadable';
import Loader from '~/Components/Loader';

const App = Loadable(() => import('./App'), <Loader />);

render(
  <App />,
  document.getElementById('body'),
);
