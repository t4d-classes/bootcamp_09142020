import { Car } from './Car';

export type CarsSort = {
  col: keyof Car,
  dir: string,
}