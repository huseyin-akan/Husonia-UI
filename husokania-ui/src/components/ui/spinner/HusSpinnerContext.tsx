import { createContext, useContext, useState } from 'react';
import HusSpinner from './HusSpinner';

type SpinnerContextType = {
  toggleSpinner: (show: boolean) => void;
};

export const SpinnerContext = createContext<SpinnerContextType>({
  toggleSpinner: () => {},
});

export const useSpinner = () => useContext(SpinnerContext);

type SpinnerProviderProps = {
  children: React.ReactNode;
};

export const HusSpinnerProvider : React.FC<SpinnerProviderProps> = ({ children }) => {
  
  const [showSpinner, setShowSpinner] = useState<boolean>(false);

  const toggleSpinner = (show: boolean) => {
    setShowSpinner(show);
  };

  return (
    <SpinnerContext.Provider value={{ toggleSpinner }}>
      {showSpinner && <HusSpinner />} {/* The spinner overlay */}
      {children}
    </SpinnerContext.Provider>
  )
}
