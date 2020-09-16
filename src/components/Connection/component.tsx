import React, { memo, useEffect, useState } from 'react';
import classNames from 'classnames';

import Status, { StatusTypes } from '~/Components/Status';
import Button from '~/Components/Button';

import { ConnectionConfig } from '~/Containers/Connections';

import style from './style.module.css';

interface Props {
  url: string;
  name?: string;
  selected?: boolean;
  description?: string;
  disabled?: boolean;
  onRemoveClick: () => void;
  onEditClick: () => void;
  onSelect: () => void;
  onConfigUpdate: (config: ConnectionConfig) => void;

  className?: string | string[];
}

const Connection:React.FC<Props> = ({
  className,
  url,
  name,
  description,
  selected,
  disabled = false,
  onSelect,
  onRemoveClick,
  onEditClick,
  onConfigUpdate,
}) => {
  const [status, setStatus] = useState<StatusTypes>(StatusTypes.offline);

  useEffect(() => {
    setStatus(StatusTypes.progress);

    fetch(url)
      .then((r) => r.json())
      .then((data: ConnectionConfig) => {
        setStatus(StatusTypes.online);
        onConfigUpdate(data);
      })
      .catch(() => {
        setStatus(StatusTypes.error);
      });
  }, [url]);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div {...{
      role: 'button',
      className: classNames(
        style.container,
        { [style.containerActive]: selected },
        { [style.containerFailed]: status === StatusTypes.error },
        className,
      ),
      onClick: () => {
        if (!disabled) {
          onSelect();
        }
      },
    }}>
      <Status {...{
        status,
        simple: true,
        className: style.status,
      }} />
      {
        name && (
          <p {...{
            className: style.name,
          }}>
            <span>
              {name}
            </span>
          </p>
        )
      }

      <p {...{
        className: style.url,
      }}>
        {url}
      </p>

      {
        description && (
          <p {...{
            className: style.description,
          }}>
            {description}
          </p>
        )
      }

      <Button {...{
        className: style.editButton,
        text: 'Remove',
        type: 'link',
        onClick: (e) => {
          e.stopPropagation();
          onRemoveClick();
        },
      }} />

      <Button {...{
        className: style.editButton,
        text: 'Edit',
        type: 'link',
        onClick: (e) => {
          e.stopPropagation();
          onEditClick();
        },
      }} />
    </div>
  );
};

export default memo(Connection);
