import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from "@date-io/date-fns";
import Paper from '@material-ui/core/Paper';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import AutoComplete from './AutoComplete';

const Form = (props) => {
  const { firstName, lastName, dob, language, phoneNumber, email, address, reason } = props.formData

  const changeData = (key, value) => {
    props.setFormData({
      ...props.formData,
      [`${key}`]: value
    })
  }
  
  return (
    <React.Fragment>
      <Paper id="Form">
        <Typography variant="h6" gutterBottom>
          New Refferal
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="fname"
              value={firstName}
              onChange={e => changeData('firstName', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="lname"
              value={lastName}
              onChange={e => changeData('lastName', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                clearable
                // value={new Date()}
                // onChange={date => handleDateChange(date)}
                // minDate={new Date()}
                format="MM/dd/yyyy"
                label="Date of Birth"
                value={dob}
                onChange={e => changeData('dob', e.target.value)}
              />
            </MuiPickersUtilsProvider>          
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="contactLanguage"
              name="contactLanguage"
              label="Contact Language"
              fullWidth
              autoComplete="language"
              value={language}
              onChange={e => changeData('language', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="phone"
              name="phone"
              label="Phone Number"
              fullWidth
              autoComplete="phone number"
              value={phoneNumber}
              onChange={e => changeData('phoneNumber', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="email"
              name="email"
              label="Email"
              value={email}
              onChange={e => changeData('email', e.target.value)}
              fullWidth 
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <AutoComplete/>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="reason"
              name="reason"
              label="Note/Reason"
              fullWidth
              autoComplete="reason"
              value={reason}
              onChange={e => changeData('reason', e.target.value)}
            />
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  )
}

export default Form;

// AIzaSyDIB39k_9mTEjfwjTCVhrSsX7LJfBAmaac