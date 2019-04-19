/* eslint-disable linebreak-style */
import ShowErrors from '../ui/ShowErrors';
import { connect } from 'react-redux';
import { clearError } from '../../actions';

const mapStateToProps = state => {
  return {
    errors: state.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClearError(index) {
      dispatch(
        clearError(index)
      );
    }
  };
};

// const Container = connect(mapStateToProps)(ShowErrors);

// export default () =>
// 	<ShowErrors errors={['sample error']}
// 						  onClearError={index => console.log('todo: clear error at', index)} />

export default connect(mapStateToProps, mapDispatchToProps)(ShowErrors);
