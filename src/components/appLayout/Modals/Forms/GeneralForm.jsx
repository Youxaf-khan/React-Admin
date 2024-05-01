import React from 'react';
import Grid from '@mui/material/Grid';
import BasicTextField from '../../MuiComponents/BasicTextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const GeneralForm = ({
  setLocationName,
  locationName,
  setLocationType,
  locationType,
  setEmail,
  email,
  setPhone,
  phone,
  setWair,
  wair,
  setWpn,
  wpn
}) => {
  const handleLocationNameChange = (e) => {
    setLocationName(e.target.value);
  };

  const handleLocationTypeChange = (e) => {
    setLocationType(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlWairToggle = () => {
    setWair(!wair);
  };

  const handlWpnToggle = () => {
    setWpn(!wpn);
  };

  return (
    <div className="form-container">
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={6}>
          <BasicTextField
            fullWidth
            id="location-name"
            label="Location Name"
            variant="outlined"
            value={locationName}
            onChange={handleLocationNameChange}
          />
        </Grid>
        <Grid item xs={6}>
          <BasicTextField
            fullWidth
            id="location-type"
            label="Location Type"
            variant="outlined"
            value={locationType}
            onChange={handleLocationTypeChange}
          />
        </Grid>
        <Grid item xs={6}>
          <BasicTextField
            fullWidth
            id="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
          />
        </Grid>
        <Grid item xs={6}>
          <BasicTextField
            fullWidth
            id="phone"
            label="Phone"
            variant="outlined"
            value={phone}
            onChange={handlePhoneChange}
          />
        </Grid>
        <Grid item xs={6} md={7}>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value={wair}
              control={
                <Checkbox
                  onChange={handlWairToggle}
                  sx={{
                    color: `gray`,
                    '&.Mui-checked': {
                      color: `#29abe2`
                    }
                  }}
                />
              }
              label="Wizards Authorized Internet Retailer"
              labelPlacement="end"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={6} md={7}>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value={wpn}
              control={
                <Checkbox
                  onChange={handlWpnToggle}
                  sx={{
                    color: `gray`,
                    '&.Mui-checked': {
                      color: `#29abe2`
                    }
                  }}
                />
              }
              label="WPN Store"
              labelPlacement="end"
            />
          </FormGroup>
        </Grid>
      </Grid>
    </div>
  );
};

export default GeneralForm;
