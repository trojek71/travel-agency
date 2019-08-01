import React from 'react';
import styles from './OrderOption.scss';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import { parseOptionPrice } from '../../../utils/parseOptionPrice';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
};


{/*const OrderOption =(pricing) => (
  <div className={styles.component}>
    <h3  className={styles.title}>{pricing.id}</h3>
  </div>
);
export default OrderOption;
*/}

const OrderOption = ({currentValue,name, type, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  const setOrderOption={setOrderOption};


  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          {...otherProps}
          currentValue={currentValue}

        />
      </div>
    );
  }
};
export default OrderOption;
