import 'mobx-react-lite/batchingForReactDom';
import { action, configure, observable } from 'mobx';

import { Popups } from './component';

configure({ enforceActions: 'always' });

export interface PopupStore {
  isShown: boolean;
  name: Popups | null;

  // TODO: This is a bullshit. Think about passing props into popup container.
  props?: Record<string, any> | null;

  showPopup: <T>(name: Popups, props: T) => void;
  hidePopup: () => void;
}

export const popupStore = observable<PopupStore>({
  isShown: false,
  name: null,
  props: null,

  showPopup: action(<T>(name: Popups, props?: T) => {
    popupStore.name = name;
    popupStore.isShown = true;
    popupStore.props = props;
  }),

  hidePopup: action(() => {
    popupStore.name = null;
    popupStore.isShown = false;
    popupStore.props = null;
  }),
});
