import React, { useState, ChangeEvent } from 'react';

import { Car } from '../models/Car';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';

export type CarToolProps = {
  cars: Car[],
};

export function CarTool(props: CarToolProps) {

  const [ cars, setCars ] = useState(props.cars.concat());
  const [ carForm, setCarForm ] = useState({
    make: '', model: '', year: 1900, color: '', price: 0,
  });

  const change = (e: ChangeEvent<HTMLInputElement>) => {

    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.value,
    });

  };

  const addCar = () => {

    setCars(cars.concat({
      ...carForm,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    }));

    setCarForm({
      make: '', model: '', year: 1900, color: '', price: 0,
    });

  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} />
      <form>
        <label>
          Make
          <input type="text" name="make"
            value={carForm.make} onChange={change} />
        </label>
        <label>
          Model
          <input type="text" name="model"
            value={carForm.model} onChange={change} />
        </label>
        <label>
          Year
          <input type="number" name="year"
            value={carForm.year} onChange={change} />
        </label>
        <label>
          Color
          <input type="text" name="color"
            value={carForm.color} onChange={change} />
        </label>
        <label>
          Price
          <input type="text" name="price"
            value={carForm.price} onChange={change} />
        </label>
        <button type="button" onClick={addCar}>Add Car</button>
      </form>
    </>
  );
}