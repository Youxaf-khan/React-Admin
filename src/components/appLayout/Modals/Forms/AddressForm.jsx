import React from 'react';
import Grid from '@mui/material/Grid';
import BasicTextField from '../../MuiComponents/BasicTextField';

import CountrySelect from '../../MuiComponents/CountrySelect'; // Create a CountrySelect component

const AddressForm = ({
  addressOne,
  handleAddressOneChange,
  addressTwo,
  handleAddressTwoChange,
  city,
  handleCityChange,
  stateProvince,
  handleStateProvinceChange,
  other,
  handleOtherChange,
  postalCode,
  handlePostalCodeChange,
  timeZone,
  handleTimeZoneChange
}) => {
  return (
    <div className="form-container">
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={6}>
          <BasicTextField
            fullWidth
            id="address-1"
            label="Address line 1"
            variant="outlined"
            value={addressOne}
            onChange={handleAddressOneChange}
          />
        </Grid>
        <Grid item xs={6}>
          <BasicTextField
            fullWidth
            id="address-2"
            label="Address line 2"
            variant="outlined"
            value={addressTwo}
            onChange={handleAddressTwoChange}
          />
        </Grid>
        <Grid item xs={6}>
          <BasicTextField
            fullWidth
            id="city"
            label="City"
            variant="outlined"
            value={city}
            onChange={handleCityChange}
          />
        </Grid>
        <Grid item xs={6}>
          <BasicTextField
            fullWidth
            id="state-province"
            label="State / Province"
            variant="outlined"
            value={stateProvince}
            onChange={handleStateProvinceChange}
          />
        </Grid>
        <Grid item xs={6}>
          <BasicTextField
            fullWidth
            color=""
            id="other"
            label="Other"
            variant="outlined"
            value={other}
            onChange={handleOtherChange}
          />
        </Grid>
        <Grid item xs={6}>
          <BasicTextField
            fullWidth
            id="code"
            label="Postal Code"
            variant="outlined"
            value={postalCode}
            onChange={handlePostalCodeChange}
          />
        </Grid>
        <Grid item xs={6}>
          <CountrySelect />
        </Grid>
        <Grid item xs={6}>
          <BasicTextField
            fullWidth
            id="time-zone"
            label="Time zone"
            variant="outlined"
            value={timeZone}
            onChange={handleTimeZoneChange}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default AddressForm;
