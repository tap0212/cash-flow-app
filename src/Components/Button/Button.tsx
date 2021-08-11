import React from 'react';
import { StyledButton } from './Button.styles';

type Props = {
  text: string;
  htmlType: 'button' | 'submit' | 'reset' | undefined;
};

const Button = ({ text, htmlType, ...rest }: Props) => {
  return (
    <StyledButton {...rest} htmlType={htmlType}>
      {text}
    </StyledButton>
  );
};

export default React.memo(Button);
