import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import './ReferralForm.css';
import Grid from '@material-ui/core/Grid';
import AddressInput from '../AddressInput/AddressInput';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import CakeIcon from '@material-ui/icons/Cake';
import TranslateIcon from '@material-ui/icons/Translate';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import { withStyles } from '@material-ui/core/styles';

const MyTextField = withStyles({
  root: {
    fontFamily: 'Montserrat !important'
  },
})(TextField);

function ReferralForm(prop) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function onFirstNameChange(e) {
    setFirstName(e.target.value);
    prop.onNameChange(e.target.value + ' ' + lastName);
  }

  function onLastNameChange(e) {
    setLastName(e.target.value);
    prop.onNameChange(firstName + ' ' + e.target.value);
  }

  return (
    <div className="ReferralForm">
      <Grid className="FormContent" container spacing={4}>
        <Grid item xs={6}>
          <MyTextField placeholder="First Name" label="Required" required={true} fullWidth={true} size="small" 
          onChange={onFirstNameChange} value={firstName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle color="action" fontSize="small" />
              </InputAdornment>
            ),
          }}/> 
        </Grid>
        <Grid item xs={6}>
          <TextField placeholder="Last Name" label="Required" required={true} fullWidth={true} size="small"
          onChange={onLastNameChange} value={lastName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle color="action" fontSize="small" />
              </InputAdornment>
            ),
          }}/>
        </Grid>
        <Grid item xs={6}>
          <TextField placeholder="Date of Birth" label="Required" required={true} type="date" fullWidth={true} size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CakeIcon color="action" fontSize="small" />
              </InputAdornment>
            ),
          }}/>
        </Grid>
        <Grid item xs={6}>
          <TextField placeholder="Contact Language" label="Required" required={true} fullWidth={true} size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TranslateIcon color="action" fontSize="small" />
              </InputAdornment>
            ),
          }}/>
        </Grid>
        <Grid item xs={6}>
          <TextField placeholder="Phone" label="Required" required={true} type="tel" fullWidth={true} size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon color="action" fontSize="small" />
              </InputAdornment>
            ),
          }}/>
        </Grid>
        <Grid item xs={6}>
          <TextField placeholder="Email" label="Required" required={true} type="email" fullWidth={true} size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon color="action" fontSize="small" />
              </InputAdornment>
            ),
          }}/>
        </Grid>
        <Grid item xs={12}>
          <AddressInput />
        </Grid>
        <Grid item xs={12}>
          <TextField placeholder="Notes/Reason" fullWidth={true} size="small"/>
        </Grid>
      </Grid>
    </div>
  );
}

export default ReferralForm;