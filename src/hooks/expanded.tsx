import React, { createContext, useCallback, useState, useContext } from 'react';

interface ExpandedContextData {
  switchExpanded(data: string): void;
  expanded: string | false;
}

const ExpandedContext = createContext<ExpandedContextData>(
  {} as ExpandedContextData,
);

export const ExpandedProvider: React.FC = ({ children }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  // const switchExpanded = useCallback(
  //   async data => (
  //     event: MouseEvent<HTMLButtonElement>,
  //     isExpanded: boolean,
  //   ) => {
  //     console.log(event);
  //     // setExpanded(isExpanded ? data : false);
  //   },
  //   [],
  // );

  const switchExpanded = useCallback(
    async data => {
      const isExpanded = expanded === data;
      setExpanded(!isExpanded ? data : false);
    },
    [expanded],
  );

  return (
    <ExpandedContext.Provider value={{ expanded, switchExpanded }}>
      {children}
    </ExpandedContext.Provider>
  );
};

export const useExpanded = (): ExpandedContextData => {
  const context = useContext(ExpandedContext);

  if (!context) {
    throw new Error('useHandle must be used within an ExpandedProvider');
  }

  return context;
};
