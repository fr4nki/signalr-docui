import React from 'react';

import { PopupComponent } from '~/Containers/Popup';

import style from './style.module.css';

export interface PopupConfirmData {
  content?: string | React.ReactElement;
  onAccept: () => void;
}

type Props = PopupComponent<PopupConfirmData>;

const PopupConfirm:React.FC<Props> = ({
  content,
  onClose,
  onAccept,
}) => {
  const text = content || 'Are you sure?';

  return (
    <div {...{
      className: style.popup,
    }}>
      <div {...{
        className: style.content,
      }}>
        {text}
      </div>

      <div {...{
        className: style.bottom,
      }}>
        <button {...{
          onClick: () => {
            onClose();
          },
        }}>
          Cancel
        </button>

        <button {...{
          onClick: () => {
            onAccept();
            onClose();
          },
        }}>
          OK
        </button>
      </div>
    </div>
  );
};

export default PopupConfirm;
