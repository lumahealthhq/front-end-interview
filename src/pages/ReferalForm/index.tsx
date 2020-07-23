import React, { useMemo } from 'react';

import { usePatient } from '../../hooks/patient';

import Header from '../../components/Header';
import FormPage from '../../components/Form';
import Button from '../../components/Button';

import { Container, Content, TransparentButton } from './styles';

const ReferalForm: React.FC = () => {
  const { patients } = usePatient();

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
              id={String(patient.id)}
              firstName={patient.firstName}
              lastName={patient.lastName}
            />
          ))}
        {patients.length < 5 && (
          <TransparentButton type="submit" form={String(lastPatientId)}>
            + ADD ANOTHER PACIENT
          </TransparentButton>
        )}

        <Button type="submit">SEND REFERRALS</Button>
      </Content>
    </Container>
  );
};

export default ReferalForm;
