import ImageLinks from '@/assets/Imagelinks';
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import { HomeCreators } from '@/store/reducers/homeReducer';
import { makeSelectHome, selectSample } from '@/store/selectors/homeSelectors';
import React, { memo, useState } from 'react';
import { Modal, message, Row, Col, Form } from 'antd';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useMediaQuery } from 'react-responsive';

import { CustomFormInput, StyledCol, StyledForm, StyledRow, Wrapper } from './Styles';
import { BREAKPOINTS } from '@/styling/media';
import { countNotes, NoteCount } from '@/utils';
interface StateProps {
  sample: string;
}
interface DispatchProps {
  dispatchSetSample: () => void;
}
type Props = RouteComponentProps;
export type PropsType = StateProps & DispatchProps & Props;
const Home = (props: PropsType) => {
  const [form] = Form.useForm();
  const [billAmount, setBillAmount] = useState<number | null>(null);
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${BREAKPOINTS.tablet}px)` });
  const [notes, setNotes] = useState<NoteCount[] | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const resetForm = () => {
    setBillAmount(null);
    setNotes(null);
    form.resetFields();
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    resetForm();
  };
  const onFinish = (values: any) => {
    if (!billAmount) {
      setBillAmount(Number(values?.bill));
    } else {
      if (values?.cash && values?.cash - billAmount > 0) {
        setNotes(countNotes(values?.cash - billAmount));
        showModal();
      } else if (values?.cash - billAmount === 0) {
        setNotes([]);
        showModal();
      } else {
        message.error('Cash received cannot be less than the bill amount!');
      }
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const renderModalContent = () => {
    if (notes) {
      if (!notes?.length) {
        return <h1>The difference is 0! You don&apos;t have to return anything</h1>;
      } else {
        return (
          <>
            <h1>Here&apos;s what you&apos;ve to return!</h1>
            {notes
              .filter((e) => e.number !== 0)
              .map((note) => (
                <Row style={{ borderBottom: '2px solid #f0f0f0' }} key={note?.currency}>
                  <Col span={12}>
                    <h3>{`₹ ${note?.currency}`}</h3>
                  </Col>
                  <Col style={{ justifyContent: 'flex-end' }} span={12}>
                    <h3 style={{ textAlign: 'end' }}>x {note?.number}</h3>
                  </Col>
                </Row>
              ))}
          </>
        );
      }
    }
  };
  return (
    <Wrapper>
      <StyledRow>
        {!isTabletOrMobile && (
          <StyledCol>
            <img style={{ width: '50%' }} src={ImageLinks.financeGuru} />
          </StyledCol>
        )}
        <StyledCol>
          <StyledForm
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <h1 style={{ textAlign: 'center' }}>
              {!billAmount
                ? 'Can you please tell me the bill amount?'
                : "Just one more thing! How much cash you've got?"}
            </h1>
            <CustomFormInput
              name={billAmount ? 'cash' : 'bill'}
              rules={[{ required: true, message: 'Please enter a valid amount!' }]}
            >
              <Input type={'number'} placeholder={billAmount ? 'Cash Received' : 'Bill Amount'} />
            </CustomFormInput>

            <CustomFormInput>
              <Button text={'Submit'} htmlType="submit" />
            </CustomFormInput>
          </StyledForm>
        </StyledCol>
      </StyledRow>
      <Modal
        title={null}
        footer={null}
        visible={isModalVisible}
        onOk={handleCancel}
        onCancel={handleCancel}
        centered
      >
        {renderModalContent()}
      </Modal>
    </Wrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome,
  sample: selectSample(),
});
const mapDispatchToProps = {
  dispatchSetSample: () => HomeCreators.sample(),
};

const withConnect = connect<StateProps, DispatchProps, Props>(mapStateToProps, mapDispatchToProps);
export default compose<React.FC<PropsType>>(withConnect, memo)(Home);
