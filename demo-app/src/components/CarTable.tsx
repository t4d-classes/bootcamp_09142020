import React from 'react';

import { Car } from '../models/Car';
import { CarsSort } from '../models/CarTool';

import { CarEditRow } from './CarEditRow';
import { CarViewRow } from './CarViewRow';


export type CarTableProps = {
  cars: Car[],
  editCarId: number,
  carsSort: CarsSort,
  onEditCar: (carId: number) => void,
  onDeleteCar: (carId: number) => void,
  onSaveCar: (car: Car) => void,
  onCancelCar: () => void,
  // onSortCars: (col: string) => void,
  // onSortCars: (col: CarKeys) => void,
  onSortCars: (col: keyof Car) => void,
};

type ColHeaderProps = {
  carsSort: CarsSort,
  // col: string,
  // col: CarKeys,
  col: keyof Car,
  caption: string,
  // onClick: (col: string) => void,
  // onClick: (col: CarKeys) => void,
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

// can be reused anywhere
// presentational component - ui-only, no knowledge of the application itself
export function CarTable({
  cars, editCarId, carsSort,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
  onSaveCar: saveCar,
  onCancelCar: cancelCar,
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
          ? <CarEditRow key={car.id} car={car} onSaveCar={saveCar} onCancelCar={cancelCar} />
          : <CarViewRow key={car.id} car={car} onEditCar={editCar} onDeleteCar={deleteCar} />)}
      </tbody>
    </table>
  );

}