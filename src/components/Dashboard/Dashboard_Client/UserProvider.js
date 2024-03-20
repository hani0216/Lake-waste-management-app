// UserProvider.js

import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext(); // Créer un contexte utilisateur

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Définir l'état initial de l'utilisateur

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext); // Hook personnalisé pour accéder au contexte utilisateur
