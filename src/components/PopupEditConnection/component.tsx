import React, { useState } from 'react';

import { PopupComponent } from '~/Containers/Popup';

export interface PopupEditConnectionData {
  id?: string;
  url?: string;
  name?: string;
  description?: string;
  onAccept: (url: string, name?: string, description?: string, id?: string) => void;
}

type Props = PopupComponent<PopupEditConnectionData>;

const PopupEditConnection:React.FC<Props> = ({
  id,
  url: oldUrl,
  name: oldName,
  description: oldDescription,
  onClose,
  onAccept,
}) => {
  const [name, setName] = useState(oldName || '');
  const [url, setUrl] = useState(oldUrl || '');
  const [description, setDescription] = useState(oldDescription || '');

  return (
    <div>
      <input {...{
        type: 'text',
        placeholder: 'name',
        value: name,
        onChange: (e) => {
          setName(e.target.value);
        },
      }} />

      <input {...{
        type: 'text',
        placeholder: 'url',
        value: url,
        onChange: (e) => {
          setUrl(e.target.value);
        },
      }} />

      <input {...{
        type: 'text',
        placeholder: 'description',
        value: description,
        onChange: (e) => {
          setDescription(e.target.value);
        },
      }} />

      <button {...{
        onClick: () => {
          onAccept(url, name, description, id);
          onClose();
        },
      }}>
        save and exit
      </button>
    </div>
  );
};

export default PopupEditConnection;
