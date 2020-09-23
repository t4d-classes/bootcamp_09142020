import { Action, Dispatch } from 'redux';

import { Car, NewCar, CarKeys } from '../models/Car';

export const REFRESH_CARS_REQUEST_ACTION = 'REFRESH_CARS_REQUEST';
export const REFRESH_CARS_DONE_ACTION = 'REFRESH_CARS_DONE';

export const APPEND_CAR_REQUEST_ACTION = 'APPEND_CAR_REQUEST';
export const REPLACE_CAR_REQUEST_ACTION = 'REPLACE_CAR_REQUEST';
export const REMOVE_CAR_REQUEST_ACTION = 'REMOVE_CAR_REQUEST';
export const EDIT_CAR_ACTION = 'EDIT_CAR';
export const CANCEL_CAR_ACTION = 'CANCEL_CAR';
export const SORT_CARS_ACTION = 'SORT_CARS';

// Refresh Cars Action

export type RefreshCarsRequestAction = Action<string>;

export interface RefreshCarsDoneAction extends Action<string> {
  payload: { cars: Car[] }
}

export type CreateRefreshCarsRequestAction = () => RefreshCarsRequestAction;
export type CreateRefreshCarsDoneAction = (cars: Car[]) => RefreshCarsDoneAction;

export function isRefreshCarsRequestAction(action: Action<string>): action is RefreshCarsRequestAction {
  return REFRESH_CARS_REQUEST_ACTION === action.type;
}

export function isRefreshCarsDoneAction(action: Action<string>): action is RefreshCarsDoneAction {
  return REFRESH_CARS_DONE_ACTION === action.type;
}

export const createRefreshCarsRequestAction: CreateRefreshCarsRequestAction = () => ({
  type: REFRESH_CARS_REQUEST_ACTION,
});

export const createRefreshCarsDoneAction: CreateRefreshCarsDoneAction = (cars: Car[]) => ({
  type: REFRESH_CARS_DONE_ACTION, payload: { cars }
});

export const refreshCars = () => {

  // this is the function object which is dispatched
  return async (dispatch: Dispatch) => {
    dispatch(createRefreshCarsRequestAction());
    const res = await fetch('http://localhost:3060/cars');
    const cars = await res.json();
    dispatch(createRefreshCarsDoneAction(cars));
  };

};

// End Refresh Cars Action

// New Car Action

export interface AppendCarRequestAction extends Action<string> {
  payload: { car: NewCar }
}

export type CreateAppendCarRequestAction = (car: NewCar) => AppendCarRequestAction

export function isAppendCarRequestAction(action: Action<string>): action is AppendCarRequestAction {
  return APPEND_CAR_REQUEST_ACTION === action.type;
}

export const createAppendCarRequestAction: CreateAppendCarRequestAction = (car) => ({
  type: APPEND_CAR_REQUEST_ACTION, payload: { car },
});

export const appendCar = (car: NewCar) => {

  return async (dispatch: Dispatch) => {
    dispatch(createAppendCarRequestAction(car));
    await fetch('http://localhost:3060/cars', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    });
    refreshCars()(dispatch);
  };

};

// End New Car Action

// Existing Car Action

export interface ReplaceCarRequestAction extends Action<string> {
  payload: { car: Car }
}

export type CreateReplaceCarRequestAction = (car: Car) => ReplaceCarRequestAction

export function isReplaceCarRequestAction(action: Action<string>): action is ReplaceCarRequestAction {
  return REPLACE_CAR_REQUEST_ACTION === action.type;
}

export const createReplaceCarRequestAction: CreateReplaceCarRequestAction = (car) => ({
  type: REPLACE_CAR_REQUEST_ACTION, payload: { car },
});

export const replaceCar = (car: Car) => {

  return async (dispatch: Dispatch) => {
    dispatch(createReplaceCarRequestAction(car));
    await fetch('http://localhost:3060/cars/' + encodeURIComponent(car.id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    });
    refreshCars()(dispatch);
  };

};


// End Existing Car Action

// Remove Car Action

export interface RemoveCarRequestAction extends Action<string> {
  payload: { carId: number }
}

export type CreateRemoveCarRequestAction = (carId: number) => RemoveCarRequestAction

export function isRemoveCarRequestAction(action: Action<string>): action is RemoveCarRequestAction {
  return action.type === REMOVE_CAR_REQUEST_ACTION;
}

export const createRemoveCarRequestAction: CreateRemoveCarRequestAction = (carId) => ({
  type: REMOVE_CAR_REQUEST_ACTION, payload: { carId },
});


export const removeCar = (carId: number) => {

  return async (dispatch: Dispatch) => {
    dispatch(createRemoveCarRequestAction(carId));
    await fetch('http://localhost:3060/cars/' + encodeURIComponent(carId), {
      method: 'DELETE',
    });
    refreshCars()(dispatch);
  };

};


// End Remove Action

// Edit Car Action

export interface EditCarAction extends Action<string> {
  payload: { carId: number }
}

export type CreateEditCarAction = (carId: number) => EditCarAction

export function isEditCarAction(action: Action<string>): action is EditCarAction {
  return action.type === EDIT_CAR_ACTION;
}


export const createEditCarAction: CreateEditCarAction = (carId) => ({
  type: EDIT_CAR_ACTION, payload: { carId },
});

// End Edit Car Car


// Car Action

export type CancelCarAction = Action<string>;

export type CreateCancelCarAction = () => CancelCarAction

export function isCancelCarAction(action: Action<string>): action is CancelCarAction {
  return action.type === CANCEL_CAR_ACTION;
}

export const createCancelCarAction: CreateCancelCarAction = () => ({
  type: CANCEL_CAR_ACTION,
});

// End Car Action

// Sort Cars Action

export interface SortCarsAction extends Action<string> {
  payload: { col: CarKeys }
}

export type CreateSortCarsAction = (col: CarKeys) => SortCarsAction

export function isSortCarsAction(action: Action<string>): action is SortCarsAction {
  return action.type === SORT_CARS_ACTION;
}

export const createSortCarsAction: CreateSortCarsAction = (col: CarKeys) => ({
  type: SORT_CARS_ACTION, payload: { col },
});

// End Sort Cars Action