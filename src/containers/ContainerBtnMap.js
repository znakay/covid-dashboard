import { connect } from 'react-redux';
import { setDataTypes } from '../actions';
import Button from '../components/links/Button';

const mapStateToProps = (newState, curState) => ({
  active: curState.typeData === newState.dataTypes
})

const mapDispatchToProps = (dispatch, curState) => ({
  onClick: () => dispatch(setDataTypes(curState.typeData))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)