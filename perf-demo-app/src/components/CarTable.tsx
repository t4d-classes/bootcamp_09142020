import React from "react";

import { Car } from "../models/Car";
import { CarsSort } from "../models/CarsSort";

import { CarEditRow } from "./CarEditRow";
// import { CarViewRow } from "./CarViewRow";
import { CarViewRowMemo as CarViewRow } from "./CarViewRow";
// import { ColHeader } from "./ColHeader";
import { ColHeaderMemo as ColHeader } from "./ColHeader";

export type CarTableProps = {
  cars: Car[];
  editCarId: number;
  carsSort: CarsSort;
  onEditCar: (carId: number) => void;
  onDeleteCar: (carId: number) => void;
  onSaveCar: (car: Car) => void;
  onCancelCar: () => void;
  onSortCars: (col: keyof Car) => void;
};

export function CarTable({
  cars,
  editCarId,
  carsSort,
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
          <ColHeader
            carsSort={carsSort}
            col="id"
            caption="Id"
            onClick={sortCars}
          />
          <ColHeader
            carsSort={carsSort}
            col="make"
            caption="Make"
            onClick={sortCars}
          />
          <ColHeader
            carsSort={carsSort}
            col="model"
            caption="Model"
            onClick={sortCars}
          />
          <ColHeader
            carsSort={carsSort}
            col="year"
            caption="Year"
            onClick={sortCars}
          />
          <ColHeader
            carsSort={carsSort}
            col="color"
            caption="Color"
            onClick={sortCars}
          />
          <ColHeader
            carsSort={carsSort}
            col="price"
            caption="Price"
            onClick={sortCars}
          />
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) =>
          car.id === editCarId ? (
            <CarEditRow
              key={car.id}
              car={car}
              onSaveCar={saveCar}
              onCancelCar={cancelCar}
            />
          ) : (
            <CarViewRow
              key={car.id}
              car={car}
              onEditCar={editCar}
              onDeleteCar={deleteCar}
            />
          )
        )}
      </tbody>
    </table>
  );
}
