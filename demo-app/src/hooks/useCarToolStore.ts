import { useState } from 'react';

import { Car } from '../models/Car';
import { CarsSort } from '../components/CarTable';
import { CarFormData } from '../components/CarForm';

import { useList } from '../hooks/useList';

// computed value
const sortedCars = (cars: Car[], carsSort: CarsSort) => {
  // we will improve the typing of this code as part of class tomorrow...
  // return cars.concat().sort( (a: any, b: any) => {
  return cars.concat().sort( (a: Car, b: Car) => {

    const left = String(a[carsSort.col]).toUpperCase();
    const right = String(b[carsSort.col]).toUpperCase();

    if (left < right) {
      return carsSort.dir === 'asc' ? -1 : 1;
    } else if (left > right) {
      return carsSort.dir === 'asc' ? 1 : -1;
    } else {
      return 0;
    }
  });
}

type CarToolState = {
  sortedCars: Car[],
  editCarId: number,
  carsSort: CarsSort,
}

type CarToolActions = {
  addCar: (carForm: CarFormData) => void,
  saveCar: (car: Car) => void,
  deleteCar: (carId: number) => void,
  editCar: (carId: number) => void,
  cancelCar: () => void,
  sortCars: (col: keyof Car) => void,
}

type CarToolStore = CarToolState & CarToolActions;

type UseCarToolStore = (initialCars: Car[]) => CarToolStore;

export const useCarToolStore: UseCarToolStore = (initialCars) => {

  const [ carsSort, setCarsSort ] = useState<CarsSort>({
    col: 'id',
    dir: 'asc',
  });
  const [ editCarId, setEditCarId ] = useState(-1);
  const [ cars, appendCar, replaceCar, removeCar ] =
    useList<Car>([ ...initialCars ]);

  const addCar = (carForm: CarFormData) => {
    appendCar(carForm);
    setEditCarId(-1);
  };

  const saveCar = (car: Car) => {
    replaceCar(car);
    setEditCarId(-1);
  };

  const deleteCar = (carId: number) => {
    removeCar(carId);
    setEditCarId(-1);
  };

  const cancelCar = () => {
    setEditCarId(-1);
  };

  // const sortCars = (col: string) => {
  // const sortCars = (col: CarKeys) => {
  const sortCars = (col: keyof Car) => {

    if (col === carsSort.col) {
      setCarsSort({
        col, dir: 'asc' === carsSort.dir ? 'desc' : 'asc',
      })
    } else {
      setCarsSort({
        col, dir: 'asc',
      });
    }

  };

  return {
    sortedCars: sortedCars(cars, carsSort),
    editCarId,
    carsSort,
    addCar,
    saveCar,
    deleteCar,
    editCar: setEditCarId,
    cancelCar,
    // sortCars: sortCars,
    sortCars,
  };


}