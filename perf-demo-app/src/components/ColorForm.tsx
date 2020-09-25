import React, { useState, ChangeEvent } from 'react';

export type ColorFormData = {
  name: string,
  hexcode: string,
}

export type ColorFormProps = {
  buttonText?: string,
  onSubmitColor: (colorFormData: ColorFormData) => void,
};

export function ColorForm(props: ColorFormProps) {

  const [ colorForm, setColorForm ] = useState({
    colorName: '', colorHexcode: '',
  });

  const change = (e: ChangeEvent<HTMLInputElement>) => {

    setColorForm({
      ...colorForm,
      [ e.target.name ]: e.target.value,
    });

  };

  const submitColor = () => {

    props.onSubmitColor({
      name: colorForm.colorName,
      hexcode: colorForm.colorHexcode,
    });

    setColorForm({
      colorName: '', colorHexcode: '',
    });

  };

  return (
    <form>
      <div>
        <label>
          Color Name
          <input type="text" name="colorName" value={colorForm.colorName} onChange={change} />
        </label>
      </div>
      <div>
        <label>
          Color Hexcode
          <input type="text" name="colorHexcode" value={colorForm.colorHexcode} onChange={change} />
        </label>
      </div>
      <button type="button" onClick={submitColor}>{props.buttonText}</button>
    </form>
  );

}

ColorForm.defaultProps = {
  buttonText: 'Submit Color',
};

