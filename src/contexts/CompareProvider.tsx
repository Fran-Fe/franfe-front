import { useState, useMemo } from 'react';
import CompareContext from './CompareContext';

const CompareProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedCards, setSelectedCards] = useState<any[]>([]);
  const contextValue = useMemo(
    () => ({
      selectedCards,
      setSelectedCards,
    }),
    [selectedCards, setSelectedCards],
  );
  return <CompareContext.Provider value={contextValue}>{children}</CompareContext.Provider>;
};

export default CompareProvider;
