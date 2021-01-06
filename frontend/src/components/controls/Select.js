import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select as MuiSelect,
} from '@material-ui/core';
import React from 'react';

const Select = (props) => {
    const { name, label, value, onChange, error = null, options } = props;
    return (
        <FormControl
            variant='outlined'
            {...(error && { error: true })}
            className='form-select'
        >
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}
            >
                <MenuItem value=''>None</MenuItem>
                {options.map((item) => (
                    <MenuItem key={item.id} value={item.title}>
                        {item.title}
                    </MenuItem>
                ))}
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    );
};

export default Select;
