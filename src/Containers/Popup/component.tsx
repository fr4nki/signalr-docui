import React, { useEffect } from 'react';
import { runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';
import { createPortal } from 'react-dom';

import PopupEditConnection from '~/Components/PopupEditConnection';
import PopupConfirm from '~/Components/PopupConfirm';

import log from '~/Utils/Log';

import { popupStore } from './store';

import style from './style.module.css';

export enum Popups {
  EDIT_CONNECTION = 'EDIT_CONNECTION',
  CONFIRM = 'CONFIRM',
}

export const POPUPS: Record<Popups, React.FunctionComponent<any>> = {
  [Popups.EDIT_CONNECTION]: PopupEditConnection,
  [Popups.CONFIRM]: PopupConfirm,
};

const bodyId = '#body';
const body = document.querySelector(bodyId);
const nodeId = '#pop';
const node = document.querySelector(nodeId);

// TODO: More typings needed

const PopupContainer:React.FC = () => {
  const {
    isShown,
    name,
    props,
    hidePopup,
  } = popupStore;

  useEffect(() => {
    if (body) {
      if (isShown) {
        body.classList.add('blured');
        body.classList.add('locked');
        document.body.classList.add('locked');
      } else {
        body.classList.remove('blured');
        body.classList.remove('locked');
        document.body.classList.remove('locked');
      }
    }
  }, [isShown]);

  if (!node) {
    log({ text: `No element to render popups. Check ${nodeId}` });
    return null;
  }

  const content = runInAction(() => {
    if (isShown && name) {
      const Component = POPUPS[name];

      return (
        <div {...{
          className: style.container,
        }}>
          <div {...{
            className: style.content,
          }}>
            <Component {...{
              ...{
                ...props,
                className: style.contentItem,
              },
              onClose: () => {
                hidePopup();
              },
            }} />
          </div>

          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <div {...{
            className: style.bg,
            role: 'button',
            onClick: () => {
              hidePopup();
            },
          }} />
        </div>
      );
    }

    return null;
  });

  return createPortal(
    content,
    node,
  );
};

export default observer(PopupContainer);
