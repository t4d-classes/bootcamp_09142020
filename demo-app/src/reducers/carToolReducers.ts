import { Reducer, combineReducers, AnyAction } from 'redux';

import { Car } from '../models/Car';
import { CarsSort } from '../models/CarTool';
import { CarToolState } from '../models/CarToolState';

import {
  REFRESH_CARS_DONE_ACTION, isRefreshCarsDoneAction,
  EDIT_CAR_ACTION, isExistingCarAction, isNewCarAction,
  REMOVE_CAR_ACTION, isCarAction, APPEND_CAR_ACTION, REPLACE_CAR_ACTION, isSortCarsAction
} from '../actions/carToolActions';

import {
  SortCarsAction, NewCarAction, ExistingCarAction,
  CarIdAction, CarAction, isCarIdAction,
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

type EditCarIdReducerActions = NewCarAction | ExistingCarAction | CarIdAction | CarAction;

export const editCarIdReducer: Reducer<number, EditCarIdReducerActions> = (editCarId = -1, action) => {

  if (isCarIdAction(action)) {
    if (action.type === EDIT_CAR_ACTION) {
      return action.payload.carId;
    }

    if (action.type === REMOVE_CAR_ACTION) {
      return -1;
    }
  } 

  if (isNewCarAction(action) || isExistingCarAction(action) || isCarAction(action)) {
    return -1;
  }

  return editCarId;
}

type CarsReducerActions = NewCarAction | ExistingCarAction | CarIdAction;

export const carsReducer: Reducer<Car[], CarsReducerActions> = (cars = [], action) => {

  if (isRefreshCarsDoneAction(action)) {
    return action.payload.cars;
  }

  if (isNewCarAction(action) && action.type === APPEND_CAR_ACTION) {
    return [
      ...cars,
      {
        ...action.payload.car,
        id: Math.max(...cars.map(c => c.id), 0) + 1,
      },
    ];
  }

  if (isExistingCarAction(action) && action.type === REPLACE_CAR_ACTION) {
    const carIndex = cars.findIndex(c => c.id === action.payload.car.id);
    const newCars = cars.concat();
    newCars[carIndex] = action.payload.car;
    return newCars
  }

  if (isCarIdAction(action) && action.type === REMOVE_CAR_ACTION) {
    return cars.filter(c => c.id !== action.payload.carId);
  }

  return cars;
};

export const carToolReducer: Reducer<CarToolState, AnyAction> = combineReducers({
  carsSort: carsSortReducer,
  editCarId: editCarIdReducer,
  cars: carsReducer,
});