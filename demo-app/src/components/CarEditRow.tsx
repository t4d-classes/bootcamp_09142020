import React from 'react';

import { Car } from '../models/Car';
import { useForm } from '../hooks/useForm';

export type CarEditRowProps = {
  car: Car,
  onSaveCar: (car: Car) => void,
  onCancelCar: () => void,
};

export function CarEditRow(props: CarEditRowProps) {

  const [ carForm, change ] = useForm({
    make: props.car.make,
    model: props.car.model,
    year: props.car.year,
    color: props.car.color,
    price: props.car.price,
  });

  const saveCar = () => {
    props.onSaveCar({
      ...carForm,
      id: props.car.id,
    });
  }

  return (
    <tr>
      <td>{props.car.id}</td>
      <td><input type="text" name="make" value={carForm.make} onChange={change} /></td>
      <td><input type="text" name="model" value={carForm.model} onChange={change} /></td>
      <td><input type="number" name="year" value={carForm.year} onChange={change} /></td>
      <td><input type="text" name="color" value={carForm.color} onChange={change} /></td>
      <td><input type="number" name="price" value={carForm.price} onChange={change} /></td>
      <td>
        <button type="button"
          onClick={saveCar}>Save</button>
        <button type="button"
          onClick={props.onCancelCar}>Cancel</button>
      </td>
    </tr>
  );

}

