import { createContext } from 'react';

interface CompareContextProps {
  selectedCards: any[];
  setSelectedCards: React.Dispatch<React.SetStateAction<any[]>>;
}

const CompareContext = createContext<CompareContextProps | undefined>(undefined);

export default CompareContext;
