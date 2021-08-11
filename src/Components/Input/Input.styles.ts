import { Input } from 'antd';
import styled from 'styled-components';

export const StyledInput = styled(Input)`
  &.ant-input {
    width: 100%;
    height: 3rem;
    border-radius: 0.5rem;
    &:focus {
      border-radius: 0.5rem;
    }
  }
`;
