import { Car } from './Car';

export type CarsSort = {
  // col: string,
  // col: CarKeys,
  col: keyof Car,
  dir: string,
}

export type CarFormData = {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
}

export type CarToolState = {
  sortedCars: Car[],
  editCarId: number,
  carsSort: CarsSort,
}

export type CarToolActions = {
  addCar: (carForm: CarFormData) => void,
  saveCar: (car: Car) => void,
  deleteCar: (carId: number) => void,
  editCar: (carId: number) => void,
  cancelCar: () => void,
  sortCars: (col: keyof Car) => void,
}

export type CarToolStore = CarToolState & CarToolActions;