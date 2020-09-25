import React, { ChangeEvent, Component } from "react";

import { Car } from "../models/Car";

export type CarEditRowProps = {
  car: Car;
  onSaveCar: (car: Car) => void;
  onCancelCar: () => void;
};

type CarEditRowState = {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  [x: string]: any;
};

export class CarEditRow extends Component<CarEditRowProps, CarEditRowState> {
  // state = {
  //   make: this.props.car.make,
  //   model: this.props.car.model,
  //   year: this.props.car.year,
  //   color: this.props.car.color,
  //   price: this.props.car.price,
  // };

  constructor(props: CarEditRowProps) {
    super(props);

    this.state = {
      make: props.car.make,
      model: props.car.model,
      year: props.car.year,
      color: props.car.color,
      price: props.car.price,
    };

    this.change = this.change.bind(this);
    this.saveCar = this.saveCar.bind(this);
  }

  change(e: ChangeEvent<HTMLInputElement>) {
    // change = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // saveCar() {
  saveCar = () => {
    this.props.onSaveCar({
      ...this.state,
      id: this.props.car.id,
    });
  };

  render() {
    return (
      <tr>
        <td>{this.props.car.id}</td>
        <td>
          <input
            type="text"
            name="make"
            value={this.state.make}
            onChange={this.change}
          />
        </td>
        <td>
          <input
            type="text"
            name="model"
            value={this.state.model}
            onChange={this.change}
          />
        </td>
        <td>
          <input
            type="number"
            name="year"
            value={this.state.year}
            onChange={this.change}
          />
        </td>
        <td>
          <input
            type="text"
            name="color"
            value={this.state.color}
            onChange={this.change}
          />
        </td>
        <td>
          <input
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.change}
          />
        </td>
        <td>
          <button type="button" onClick={this.saveCar}>
            Save
          </button>
          <button type="button" onClick={this.props.onCancelCar}>
            Cancel
          </button>
        </td>
      </tr>
    );
  }
}
