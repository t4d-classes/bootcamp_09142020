import React from 'react';

import { Car } from '../models/car';

export type CarVieRowProps = {
  car: Car,
  onDeleteCar: (carId: number) => void,
  onEditCar: (carId: number) => void,
};

export const CarViewRow = ({
  car,
  onDeleteCar: deleteCar,
  onEditCar: editCar,
}: CarVieRowProps) => {

  return <tr>
    <td>{car.id}</td>
    <td>{car.make}</td>
    <td>{car.model}</td>
    <td>{car.year}</td>
    <td>{car.color}</td>
    <td>{car.price}</td>
    <td>
      <button type="button"
        onClick={() => editCar(car.id)}>
          Edit
      </button>
      <button type="button"
        onClick={() => deleteCar(car.id)}>
          Delete
      </button>
    </td>
  </tr>;
};
