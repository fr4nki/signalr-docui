import React from 'react';
import classNames from 'classnames';

import style from './style.module.css';

interface Props {
  className?: string | string[];
  text: string | React.ReactElement;
  type?: 'tab' | 'link',
  onClick?: (e: React.MouseEvent) => void;
  inputType?: 'submit' | 'button' | 'reset' | undefined;
}

const mapTypeToStyle: Record<string, string> = {
  default: style.default,
  tab: style.tab,
  link: style.link,
};

const Button:React.FC<Props> = ({
  className,
  text,
  type = 'default',
  onClick,
  inputType = undefined,
}) => {
  return (
    <button {...{
      type: inputType,
      className: classNames(
        style.container,
        mapTypeToStyle[type],
        className,
      ),
      onClick: (e) => {
        if (onClick) {
          onClick(e);
        }
      },
    }}>
      <span>
        {text}
      </span>
    </button>
  );
};

export default Button;
