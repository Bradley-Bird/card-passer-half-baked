import { createContext, useContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const test = 'test';
  return <UserContext.Provider value={test}>{children}</UserContext.Provider>;
};
const useTemplate = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

export { useTemplate, UserProvider };
