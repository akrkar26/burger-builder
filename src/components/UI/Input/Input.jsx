import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    let inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.pristine) {
        inputClasses.push(classes.Invalid);
    }

    switch(props.elementType) {
        case ('input'):
            inputElement = <input  className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}></input>;
            break;
        case ('textarea'):
            inputElement = <textarea {...props.elementConfig} className={inputClasses.join(' ')} value={props.value} onChange={props.changed}></textarea>;
            break;
        case  ('select'):
            inputElement = (
                <select className={inputClasses.join(' ')} value={props.value} onChange={props.changed}>
                    {props.elementConfig.options.map((option) => {
                        return <option key={option.value} value={option.value}>{option.displayValue}</option>;
                    })}
                </select>
            );
            break;
        default:
            inputElement = <input {...props.elementConfig} className={inputClasses.join(' ')} value={props.value} onChange={props.changed}></input>;
    }

    return ( 
        <div className={classes.Input}>
            <label className={classes.Label}>
                {props.label}
            </label>
            {inputElement}
        </div>
     );
}
 
export default input;