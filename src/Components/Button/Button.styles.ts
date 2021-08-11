import { COLORS } from '@/styling/colors';
import { Button } from 'antd';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  &.ant-btn {
    width: 100%;
    height: 3rem;
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: ${COLORS.BLACK};
    color: ${COLORS.PRIMARY};
  }
`;
