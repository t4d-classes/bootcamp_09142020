export type Car = {
  id: number,
  make: string,
  model: string,
  year: number,
  color: string,
  price: number,
  // [ x:string ]: any,
}

export type CarKeys = 'id' | 'make' | 'model' | 'year' | 'color' | 'price';

export type NewCar = Omit<Car, 'id'>;

