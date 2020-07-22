import React from 'react';
import Header from '../../components/Header';
import PaperWrap from '../../components/PaperWrap';

import Form from '../../components/Form';
import Button from '../../components/Button';

import { Container, Content, TransparentButton } from './styles';

const ReferalForm: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <h3>Referral Patients</h3>
        <h4>You can add up to five patients at a time</h4>
        <Form />
        <TransparentButton type="button">
          + ADD ANOTHER PACIENT
        </TransparentButton>
        <Button>SEND REFERRALS</Button>
      </Content>
    </Container>
  );
};

export default ReferalForm;
