import React, { createContext, useCallback, useState, useContext } from 'react';
import { uuid } from 'uuidv4';
import _ from 'lodash';

import api from '../services/api';

interface PatientData {
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

interface PatientContextData {
  addPatient(patient: PatientData): void;
  removePatient(id: string): void;
  sendReferrals(patient: PatientData): void;
  clearReferrals(): void;
  patients: PatientData[];
}

const PatientContext = createContext<PatientContextData>(
  {} as PatientContextData,
);

const initialValue: PatientData = {
  id: uuid(),
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  language: '',
  phone: '',
  email: '',
  address: '',
  notes: '',
};

export const PatientProvider: React.FC = ({ children }) => {
  const [patients, setPatients] = useState<PatientData[]>([initialValue]);

  const addPatient = useCallback(
    async (data: PatientData) => {
      const patientIndex = patients.findIndex(
        patient => patient.id === data.id,
      );
      patients[patientIndex] = data;

      if (patients.length < 5) {
        const newPatient = _.cloneDeep(initialValue);

        newPatient.id = uuid();

        setPatients([...patients, newPatient]);
      } else {
        setPatients([...patients]);
      }
    },
    [patients],
  );

  const removePatient = useCallback(
    id => {
      const newPatients = patients.filter(patient => patient.id !== id);
      setPatients(newPatients);
    },
    [patients],
  );

  const sendReferrals = useCallback(
    async (data: PatientData) => {
      const prevPatient = patients.findIndex(patient => patient.id === data.id);

      patients[prevPatient] = data;

      setPatients([...patients]);

      await api.post('/api', patients);
    },
    [patients],
  );

  const clearReferrals = useCallback(async () => {
    setPatients([initialValue]);
    console.log(patients);
  }, [patients]);

  return (
    <PatientContext.Provider
      value={{
        patients,
        addPatient,
        removePatient,
        sendReferrals,
        clearReferrals,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

export const usePatient = (): PatientContextData => {
  const context = useContext(PatientContext);

  if (!context) {
    throw new Error('usePatient must be used within an PatientProvider');
  }

  return context;
};
