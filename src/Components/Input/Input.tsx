import React from 'react';
import { StyledInput } from './Input.styles';

type Props = {
  placeholder?: string;
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | string;
};

const Input = (props: Props) => {
  const { placeholder, type, ...rest } = props;
  return <StyledInput type={type} placeholder={placeholder} {...rest} />;
};

export default React.memo(Input);
