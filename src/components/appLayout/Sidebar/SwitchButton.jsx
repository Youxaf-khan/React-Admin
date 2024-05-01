import React from 'react';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';

const BlueSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#fff',
    '&:hover': {
      backgroundColor: alpha('#29abe9', theme.palette.action.hoverOpacity)
    }
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#29abf0'
  },
  '& .MuiSwitch-track': {
    backgroundColor: '#6FC4E8' // Background color when unchecked
  }
}));

const SwitchButton = ({ checked, handleToggle, label }) => {
  return (
    <div>
      <BlueSwitch
        checked={checked}
        onChange={handleToggle}
        inputProps={{ 'aria-label': 'controlled' }}
        size="normal"
      />
      <label className="form-check-label">{label}</label>
    </div>
  );
};

export default SwitchButton;
