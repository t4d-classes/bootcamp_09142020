import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  createAddAction, createSubtractAction,
  createMultiplyAction, createDivideAction,
  createClearAction,
} from '../actions/calcTool.actions';
import { CalcTool } from '../components/CalcTool';

const mapStateToProps = ({ result, history }) =>
  ({ result, history });

const mapDispatchToProps = dispatch => bindActionCreators({
  onAdd: createAddAction,
  onSubtract: createSubtractAction,
  onMultiply: createMultiplyAction,
  onDivide: createDivideAction,
  onClear: createClearAction,
}, dispatch);

export const CalcToolContainer = connect(
  mapStateToProps, mapDispatchToProps
)(CalcTool);
