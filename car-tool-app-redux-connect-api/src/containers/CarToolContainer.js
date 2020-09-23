import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  refreshCars,
  appendCar,
  replaceCar,
  deleteCar,
  createEditCarAction,
  createCancelCarAction,
} from '../actions/carTool.actions';
import { CarTool } from '../components/CarTool';

const mapStateToProps = ({ cars, editCarId }) =>
  ({ cars, editCarId });

const mapDispatchToProps = dispatch => bindActionCreators({
  onRefreshCars: refreshCars,
  onAppendCar: appendCar,
  onReplaceCar: replaceCar,
  onDeleteCar: deleteCar,
  onEditCar: createEditCarAction,
  onCancelCar: createCancelCarAction,
}, dispatch);

export const CarToolContainer = connect(
  mapStateToProps, mapDispatchToProps
)(CarTool);
