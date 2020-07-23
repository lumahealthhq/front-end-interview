import React, {
  useState,
  useCallback,
  useRef,
  FormHTMLAttributes,
} from 'react';
import {
  MdAccountCircle,
  MdCake,
  MdTranslate,
  MdPhone,
  MdEmail,
  MdSearch,
  MdDelete,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from 'react-icons/md';
import { FormHandles } from '@unform/core';

import { usePatient } from '../../hooks/patient';

import ButtonIcon from './ButtonIcon';
import Input from './Input';

import { Container, FormHeader, FormFields } from './styles';

interface Sequential {
  sequential: 1 | 2 | 3 | 4 | 5;
}
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

  const handleSubmit = useCallback(
    (data: FormData) => {
      const patient = Object.assign(data, { id });
      addPatient(patient);
    },
    [addPatient, id],
  );

  const [toggle, setToggle] = useState<boolean>(true);

  const toggleAccordion = (): void => {
    setToggle(!toggle);
  };

  const headerTitle =
    firstName || lastName ? `${firstName} ${lastName}` : 'New Referral';

  return (
    <Container
      patientSeq={sequential}
      isToggled={toggle}
      ref={formRef}
      onSubmit={handleSubmit}
      id={id}
    >
      <FormHeader patientSeq={sequential}>
        <span>
          <h2>{sequential}</h2>
        </span>
        <strong>{headerTitle}</strong>
        {patients.length > 0 && (
          <div>
            <ButtonIcon type="button" onClick={() => removePatient(id)}>
              <MdDelete size={16} />
            </ButtonIcon>
            <ButtonIcon type="button" onClick={() => toggleAccordion()}>
              {toggle ? (
                <MdKeyboardArrowDown size={16} />
              ) : (
                <MdKeyboardArrowUp size={16} />
              )}
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
          placeholder="Last Name"
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
