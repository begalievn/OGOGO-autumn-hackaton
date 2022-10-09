// modules
import React from 'react';

// styles
import classes from './checkBox.module.scss';

const CheckBox = ({label, checked, onChange, name}) => {
    return (
        <div className={classes.checkbox_div}>
            <label className={classes.form_control}>
                <input
                    className={classes.input}
                    type="checkbox"
                    checked={checked}
                    name={name}
                    onChange={onChange}
                />
                { label }
            </label>
        </div>
    );
};

export default CheckBox;
