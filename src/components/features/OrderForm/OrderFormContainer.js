import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import getOrderOptions from '../../../redux/orderRedux';
import setOrderOptions from './../../../redux/orderRedux';

const mapStateToProps = (state) => {


  return {
    options:getOrderOptions(state),
    setOrderOptions:setOrderOptions(state),
  };
};

export default connect(mapStateToProps)(OrderForm);
