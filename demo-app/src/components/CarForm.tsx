import React from 'react';

import { nanToString } from '../utils';
import { useForm } from '../hooks/useForm';

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

  const [ carForm, change, resetCarForm ] = useForm({
    make: '', model: '', year: 1900, color: '', price: 0,
  });

  const submitCar = () => {

    props.onSubmitCar({
      ...carForm,
    });

    resetCarForm();
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