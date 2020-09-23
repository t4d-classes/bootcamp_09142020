import React, { createContext, FC, useContext } from 'react';

import { Car } from '../models/Car';

import { useCarToolStore as useCarToolStoreHook } from '../hooks/useCarToolStore';

type CarToolStoreContextValue = {
  cars: Car[];
  editCarId: number;
  onAddCar: (car: Car) => void;
  onSaveCar: (car: Car) => void;
  onDeleteCar: (carId: number) => void;
  onEditCar: (carId: number) => void;
  onCancelCar: () => void;
}

const carToolStoreContext = createContext<CarToolStoreContextValue | null>(null);

const carList: Car[] = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'blue', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 125000 },
];

export const CarToolStoreProvider: FC = ({ children }) => {

  const carTool = useCarToolStoreHook(carList);

  const carToolStoreContextValue: CarToolStoreContextValue = {
    cars: carTool[0],
    editCarId: carTool[1],
    onAddCar: carTool[2],
    onSaveCar: carTool[3],
    onDeleteCar: carTool[4],
    onEditCar: carTool[5],
    onCancelCar: carTool[6],
  };

  return (
    <carToolStoreContext.Provider value={carToolStoreContextValue}>
      {children}
    </carToolStoreContext.Provider>
  );

};

export const useCarToolStore = () => {
  return useContext(carToolStoreContext);
};