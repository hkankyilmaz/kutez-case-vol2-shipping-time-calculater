import React, { useState, createContext } from "react";

const IThemeContext = createContext({});

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    orderDate: null,
    fabricType: "",
    quantity: "",
    shippingDay: null,
  });

  const value = {
    data,
    setData,
  };

  return (
    <DataContext.Provider value={value}> {children} </DataContext.Provider>
  );
};

export default DataContext;
