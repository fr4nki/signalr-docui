import { action, configure, observable } from 'mobx';
import { nanoid } from 'nanoid';

import 'mobx-react-lite/batchingForReactDom';

import { readStorage, writeStorage } from '~/Utils/Storage';

import { ConnectionConfig } from './constants';

configure({ enforceActions: 'always' });

const STORAGE_KEY = 'connections';

export interface Connection {
  url: string;
  name?: string;
  description?: string;
  config?: ConnectionConfig;
}

export type ConnectionList = Record<string, Connection>;

export interface ConnectionStore {
  list: ConnectionList;
  selected: string | null;

  removeItem: (id: string) => void;
  addItem: (item: Connection) => void;
  patchItem: (id: string, item: Connection) => void;

  setSelected: (id: string) => void;
}

export const connectionStore = observable<ConnectionStore>({
  list: readStorage<ConnectionList>(STORAGE_KEY) || {},
  selected: null,

  removeItem: action((id: string) => {
    const newList = Object.keys(connectionStore.list)
      .reduce((acc, item) => (
        item === id
          ? { ...acc }
          : { ...acc, [item]: connectionStore.list[item] }
      ), {});

    connectionStore.list = newList;
    writeStorage({ [STORAGE_KEY]: newList });
  }),

  patchItem: action((id: string, item: Connection) => {
    const newList = {
      ...connectionStore.list,
      [id]: item,
    };

    connectionStore.list = newList;

    writeStorage({ [STORAGE_KEY]: newList });
  }),

  addItem: action((item: Connection) => {
    const newList = {
      ...connectionStore.list,
      [nanoid()]: item,
    };

    connectionStore.list = newList;

    writeStorage({ [STORAGE_KEY]: newList });
  }),

  setSelected: action((id: string) => {
    connectionStore.selected = id;
  }),
});
