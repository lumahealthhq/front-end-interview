import React from 'react';

import { PatientProvider } from './patient';

const AppProvider: React.FC = ({ children }) => (
  <PatientProvider>{children}</PatientProvider>
);

export default AppProvider;
