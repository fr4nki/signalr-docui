import React from 'react';
import Loadable from '~/Components/Loadable';
import Loader, { LoaderType } from '~/Components/Loader';

import { RouteItem } from '~/Managers/Routes';

export enum RoutingPaths {
  works = '/how-it-works',
}

export const routing: RouteItem[] = [
  {
    path: RoutingPaths.works,
    exact: true,
    name: 'How it works',
    component: Loadable(
      () => import('./component'),
      <Loader {...{ type: LoaderType.fullscreen }} />,
    ),
  },
];
