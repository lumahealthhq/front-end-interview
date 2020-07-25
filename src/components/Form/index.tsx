import React, {
  useEffect,
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
import { useExpanded } from '../../hooks/expanded';
import { useHandle } from '../../hooks/handle';
import { useToast } from '../../hooks/toast';

import ButtonIcon from './ButtonIcon';
import Input from './Input';
// import LocationSearchInput from './LocationSearchInput';

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

  const {
    addPatient,
    removePatient,
    sendReferrals,
    clearReferrals,
    patients,
  } = usePatient();
  const { switchExpanded, expanded } = useExpanded();
  const { handle } = useHandle();
  const { addToast } = useToast();

  useEffect(() => {
    switchExpanded(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleSubmit = useCallback(
    (data: FormData, { reset }) => {
      const patient = Object.assign(data, { id });

      if (!handle.isSendReferral) {
        addPatient(patient);

        patients.length === 5 && switchExpanded(id);
      } else {
        try {
          sendReferrals(patient);

          addToast({
            type: 'success',
            title: 'Success!',
            description: `You have submitted ${patients.length} pending referrals. You will be notified once they have been approved`,
          });

          clearReferrals();

          reset();
        } catch (error) {
          addToast({
            type: 'error',
            title: 'Error sending the referrals. Please try again.',
            description: 'Ocorreu um erro ao fazer cadastro, tente novamente',
          });
        }
      }
    },
    [
      addPatient,
      id,
      handle.isSendReferral,
      sendReferrals,
      clearReferrals,
      patients.length,
      switchExpanded,
      addToast,
    ],
  );
  const headerTitle =
    firstName || lastName ? `${firstName} ${lastName}` : 'New Referral';

  return (
    <Container
      patientSeq={sequential}
      isToggled={expanded === id}
      ref={formRef}
      id={id}
      onSubmit={handleSubmit}
    >
      <FormHeader patientSeq={sequential}>
        <span>
          <h2>{sequential}</h2>
        </span>
        <strong>{headerTitle}</strong>

        <div>
          {patients.length > 1 && (
            <ButtonIcon type="button" onClick={() => removePatient(id)}>
              <MdDelete size={16} />
            </ButtonIcon>
          )}
          <ButtonIcon type="button" onClick={() => switchExpanded(id)}>
            {expanded !== id ? (
              <MdKeyboardArrowDown size={16} />
            ) : (
              <MdKeyboardArrowUp size={16} />
            )}
          </ButtonIcon>
        </div>
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
        {/* <LocationSearchInput /> */}
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
