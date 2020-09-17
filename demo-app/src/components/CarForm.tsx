import React, { useState, ChangeEvent } from 'react';

import { nanToString } from '../utils';

export type CarFormData = {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
}

export type CarFormProps = {
  buttonText: string,
  onSubmitCar: (carForm: CarFormData) => void,
};

export function CarForm(props: CarFormProps) {

  const [ carForm, setCarForm ] = useState<CarFormData>({
    make: '', model: '', year: 1900, color: '', price: 0,
  });

  const change = (e: ChangeEvent<HTMLInputElement>) => {

    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.type === 'number'
        ? e.target.valueAsNumber : e.target.value,
    });

  };

  console.log(carForm);

  const submitCar = () => {

    props.onSubmitCar({
      ...carForm,
      // year: isNaN(carForm.year) ? 0 : carForm.year,
      // price: isNaN(carForm.price) ? 0 : carForm.price,
    });

    setCarForm({
      make: '', model: '', year: 1900, color: '', price: 0,
    });
  };

  return (
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
               value={nanToString(carForm.year)} onChange={change} />
      </label>
      <label>
        Color
        <input type="text" name="color"
               value={carForm.color} onChange={change} />
      </label>
      <label>
        Price
        <input type="number" name="price"
               value={nanToString(carForm.price)} onChange={change} />
      </label>
      <button type="button" onClick={submitCar}>{props.buttonText}</button>
    </form>
  );
}