import React from 'react';

import { useCarToolStoreContext } from '../contexts/carToolContext';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

// specific to the application
// container component - no ui, but it does have
// knowledge of the application store
export function CarTool() {

  const {
    sortedCars, carsSort, editCarId,
    editCar, deleteCar, saveCar, cancelCar, sortCars,
    addCar,
  } = useCarToolStoreContext();

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