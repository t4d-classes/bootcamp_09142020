import { useState, useCallback } from 'react';

import { Car } from '../models/Car';
import { useList } from './useList';

type AddCar = (car: Car) => void;
type SaveCar = AddCar;
type DeleteCar = (carId: number) => void;
type EditCar = DeleteCar;
type CancelCar = () => void;

type UseCarToolStore = (initialCar: Car[]) => ([
  Car[], number, AddCar, SaveCar, DeleteCar, EditCar, CancelCar
]) 

export const useCarToolStore: UseCarToolStore = (initialCars: Car[]) => {

  const [ cars, appendCar, removeCar, replaceCar ] = useList([ ...initialCars ]);

  const [ editCarId, setEditCarId ] = useState(-1);

  console.log('use car tool rendering');

  const addCar = useCallback((car: Car) => {
    appendCar(car);
    setEditCarId(-1);
  }, [ appendCar ]);

  const saveCar = (car: Car) => {
    replaceCar(car);
    setEditCarId(-1);
  };

  const deleteCar = (carId: number) => {
    removeCar(carId);
    setEditCarId(-1);
  };

  return [ cars, editCarId, addCar, saveCar, deleteCar, setEditCarId, () => setEditCarId(-1) ];


};