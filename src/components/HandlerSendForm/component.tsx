import React, { memo, useState } from 'react';
import classNames from 'classnames';

import Button from '~/Components/Button';

import { Classnames } from '~/Utils/Types';

import style from './style.module.css';

interface Props {
  className?: Classnames;
  disabled?: boolean;
  onSubmit: (data: string) => void;
}

const HandlerSendForm:React.FC<Props> = ({
  className,
  onSubmit,
  disabled,
}) => {
  const [value, setValue] = useState('');

  return (
    <form {...{
      className: classNames(
        style.container,
        className,
      ),
      onSubmit: (e) => {
        e.preventDefault();

        if (!disabled) {
          onSubmit(value);
          setValue('');
        }
      },
    }}>
      <input {...{
        value,
        type: 'text',
        onChange: (e) => {
          setValue(e.target.value);
        },
      }} />

      <Button {...{
        inputType: 'submit',
        text: 'Submit',
      }} />
    </form>
  );
};

export default memo(HandlerSendForm);
