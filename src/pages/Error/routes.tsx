import React from 'react';
import Loadable from '~/Components/Loadable';
import Loader, { LoaderType } from '~/Components/Loader';

import { RouteItem } from '~/Managers/Routes';

export enum RoutingPaths {
  all = '*',
}

export const routing: RouteItem[] = [
  {
    path: RoutingPaths.all,
    component: Loadable(
      () => import('./component'),
      <Loader {...{ type: LoaderType.fullscreen }} />,
    ),
    name: '*',
  },
];
