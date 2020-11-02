import React, { memo, useState } from 'react';
import classNames from 'classnames';

import { ConnectionHandlerPayload } from '~/Containers/Connections';

import Button from '~/Components/Button';

import { Classnames } from '~/Utils/Types';

import style from './style.module.css';

interface Props {
  className?: Classnames;
  disabled?: boolean;
  payload: ConnectionHandlerPayload;
  onSubmit: (data: string[]) => void;
}

const HandlerSendForm:React.FC<Props> = ({
  className,
  onSubmit,
  disabled,
  payload,
}) => {
  const defaultValue = payload.reduce((obj: Record<any, any>, item, pos) => {
    return {
      ...obj,
      [String(pos)]: '',
    };
  }, {});

  const [value, setValue] = useState<Record<string, string>>(defaultValue);

  return (
    <form {...{
      className: classNames(
        style.container,
        className,
      ),
      onSubmit: (e) => {
        e.preventDefault();

        if (!disabled) {
          const values = Object.keys(value).map((item: string) => value[item]);

          onSubmit(values);
          setValue(defaultValue);
        }
      },
    }}>
      {
        payload.map((item, position) => (
          <input {...{
            value: value[position],
            key: position,
            type: 'text',
            placeholder: typeof item !== 'string' ? JSON.stringify(item) : String(item),
            onChange: (e) => {
              setValue({
                ...value,
                [String(position)]: e.target.value,
              });
            },
          }} />
        ))
      }

      <Button {...{
        inputType: 'submit',
        text: 'Submit',
      }} />
    </form>
  );
};

export default memo(HandlerSendForm);
