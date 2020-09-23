import { Item } from '../models/Item';

export interface Car extends Item {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
}