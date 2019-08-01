import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from './../OrderSummary/OrderSummary';
import styles from './OrderForm.scss';
import pricing from  './../../../data/pricing.json';
import OrderOption from './../OrderOption/OrderOption';

const OrderForm =({tripCost,options}) => (


  <Row>
    {pricing.map(price => (
      <Col md={4} key={price.id}>
        <OrderOption {...price} currentValue={options[price.id]} />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options}/>
    </Col>
  </Row>
);

OrderForm.propTypes =   {

  tripCost: PropTypes.string,
  options: PropTypes.object,
  currentValue: PropTypes.array,

};

export default OrderForm;
