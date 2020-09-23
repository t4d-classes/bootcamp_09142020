import React, { FC } from 'react';

import { useCarToolStore } from '../contexts/carToolContext';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool: FC = () => {

  const {
    cars, editCarId,
    onAddCar: addCar,
    onSaveCar: saveCar,
    onDeleteCar: deleteCar,
    onEditCar: editCar,
    onCancelCar: cancelCar,
  } = useCarToolStore()!;

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={editCar} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm onSubmitCar={addCar} buttonText="Add Car" />
    </>
  );
};