import React from 'react';
import styles from './OrderOption.scss';


const OrderOptionNumber = ({  currentValue,setOptionValue }) => (
  <div className={styles.number}>
    <input className={styles.inputSmall} type='number'  value={currentValue} min='1' max='9' onChange={event => setOptionValue(event.currentTarget.value)} />
  </div>
);

export default OrderOptionNumber ;

