import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import * as CarToolActions  from '../actions/carToolActions';

import { Car } from '../models/Car';
import { CarsSort } from '../models/CarTool'; 
import { CarToolState } from '../models/CarToolState';
import { CarTool } from '../components/CarTool';

const sortedCars = (cars: Car[], carsSort: CarsSort) => {
  // we will improve the typing of this code as part of class tomorrow...
  // return cars.concat().sort( (a: any, b: any) => {
  return cars.concat().sort( (a: Car, b: Car) => {

    const left = String(a[carsSort.col]).toUpperCase();
    const right = String(b[carsSort.col]).toUpperCase();

    if (left < right) {
      return carsSort.dir === 'asc' ? -1 : 1;
    } else if (left > right) {
      return carsSort.dir === 'asc' ? 1 : -1;
    } else {
      return 0;
    }
  });
}


export function CarToolContainer() {

  const cars = useSelector<CarToolState, Car[]>(state => sortedCars(state.cars, state.carsSort));
  const editCarId = useSelector<CarToolState, number>(state => state.editCarId);
  const carsSort = useSelector<CarToolState, CarsSort>(state => state.carsSort);

  const boundActions = bindActionCreators({
    onAddCar: CarToolActions.createAppendCarAction,
    onSaveCar: CarToolActions.createReplaceCarAction,
    onDeleteCar: CarToolActions.createRemoveCarAction,
    onEditCar: CarToolActions.createEditCarAction,
    onCancelCar: CarToolActions.createCancelCarAction,
    onSortCars: CarToolActions.createSortCarsAction,
  }, useDispatch());

  return <CarTool {...boundActions} cars={cars} editCarId={editCarId} carsSort={carsSort} />;

}