import React from 'react';

import { Car } from '../models/Car';

export type CarTableProps = {
  cars: Car[],
};

export function CarTable(props: CarTableProps) {

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
        </tr>
      </thead>
      <tbody>
        {props.cars.map(car => <tr key={car.id}>
          <td>{car.id}</td>
          <td>{car.make}</td>
          <td>{car.model}</td>
          <td>{car.year}</td>
          <td>{car.color}</td>
          <td>{car.price}</td>
        </tr>)}
      </tbody>
    </table>
  );

}