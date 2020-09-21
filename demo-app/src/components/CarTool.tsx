import React from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

import { Car, NewCar, CarKeys } from '../models/Car';
import { CarsSort } from '../models/CarTool';

export type CarToolProps = {
  cars: Car[],
  editCarId: number,
  carsSort: CarsSort,
  onAddCar: (car: NewCar) => void,
  onSaveCar: (car: Car) => void,
  onDeleteCar: (carId: number) => void,
  onEditCar: (carId: number) => void,
  onCancelCar: () => void,
  onSortCars: (col: CarKeys) => void,
}

export function CarTool(props: CarToolProps) {

  const {
    cars, editCarId, carsSort,
    onAddCar: addCar,
    onSaveCar: saveCar,
    onDeleteCar: deleteCar,
    onEditCar: editCar,
    onCancelCar: cancelCar,
    onSortCars: sortCars,
  } = props;

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} carsSort={carsSort} editCarId={editCarId}
                onEditCar={editCar} onDeleteCar={deleteCar}
                onSaveCar={saveCar} onCancelCar={cancelCar}
                onSortCars={sortCars} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
}