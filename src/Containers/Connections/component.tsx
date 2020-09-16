import React, { memo } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import Handler from '~/Containers/Handler';
import { Popups, popupStore } from '~/Containers/Popup';

import Button from '~/Components/Button';
import Connection from '~/Components/Connection';
import { PopupEditConnectionData } from '~/Components/PopupEditConnection';
import { PopupConfirmData } from '~/Components/PopupConfirm';
import Divider from '~/Components/Divider/component';

import { connectionStore } from './store';

import style from './style.module.css';

interface ConnectionProps {
  className?: string | string[];
}

const Connections:React.FC<ConnectionProps> = ({
  className,
}) => {
  const {
    list,
    selected,
    removeItem,
    addItem,
    patchItem,
    setSelected,
  } = connectionStore;

  const {
    showPopup,
  } = popupStore;

  const connections = Object.entries(list);

  return (
    <div {...{
      className: classNames(style.container, className),
    }}>
      {
        connections
          .map(([
            id,
            { name, url, description },
          ]) => (
            <Connection {...{
              key: `conn-${id}`,
              selected: id === selected,
              name,
              url,
              description,
              onSelect: () => {
                setSelected(id);
              },
              onConfigUpdate: (config) => {
                patchItem(id, {
                  url,
                  name,
                  description,
                  config,
                });
              },
              onRemoveClick: () => {
                showPopup<PopupConfirmData>(
                  Popups.CONFIRM,
                  {
                    onAccept: () => {
                      removeItem(id);
                    },
                  },
                );
              },
              onEditClick: () => {
                showPopup<PopupEditConnectionData>(
                  Popups.EDIT_CONNECTION,
                  {
                    id,
                    url,
                    name,
                    description,
                    onAccept: (newUrl: string, newName?: string, newDescription?: string) => {
                      patchItem(id, {
                        url: newUrl,
                        name: newName,
                        description: newDescription,
                      });
                    },
                  },
                );
              },
            }} />
          ))
      }

      <div {...{
        className: style.controls,
      }}>
        <Button {...{
          text: 'Add config file',
          type: 'tab',
          className: style.buttonAdd,
          onClick: () => {
            showPopup<PopupEditConnectionData>(
              Popups.EDIT_CONNECTION,
              {
                onAccept: (url: string, name?: string, description?: string) => {
                  addItem({
                    url,
                    name,
                    description,
                  });
                },
              },
            );
          },
        }} />
      </div>

      <Divider />

      <div>
        {
          connections.map(([
            id,
            { name, description, config },
          ]) => (
            <Handler {...{
              key: `handler-${id}`,
              id,
              name,
              description,
              config,
              active: id === selected,
            }} />
          ))
        }
      </div>
    </div>
  );
};

export default memo(observer(Connections));
