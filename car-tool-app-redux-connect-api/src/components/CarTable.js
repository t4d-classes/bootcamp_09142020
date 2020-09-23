import React, { memo as nemo } from 'react';
import PropTypes from 'prop-types';

import { ViewCarRow } from './ViewCarRow';
import { EditCarRow } from './EditCarRow';

export const CarTable = nemo(({
  cars, editCarId,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
  onSaveCar: saveCar,
  onCancelCar: cancelCar,
}) => {

  console.log('car table rendered');

  return <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Color</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {cars.map(car =>
        editCarId === car.id
          ? <EditCarRow key={car.id} car={car}
              onSaveCar={saveCar} onCancelCar={cancelCar} />
          : <ViewCarRow key={car.id} car={car}
              onEditCar={editCar} onDeleteCar={deleteCar} />)}
    </tbody>
  </table>;

});

CarTable.defaultProps = {
  cars: [],
  editCarId: -1,
};

CarTable.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    make: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    price: PropTypes.number,
    color: PropTypes.string,
  })).isRequired,
  editCarId: PropTypes.number,
  onEditCar: PropTypes.func.isRequired,
};
