import React, { memo } from 'react';
import classNames from 'classnames';

import { Classnames } from '~/Utils/Types';

import { NotifierTypes } from './constants';
import style from './style.module.css';

interface Props {
  className?: Classnames;
  type?: NotifierTypes;
  content: string | React.ReactElement;
}

const mapTypeToStyle:Record<NotifierTypes, string> = {
  [NotifierTypes.default]: style.default,
  [NotifierTypes.error]: style.error,
  [NotifierTypes.success]: style.success,
  [NotifierTypes.warning]: style.warning,
};

const Notifier:React.FC<Props> = ({
  className,
  content,
  type = 'default',
}) => {
  return (
    <div {...{
      className: classNames(
        style.container,
        mapTypeToStyle[type],
        className,
      ),
    }}>
      {content}
    </div>
  );
};

export default memo(Notifier);
