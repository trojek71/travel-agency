import React from 'react';
import styles from './OrderOption.scss';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';


const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
};


const OrderOption = ({setOrderOption,id,currentValue,name, type, ...otherProps}) => {
  const OptionComponent = optionTypes[type];



  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          {...otherProps}
          currentValue={currentValue}
          setOptionValue={value => setOrderOption({[id]: value})}
        />
      </div>
    );
  }
};
export default OrderOption;
