import React from 'react';
import SwitchButton from '../../../appLayout/Sidebar/SwitchButton';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const OpeningHoursForm = ({ weekdays, handleToggle, handleTimeChange }) => {
  return (
    <div className="me-2 form-container">
      {Object.keys(weekdays).map((day) => (
        <div key={day} className="d-flex flex-row align-items-center justify-content-between">
          <div style={{ width: '70px' }}>{day}</div>
          <div>
            <SwitchButton
              handleToggle={() => handleToggle(day)}
              checked={weekdays[day].open}
              label={weekdays[day].open ? 'Open' : 'Closed'}
            />
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['TimePicker']}>
                <TimePicker
                  sx={{ gap: 5 }}
                  label="From"
                  disabled={!weekdays[day].open}
                  value={weekdays[day].from}
                  onChange={(newValue) => handleTimeChange(day, 'from', newValue)}
                />
                <TimePicker
                  sx={{ gap: 5 }}
                  label="To"
                  disabled={!weekdays[day].open}
                  value={weekdays[day].to}
                  onChange={(newValue) => handleTimeChange(day, 'to', newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OpeningHoursForm;
