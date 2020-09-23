import {
  REFRESH_CARS_DONE_ACTION,
  EDIT_CAR_ACTION,
  REFRESH_CARS_REQUEST_ACTION,
  CANCEL_CAR_ACTION,
} from '../actions/carTool.actions';

export const carToolReducer = (state = {}, action) => {

  return {
    ...state,
    cars: carsReducer(state.cars, action),
    editCarId: editCarIdReducer(state.editCarId, action),
  };

};

const carsReducer = (cars = [], { type, payload }) => {

  switch (type) {
    case REFRESH_CARS_DONE_ACTION:
      return payload.cars;
    default:
      return cars;
  }

};

const editCarIdReducer = (state = -1, { type, payload }) => {

  if (type === EDIT_CAR_ACTION) {
    return payload.carId;
  }

  if ([
    REFRESH_CARS_REQUEST_ACTION, CANCEL_CAR_ACTION
  ].includes(type)) {
    return -1;
  }

  return state;
};

