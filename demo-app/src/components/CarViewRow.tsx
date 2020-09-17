import React from 'react';

import { Car } from '../models/Car';
import { nanToString } from '../utils';

export type CarViewRowProps = {
  car: Car,
  onEditCar: (carId: number) => void,
  onDeleteCar: (carId: number) => void,
};

export function CarViewRow(props: CarViewRowProps) {

  return (
    <tr>
      <td>{props.car.id}</td>
      <td>{props.car.make}</td>
      <td>{props.car.model}</td>
      <td>{nanToString(props.car.year)}</td>
      <td>{props.car.color}</td>
      <td>{nanToString(props.car.price)}</td>
      <td>
        <button type="button"
          onClick={() => props.onEditCar(props.car.id)}>Edit</button>
        <button type="button"
          onClick={() => props.onDeleteCar(props.car.id)}>Delete</button>
      </td>
    </tr>
  );

}

