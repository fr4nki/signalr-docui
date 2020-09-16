import React from 'react';

import RoutesManager from '~/Managers/Routes';

import PopupContainer from '~/Containers/Popup';

import ServiceWorkerProvider from '~/Providers/ServiceWorker';

import './style.root.css';

const App: React.FC = () => (
  <>
    <ServiceWorkerProvider>
      <RoutesManager />
    </ServiceWorkerProvider>

    <PopupContainer />
  </>
);

export default App;
