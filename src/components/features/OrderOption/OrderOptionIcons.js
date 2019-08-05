import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice}   from './../../../utils/formatPrice';
import Icon from './../../common/Icon/Icon';


const OrderOptionIcons = ({name,values,required, setOptionValue}) => (
  <div
    className={styles.icon}
  >
    {required ? '' : (
      <div key='null' value=''></div>
    )}
    {values.map(value => (
      <div  className={styles.iconActive} key={value.id} onClick={event => setOptionValue(event.currentTarget.value) } ><Icon name={value.id}/> {value.name} ({formatPrice(value.price)})</div>
    ))}
  </div>
);


export default OrderOptionIcons ;
