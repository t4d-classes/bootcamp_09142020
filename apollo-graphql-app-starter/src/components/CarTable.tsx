import React from 'react';

import { Car } from '../models/car';
import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';

export type CarTableProps = {
  cars: Car[],
  editCarId: number,
  onEditCar: (carId: number) => void,
  onDeleteCar: (carId: number) => void,
  onSaveCar: (car: Car) => void,
  onCancelCar: () => void,
};

export const CarTable = ({
  cars, editCarId,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
  onSaveCar: saveCar,
  onCancelCar: cancelCar,
}: CarTableProps) => {

  return <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Color</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {cars.map(car =>
        editCarId === car.id
          ? <CarEditRow key={car.id} car={car}
            onSaveCar={saveCar} onCancelCar={cancelCar} />
          : <CarViewRow key={car.id} car={car}
            onEditCar={editCar} onDeleteCar={deleteCar} />)}
    </tbody>
  </table>;

};

CarTable.defaultProps = {
  cars: [],
  editCarId: '-1',
};
