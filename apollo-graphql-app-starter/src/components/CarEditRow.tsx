import React from 'react';
import { pick } from 'lodash';

import { Car } from '../models/car';
import { useForm } from '../hooks/useForm';

export type CarEditRowProps = {
  car: Car,
  onSaveCar: (car: Car) => void,
  onCancelCar: () => void,
}

export const CarEditRow = ({ car, onSaveCar, onCancelCar: cancelCar }: CarEditRowProps) => {

  const [ carForm, change ] = useForm(pick(car, ['make', 'model', 'year', 'color', 'price']));

  const saveCar = () => {
    onSaveCar({
      ...carForm,
      id: car.id,
    });
  };

  return <tr>
    <td>{car.id}</td>
    <td><input type="text" name="make"
      value={carForm.make} onChange={change} /></td>
    <td><input type="text" name="model"
      value={carForm.model} onChange={change} /></td>
    <td><input type="number" name="year"
      value={carForm.year} onChange={change} /></td>
    <td><input type="text" name="color"
      value={carForm.color} onChange={change} /></td>
    <td><input type="number" name="price"
      value={carForm.price} onChange={change} /></td>
    <td>
      <button type="button"
        onClick={saveCar}>Save</button>
      <button type="button"
        onClick={cancelCar}>Cancel</button>
    </td>
  </tr>;

};

