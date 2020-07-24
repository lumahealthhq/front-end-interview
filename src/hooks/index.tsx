import React from 'react';

import { PatientProvider } from './patient';
import { ExpandedProvider } from './expanded';
import { HandleProvider } from './handle';

const AppProvider: React.FC = ({ children }) => (
  <PatientProvider>
    <ExpandedProvider>
      <HandleProvider>{children}</HandleProvider>
    </ExpandedProvider>
  </PatientProvider>
);

export default AppProvider;
