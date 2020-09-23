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
        <input type="text" name="make" id="make-input"
               value={carForm.make} onChange={change} />
      </label>
      <label>
        Model
        <input type="text" name="model" id="model-input"
               value={carForm.model} onChange={change} />
      </label>
      <label>
        Year
        <input type="number" name="year" id="year-input"
               value={nanToString(carForm.year)} onChange={change} />
      </label>
      <label>
        Color
        <input type="text" name="color" id="color-input"
               value={carForm.color} onChange={change} />
      </label>
      <label>
        Price
        <input type="number" name="price" id="price-input"
               value={nanToString(carForm.price)} onChange={change} />
      </label>
      <button type="button" onClick={setupSubmitCar(props, carForm, resetCarForm)}>{props.buttonText}</button>
    </form>
  );
}