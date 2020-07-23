import React, { createContext, useCallback, useState, useContext } from 'react';

import { uuid } from 'uuidv4';

import _ from 'lodash';

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

  // useEffect(() => {
  //   if (!patients) {
  //     setPatients([initialValue]);
  //   }
  //   const data = localStorage.getItem('Luma:Patients');
  //   if (data) {
  //     setPatients(JSON.parse(data));
  //   }
  // }, [patients]);

  const addPatient = useCallback(
    async (data: PatientData) => {
      const prevPatient = patients.findIndex(patient => patient.id === data.id);
      patients[prevPatient] = data;

      const newPatient = _.cloneDeep(initialValue);
      newPatient.id = uuid();

      setPatients([...patients, newPatient]);
      // localStorage.setItem('Luma:Patients', JSON.stringify(patients));
    },
    [patients],
  );

  const removePatient = useCallback(
    id => {
      const newPatients = patients.filter(patient => patient.id !== id);
      console.log(id);
      setPatients(newPatients);
      // localStorage.setItem('Luma:Patients', JSON.stringify(newPatients));
    },
    [patients],
  );

  return (
    <PatientContext.Provider value={{ patients, addPatient, removePatient }}>
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
