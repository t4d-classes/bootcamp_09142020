import { Action } from 'redux';

import { Car, NewCar, CarKeys } from '../models/Car';

export const APPEND_CAR_ACTION = 'APPEND_CAR';
export const REPLACE_CAR_ACTION = 'REPLACE_CAR';
export const REMOVE_CAR_ACTION = 'REMOVE_CAR';
export const EDIT_CAR_ACTION = 'EDIT_CAR';
export const CANCEL_CAR_ACTION = 'CANCEL_CAR';
export const SORT_CARS_ACTION = 'SORT_CARS';

// New Car Action

export interface NewCarAction extends Action<string> {
  payload: { car: NewCar }
}

export type CreateNewCarAction = (car: NewCar) => NewCarAction

export function isNewCarAction(action: Action<string>): action is NewCarAction {
  return [ APPEND_CAR_ACTION ].includes(action.type);
}

export const createAppendCarAction: CreateNewCarAction = (car) => ({
  type: APPEND_CAR_ACTION, payload: { car },
});

// End New Car Action

// Existing Car Action

export interface ExistingCarAction extends Action<string> {
  payload: { car: Car }
}

export type CreateExistingCarAction = (car: Car) => ExistingCarAction

export function isExistingCarAction(action: Action<string>): action is ExistingCarAction {
  return [ REPLACE_CAR_ACTION ].includes(action.type);
}

export const createReplaceCarAction: CreateExistingCarAction = (car) => ({
  type: REPLACE_CAR_ACTION, payload: { car },
});

// End Existing Car Action

// Car Id Action

export interface CarIdAction extends Action<string> {
  payload: { carId: number }
}

export type CreateCarIdAction = (carId: number) => CarIdAction

export function isCarIdAction(action: Action<string>): action is CarIdAction {
  return [ REMOVE_CAR_ACTION, EDIT_CAR_ACTION ].includes(action.type);
}

export const createRemoveCarAction: CreateCarIdAction = (carId) => ({
  type: REMOVE_CAR_ACTION, payload: { carId },
});

export const createEditCarAction: CreateCarIdAction = (carId) => ({
  type: EDIT_CAR_ACTION, payload: { carId },
});

// End Car Id Action

// Car Action

export type CarAction = Action<string>;

export type CreateCarAction = () => CarAction

export function isCarAction(action: Action<string>): action is CarAction {
  return [ CANCEL_CAR_ACTION ].includes(action.type);
}

export const createCancelCarAction: CreateCarAction = () => ({
  type: CANCEL_CAR_ACTION,
});

// End Car Action

// Sort Cars Action

export interface SortCarsAction extends Action<string> {
  payload: { col: CarKeys }
}

export type CreateSortCarsAction = (col: CarKeys) => SortCarsAction

export function isSortCarsAction(action: Action<string>): action is SortCarsAction {
  return [ SORT_CARS_ACTION ].includes(action.type);
}

export const createSortCarsAction: CreateSortCarsAction = (col: CarKeys) => ({
  type: SORT_CARS_ACTION, payload: { col },
});

// End Sort Cars Action