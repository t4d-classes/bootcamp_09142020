import React from 'react';

import { Car } from '../models/Car';

import { CarEditRow } from './CarEditRow';
import { CarViewRow } from './CarViewRow';

export type CarTableProps = {
  cars: Car[],
  editCarId: number,
  carsSort: CarsSort,
  onEditCar: (carId: number) => void,
  onDeleteCar: (carId: number) => void,
  // onSortCars: (col: string) => void,
  onSortCars: (col: keyof Car) => void,
};

export type CarsSort = {
  col: keyof Car,
  dir: string,
}

type ColHeaderProps = {
  carsSort: CarsSort,
  // col: string,
  col: keyof Car,
  caption: string,
  // onClick: (col: string) => void,
  onClick: (col: keyof Car) => void,
}

function ColHeader(props: ColHeaderProps) {
  return (
    <th onClick={() => props.onClick(props.col)}>
      {props.caption}
      {props.carsSort.col === props.col && <span>({props.carsSort.dir})</span>}
    </th>
  );
}

export function CarTable({
  cars, editCarId, carsSort,
  onEditCar: editCar,
  onDeleteCar: handleDeleteCar,
  onSortCars: sortCars,
}: CarTableProps) {

  return (
    <table>
      <thead>
        <tr>
          <ColHeader carsSort={carsSort} col="id" caption="Id" onClick={sortCars} />
          <ColHeader carsSort={carsSort} col="make" caption="Make" onClick={sortCars} />
          <ColHeader carsSort={carsSort} col="model" caption="Model" onClick={sortCars} />
          <ColHeader carsSort={carsSort} col="year" caption="Year" onClick={sortCars} />
          <ColHeader carsSort={carsSort} col="color" caption="Color" onClick={sortCars} />
          <ColHeader carsSort={carsSort} col="price" caption="Price" onClick={sortCars} />
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(car => car.id === editCarId
          ? <CarEditRow key={car.id} car={car} onSaveCar={() => null} onCancelCar={() => null} />
          : <CarViewRow key={car.id} car={car} onEditCar={editCar} onDeleteCar={handleDeleteCar} />)}
      </tbody>
    </table>
  );

}