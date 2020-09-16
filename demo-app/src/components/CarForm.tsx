import React, { useState, ChangeEvent } from 'react';

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
      [ e.target.name ]: e.target.value,
    });

  };

  const submitCar = () => {

    props.onSubmitCar(carForm);

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
      <button type="button" onClick={submitCar}>{props.buttonText}</button>
    </form>
  );
}