import React, { useState } from 'react';

import { Car, CarKeys } from '../models/Car';

import { useList } from '../hooks/useList';

import { ToolHeader } from './ToolHeader';
import { CarTable, CarsSort } from './CarTable';
import { CarForm, CarFormData } from './CarForm';

export type CarToolProps = {
  cars: Car[],
};

export function CarTool(props: CarToolProps) {

  const [ carsSort, setCarsSort ] = useState<CarsSort>({
    col: 'id',
    dir: 'asc',
  });
  const [ editCarId, setEditCarId ] = useState(-1);
  const [ cars, appendCar, replaceCar, removeCar ] = useList<Car>([ ...props.cars ]);

  const addCar = (carForm: CarFormData) => {
    // appendCar(carForm as Car);
    // appendCar({ id: -1, ...carForm });
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

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={sortedCars(cars, carsSort)} carsSort={carsSort} editCarId={editCarId}
                onEditCar={setEditCarId} onDeleteCar={deleteCar}
                onSaveCar={saveCar} onCancelCar={cancelCar}
                onSortCars={sortCars} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
}