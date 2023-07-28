/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';
import dados from './data.json';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [name, setName] = useState('peter');
  const [data, setData] = useState(dados);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  return (
    <GlobalContext.Provider
      value={{
        name,
        setName,
        data,
        setData,
        selectedProduct,
        setSelectedProduct,
        menuOpen,
        setMenuOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
