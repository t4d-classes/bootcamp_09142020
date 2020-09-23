import React, { useEffect, useState, useCallback, useRef } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({
  cars, editCarId,
  onRefreshCars: refreshCars,
  onAppendCar: appendCar,
  onReplaceCar: replaceCar,
  onDeleteCar: deleteCar,
  onEditCar: editCar,
  onCancelCar: cancelCar,
}) => {

  const [ temp, setTemp ] = useState(0);

  const defaultControl = useRef();

  useEffect(() => {
    refreshCars();

    if (defaultControl.current) {
      defaultControl.current.focus();
    }
  }, [ refreshCars ]);

  useEffect(() => {

    if (editCarId === -1) {
      if (defaultControl.current) {
        defaultControl.current.focus();
      }
    }

  }, [ editCarId ]);

  const localDeleteCar = useCallback(() => {
    setTemp(1);
    console.log('called delete car');
  }, [ ]);

  return <>
    <ToolHeader headerText="Car Tool" />
    <CarTable cars={cars} editCarId={editCarId}
      onEditCar={editCar} onDeleteCar={localDeleteCar}
      onSaveCar={replaceCar} onCancelCar={cancelCar} />
    <CarForm buttonText="Add Car" onSubmitCar={appendCar} ref={defaultControl} />
  </>;

};
