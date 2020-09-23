import { Reducer, combineReducers, AnyAction } from 'redux';

import { Car } from '../models/Car';
import { CarsSort } from '../models/CarTool';
import { CarToolState } from '../models/CarToolState';

import {
  isRefreshCarsDoneAction, RefreshCarsDoneAction, SortCarsAction, EditCarAction,
  isSortCarsAction, isEditCarAction, isCancelCarAction, CancelCarAction,
} from '../actions/carToolActions';

export const carsSortReducer: Reducer<CarsSort, SortCarsAction> = (carsSort = { col:'id', dir: 'inc' }, action) => {

  if (isSortCarsAction(action)) {

    if (action.payload.col === carsSort.col) {
      return {
        ...carsSort,
        dir: 'asc' === carsSort.dir ? 'desc' : 'asc',
      };
    } else {
      return {
        col: action.payload.col,
        dir: 'asc',
      };
    }
    
  }

  return carsSort;
};

type EditCarIdReducerActions = RefreshCarsDoneAction | EditCarAction | CancelCarAction;

export const editCarIdReducer: Reducer<number, EditCarIdReducerActions> = (editCarId = -1, action) => {

  if (isEditCarAction(action)) {
    return action.payload.carId;
  }

  if (isRefreshCarsDoneAction(action) || isCancelCarAction(action)) {
    return -1;
  }

  return editCarId;
}

type CarsReducerActions = RefreshCarsDoneAction;

export const carsReducer: Reducer<Car[], CarsReducerActions> = (cars = [], action) => {

  // Eric's newer way
  if (isRefreshCarsDoneAction(action)) {
    return action.payload.cars;
  }

  // Eric's older way
  // if (action.type === REFRESH_CARS_DONE_ACTION) {
  //   return (action as RefreshCarsDoneAction).payload.cars;
  // }

  return cars;
};

export const carToolReducer: Reducer<CarToolState, AnyAction> = combineReducers({
  carsSort: carsSortReducer,
  editCarId: editCarIdReducer,
  cars: carsReducer,
});