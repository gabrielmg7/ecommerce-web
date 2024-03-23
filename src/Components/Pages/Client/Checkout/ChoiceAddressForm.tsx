import { Grid, Icon } from '@mui/material'
import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import { Place } from '@mui/icons-material';

const ChoiceAddressForm = () => {
  return (
    <Grid container direction={"row"} spacing={1}>
        <Grid>
            <PlaceIcon/>
        </Grid>
    </Grid>

)
}

export default ChoiceAddressForm