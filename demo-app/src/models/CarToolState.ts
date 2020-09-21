import { Car } from '../models/Car';
import { CarsSort } from '../models/CarTool';

export type CarToolState = {
  carsSort: CarsSort,
  editCarId: number,
  cars: Car[],
}