import { COLORS } from '@/styling/colors';
import { FONT_SIZE } from '@/styling/fonts';
import { media } from '@/styling/media';
import { configureFelx } from '@/styling/styles';
import { Form } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  min-height: calc(100vh - 4rem);
  background-color: ${COLORS.SECONDARY};
  ${FONT_SIZE.large()}
  overflow: hidden;
`;
export const StyledCol = styled.div`
  width: 50%;
  ${media.tablet} {
    width: 100%;
  }
  ${configureFelx({ direction: 'column', alignItems: 'center', justify: 'center' })}
`;
export const StyledRow = styled.div`
  padding: 2rem;
  ${media.tablet} {
    padding: 0;
  }
  height: calc(100vh - 8rem);
  ${configureFelx({ direction: 'row', alignItems: 'center', justify: 'center' })}
`;
export const StyledForm = styled(Form)`
  &.ant-form {
    width: 100%;
    padding: 0 2rem;
    ${media.tablet} {
      padding: 0 1rem;
    }
  }
`;
export const CustomFormInput = styled(Form.Item)`
  &.ant-form-item {
    margin: 1rem 0;
  }
`;
