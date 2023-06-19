import React, { LegacyRef } from 'react';
import { ISelectProps } from '../../../types/types';
import s from './select.module.css'

const Select = React.forwardRef(({onChange, name, label, options}: ISelectProps, ref: LegacyRef<HTMLSelectElement>):JSX.Element =>{
    return(
        <div className={s.select}>
          <label>{label}</label>
          <select name={name} onChange={onChange} className={s['select-box']} ref={ref}>
          <option value="">Select your option</option>
            {options?.map(item=><option value={item} key={item}>{item}</option>)}
          </select>
        </div>
    );
})

Select.displayName = 'Select';

export default Select;


