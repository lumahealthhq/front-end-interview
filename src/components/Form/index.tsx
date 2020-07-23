import React, { useCallback, useRef, FormHTMLAttributes } from 'react';
import {
  MdAccountCircle,
  MdCake,
  MdTranslate,
  MdPhone,
  MdEmail,
  MdSearch,
  MdDelete,
  MdKeyboardArrowDown,
} from 'react-icons/md';
import { FormHandles } from '@unform/core';

import { usePatient } from '../../hooks/patient';

import ButtonIcon from './ButtonIcon';
import Input from './Input';

import { Container, FormHeader, FormFields } from './styles';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  id: string;
  firstName: string;
  lastName: string;
  sequential: number;
}

interface FormData {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  language: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
}

const Form: React.FC<FormProps> = ({
  id,
  sequential,
  firstName,
  lastName,
}: FormProps) => {
  const formRef = useRef<FormHandles>(null);

  const { addPatient, removePatient, patients } = usePatient();

  console.log(formRef);

  const handleSubmit = useCallback(
    (data: FormData) => {
      const patient = Object.assign(data, { id });
      addPatient(patient);
    },
    [addPatient, id],
  );

  const headerTitle =
    firstName || lastName ? `${firstName} ${lastName}` : 'New Referral';

  return (
    <Container ref={formRef} onSubmit={handleSubmit} id={id}>
      <FormHeader>
        <span>
          <h2>{sequential}</h2>
        </span>
        <strong>{headerTitle}</strong>
        {patients.length > 0 && (
          <div>
            <ButtonIcon type="button" onClick={() => removePatient(id)}>
              <MdDelete size={16} />
            </ButtonIcon>
            <ButtonIcon type="button">
              <MdKeyboardArrowDown size={16} />
            </ButtonIcon>
          </div>
        )}
      </FormHeader>
      <FormFields>
        <Input
          name="firstName"
          icon={MdAccountCircle}
          placeholder="First Name"
          required
        />
        <Input
          name="lastName"
          icon={MdAccountCircle}
          placeholder="First Name"
          required
        />
        <Input
          name="dateOfBirth"
          icon={MdCake}
          placeholder="Date of Birth"
          required
        />
        <Input
          name="language"
          icon={MdTranslate}
          placeholder="Contact Language"
          required
        />
        <Input name="phone" icon={MdPhone} placeholder="Phone" required />
        <Input name="email" icon={MdEmail} placeholder="Email" required />
        <Input
          name="address"
          icon={MdSearch}
          placeholder="Address"
          required
          fullWidth
        />
        <Input name="notes" placeholder="Notes/Reason" fullWidth />
      </FormFields>
    </Container>
  );
};

export default Form;
