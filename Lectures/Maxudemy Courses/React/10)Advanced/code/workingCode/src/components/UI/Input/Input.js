import React,{useRef, useImperativeHandle} from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props,ref) => {

    const inputRef = useRef();
    const activate = () => {
        inputRef.current.focus();
        //console.log(inputRef.current);
    };

    useImperativeHandle(ref, () => {
        return {focus: activate}
    })

    return (
        <div
        className={`${classes.control} ${
          props.isValid === false ? classes.invalid : ''
        }`}
      >
        <label htmlFor = {props.id}>{props.label}</label>
        <input
          type="email"
          id="email"
          ref = {inputRef}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </div>
    );
});

export default Input