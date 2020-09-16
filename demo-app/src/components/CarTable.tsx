import React from 'react';

import { Car } from '../models/Car';

import { CarViewRow } from './CarViewRow';

export type CarTableProps = {
  cars: Car[],
  onDeleteCar: (carId: number) => void,
};

export function CarTable({ cars, onDeleteCar: handleDeleteCar }: CarTableProps) {

  return (
    <table>
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
          <CarViewRow key={car.id} car={car}
            onDeleteCar={handleDeleteCar} />)}
      </tbody>
    </table>
  );

}