import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions,setOrderOptions} from '../../../redux/orderRedux';
//import  from './../../../redux/orderRedux';

const mapStateToProps = (state) => {
  return {
    options:getOrderOptions(state),
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    setOrderOptions: options => setOrderOptions(options),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
