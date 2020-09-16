import React from 'react';
import Loadable from '~/Components/Loadable';
import Loader, { LoaderType } from '~/Components/Loader';

import { RouteItem } from '~/Managers/Routes';

export enum RoutingPaths {
  root = '/',
}

export const routing: RouteItem[] = [
  {
    path: RoutingPaths.root,
    exact: true,
    name: 'Connections',
    component: Loadable(
      () => import('~/Pages/Index'),
      <Loader {...{ type: LoaderType.fullscreen }} />,
    ),
  },
];
