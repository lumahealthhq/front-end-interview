import React, { useCallback, useRef } from 'react';
import {
  MdAccountCircle,
  MdCake,
  MdTranslate,
  MdPhone,
  MdEmail,
  MdSearch,
} from 'react-icons/md';
import { FormHandles } from '@unform/core';

import { Link, useHistory } from 'react-router-dom';

import Input from './Input';
import Button from '../Button';

import { Container, FormHeader, FormFields } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}
const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  // const handleSubmit = useCallback();
  // async (data: SignUpFormData) => {
  //   try {
  //     formRef.current?.setErrors({});

  //     const schema = Yup.object().shape({
  //       name: Yup.string().required('Nome obrigatório'),
  //       email: Yup.string()
  //         .required('E-mail obrigatório')
  //         .email('Digite um email válido'),
  //       password: Yup.string().min(6, 'Minímo de 6 caracteres'),
  //     });

  //     await schema.validate(data, {
  //       abortEarly: false,
  //     });

  //     await api.post('/users', data);

  //     history.push('/');

  //     addToast({
  //       type: 'success',
  //       title: 'Cadastro realizado!',
  //       description: 'Pronto, você já pode fazer seu logon no GOBarber!',
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     if (err instanceof Yup.ValidationError) {
  //       const errors = getValidationErrors(err);

  //       formRef.current?.setErrors(errors);

  //       return;
  //     }

  //     addToast({
  //       type: 'error',
  //       title: 'Erro no cadastro',
  //       description: 'Ocorreu um erro ao fazer cadastro, tente novamente',
  //     });
  //   }
  // },
  // [addToast, history],

  return (
    <Container ref={formRef} onSubmit={() => {}}>
      <FormHeader>
        <span>
          <h2>1</h2>
        </span>
        <strong>New Referral</strong>
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

export default SignUp;
