import React from 'react';
import classNames from 'classnames';

import style from './style.module.css';

interface Props {
  className?: string | string[];
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input:React.FC<Props> = ({
  className,
  type,
  onChange,
  placeholder,
}) => {
  return (
    <input {...{
      className: classNames(style.container, className),
      type,
      placeholder,
      onChange: (e) => {
        if (onChange) {
          onChange(e);
        }
      },
    }} />
  );
};

export default Input;
