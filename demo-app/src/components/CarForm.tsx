import React from 'react';

import { nanToString } from '../utils';
import { useForm } from '../hooks/useForm';
import { CarFormData } from '../models/CarTool';

export type CarFormProps = {
  buttonText: string,
  onSubmitCar: (carForm: CarFormData) => void,
};

const setupSubmitCar = (props: CarFormProps, carForm: any, resetCarForm: () => void) => {
  return () => {
    props.onSubmitCar({
      ...carForm,
    });
  
    resetCarForm();
  };
}


export function CarForm(props: CarFormProps) {

  const [ carForm, change, resetCarForm ] = useForm({
    make: '', model: '', year: 1900, color: '', price: 0,
  });


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
      <button type="button" onClick={setupSubmitCar(props, carForm, resetCarForm)}>{props.buttonText}</button>
    </form>
  );
}