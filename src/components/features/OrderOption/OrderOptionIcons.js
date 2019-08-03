import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice}   from './../../../utils/formatPrice';
import Icon from './../../common/Icon/Icon';


const OrderOptionIcons = ({name,values, required, currentValue, setOptionValue}) => (
  <div
    className={styles.icon}
    value={currentValue}
    onClick={event => setOptionValue(event.currentTarget.value)}
  >
    {required ? '' : (
      <div setOptionValue='null' value='none'></div>
    )}
    {values.map(value => (
      <div className ={styles.icon}  key={value.id} value={value.id}>
        {value.name}({formatPrice(value.price)})
      </div>

    ))}
    <Icon  name= {name}></Icon>
  </div>

);

export default OrderOptionIcons ;
