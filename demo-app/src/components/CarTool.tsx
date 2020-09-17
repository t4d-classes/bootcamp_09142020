import React from 'react';

import { Car } from '../models/Car';

import { useCarToolStore } from '../hooks/useCarToolStore';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export type CarToolProps = {
  cars: Car[],
};

export function CarTool(props: CarToolProps) {

  const {
    sortedCars, carsSort, editCarId,
    editCar, deleteCar, saveCar, cancelCar, sortCars,
    addCar,
  } = useCarToolStore(props.cars);

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={sortedCars} carsSort={carsSort} editCarId={editCarId}
                onEditCar={editCar} onDeleteCar={deleteCar}
                onSaveCar={saveCar} onCancelCar={cancelCar}
                onSortCars={sortCars} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
}