import React, { createContext, useContext } from 'react';

import { Car } from '../models/Car';
import { CarToolStore } from '../models/CarTool';
import { useCarToolStore } from '../hooks/useCarToolStore';

const carToolStoreContext =
  createContext<CarToolStore>({} as CarToolStore)

const carList: Car[] = [
  { id: 1, make: 'Ford', model: 'Fusion Hydrid', year: 2020, color: 'blue', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 120000 },
];

export type CarToolStoreProviderProps = {
  children: React.ReactNode
};

export function CarToolStoreProvider(props: CarToolStoreProviderProps) {

  return (
    <carToolStoreContext.Provider value={useCarToolStore(carList)}>
      {props.children}
    </carToolStoreContext.Provider>
  );

}

export const useCarToolStoreContext = () => {
  return useContext(carToolStoreContext);
};
