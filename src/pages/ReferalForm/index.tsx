import React, { useMemo } from 'react';

import { usePatient } from '../../hooks/patient';
import { useHandle } from '../../hooks/handle';

import Header from '../../components/Header';
import FormPage from '../../components/Form';
import Button from '../../components/Button';

import { Container, Content, TransparentButton } from './styles';

const ReferalForm: React.FC = () => {
  const { patients } = usePatient();
  const { addHandle } = useHandle();

  const lastPatientId = useMemo(() => {
    const { id } = patients[patients.length - 1];
    return id;
  }, [patients]);

  return (
    <Container>
      <Header />
      <Content>
        <h3>Referral Patients</h3>
        <h4>You can add up to five patients at a time</h4>

        {patients &&
          patients.map((patient, index) => (
            <FormPage
              key={patient.id}
              sequential={index + 1}
              id={patient.id}
              firstName={patient.firstName}
              lastName={patient.lastName}
            />
          ))}

        <TransparentButton
          onClick={() => addHandle({ isSendReferral: false })}
          type="submit"
          form={lastPatientId}
        >
          + ADD ANOTHER PACIENT
        </TransparentButton>

        <Button
          onClick={() => addHandle({ isSendReferral: true })}
          type="submit"
          form={lastPatientId}
        >
          SEND REFERRALS
        </Button>
      </Content>
    </Container>
  );
};

export default ReferalForm;
