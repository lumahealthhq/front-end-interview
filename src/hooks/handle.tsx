import React, { createContext, useCallback, useState, useContext } from 'react';

interface HandleData {
  isSendReferral: boolean;
}

interface HandleContextData {
  addHandle(data: HandleData): void;
  handle: HandleData;
}

const HandleContext = createContext<HandleContextData>({} as HandleContextData);

const initialValue: HandleData = {
  isSendReferral: false,
};

export const HandleProvider: React.FC = ({ children }) => {
  const [handle, setHandle] = useState<HandleData>(initialValue);

  const addHandle = useCallback(async (data: HandleData) => {
    setHandle(data);
  }, []);

  return (
    <HandleContext.Provider value={{ handle, addHandle }}>
      {children}
    </HandleContext.Provider>
  );
};

export const useHandle = (): HandleContextData => {
  const context = useContext(HandleContext);

  if (!context) {
    throw new Error('useHandle must be used within an HandleProvider');
  }

  return context;
};
