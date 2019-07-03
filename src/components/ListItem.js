import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from "@date-io/date-fns";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import AutoComplete from './AutoComplete';

const ListItem = (props) => {
  const { firstName, lastName, dob, language, phoneNumber, email, address, reason } = props.formData
  const index = props.index;
  const handleDelete = props.handleDelete;

  const [expanded, setExpanded] = useState(props.expanded);

  useEffect(() => {
    if (!props.expanded) {
      setExpanded(false)
    }
  }, [props.expanded])

  const changeData = (key, value) => {
    if (key === 'dob') {
      if (value.toString() !== 'Invalid Date') {
        const formatDate = new DateFnsUtils().format(
          value,
          'MM/dd/yyyy'
        )
        value = formatDate
      }
    }
    props.handleChange({
      ...props.formData,
      [`${key}`]: value
    }, index)
  }
  return (
    <React.Fragment>
      <ExpansionPanel expanded={expanded}  onChange={(event, expand) => {setExpanded(!expanded)}}>
        <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
          <Typography variant="h6" gutterBottom className={`list-num list-num-${index + 1}`}>
            {index + 1}
          </Typography>
          <Typography variant="h6" gutterBottom className="list-name">
            {props.title}
            <DeleteIcon className="trash-icon" onClick={() => handleDelete(index)}/>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
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
                  format="MM/dd/yyyy"
                  minDate="01/01/1920"
                  label="Date of Birth"
                  value={dob}
                  onChange={date => changeData('dob', date)}
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
              <AutoComplete address={address} changeData={changeData}/>
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
        </ExpansionPanelDetails>
        
      </ExpansionPanel>
    </React.Fragment>
  )
}

export default ListItem;