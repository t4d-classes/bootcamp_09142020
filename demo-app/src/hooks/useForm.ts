import { useState, ChangeEvent } from 'react';

type HTMLFormControls =
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

type UseForm = <FormDataType>(initialForm: FormDataType) =>
  ([ FormDataType, (e: ChangeEvent<HTMLFormControls>) => void, () => void ]);

// type guard
function isInput(x: any): x is HTMLInputElement {
  return x instanceof HTMLInputElement;
}

export const useForm: UseForm = (initialForm) => {

  const [ form, setForm ] = useState({ ...initialForm });

  const change = (e: ChangeEvent<HTMLFormControls>) => {

    setForm({
      ...form,
      [ e.target.name ]: isInput(e.target) && e.target.type === 'number'
        ? e.target.valueAsNumber : e.target.value,
    });

  };

  const resetForm = () => setForm({ ...initialForm });

  return [ form, change, resetForm ];

};