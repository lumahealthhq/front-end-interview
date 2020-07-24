import React from 'react';

import { PatientProvider } from './patient';
import { ExpandedProvider } from './expanded';
import { HandleProvider } from './handle';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <PatientProvider>
    <ExpandedProvider>
      <ToastProvider>
        <HandleProvider>{children}</HandleProvider>
      </ToastProvider>
    </ExpandedProvider>
  </PatientProvider>
);

export default AppProvider;
