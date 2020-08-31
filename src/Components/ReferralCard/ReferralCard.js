import React from 'react';
// import PlacesAutocomplete from 'react-places-autocomplete';
import { 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  TextField,
  InputAdornment,
  Grid,
  IconButton
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import CakeIcon from '@material-ui/icons/Cake';
import TranslateIcon from '@material-ui/icons/Translate';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';

import './ReferralCard.css';

const ReferralCard = ({ referral, index, remove, handleChange, length }) => {
  let name = `${referral.firstName} ${referral.lastName}`
  return (
    <Accordion className="Card">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid 
          container 
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <h3>{(name.length > 1)?(`${index+1} ${name}`):(`${index+1} New Referral`)}</h3>
          </Grid>
          <Grid item>
            {(length > 1)?(
              <IconButton 
                aria-label="delete"
                size="small"
                edge="end"
                onClick={(e) => {
                  if(length > 1) {
                    remove(index)
                  }
                }}
              >
                <DeleteIcon />
              </IconButton>
            ):(null)}
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails className="Card_content">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              name={`referrals[${index}].firstName`}
              id={`referrals[${index}].firstName`}
              label="First Name"
              fullWidth
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name={`referrals[${index}].lastName`}
              id={`referrals[${index}].lastName`}
              label="Last Name"
              fullWidth
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name={`referrals[${index}].dateOfBirth`}
              id={`referrals[${index}].dateOfBirth`}
              label="Date of Birth"
              fullWidth
              type="date"
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CakeIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name={`referrals[${index}].contactLanguage`}
              id={`referrals[${index}].contactLanguage`}
              label="Contact Language"
              fullWidth
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TranslateIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name={`referrals[${index}].phone`}
              id={`referrals[${index}].phone`}
              label="Phone"
              fullWidth
              type="tel"
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name={`referrals[${index}].email`}
              id={`referrals[${index}].email`}
              label="Email"
              type="email"
              fullWidth
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name={`referrals[${index}].address`}
              id={`referrals[${index}].address`}
              label="Address"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name={`referrals[${index}].notes`}
              id={`referrals[${index}].notes`}
              label="Notes/Reason"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default ReferralCard;