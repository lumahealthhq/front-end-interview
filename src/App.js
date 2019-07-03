import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './App.css';

import axios from 'axios';

import ReferralList from './components/ReferralList';
import Success from './components/Success';

// PLEASE SEE NOTES IN README FOR EXPLANATIONS OF PERFORMANCE
function App() {
  const emptyReferral = {
    firstName: '',
    lastName: '',
    dob: '1/1/2000',
    language: '',
    phoneNumber: '',
    email: '',
    address: '',
    reason: ''
  }
  const [list, setList] = useState([emptyReferral]);
  const [count, setCount] = useState(1);
  const [success, setSuccess] = useState(false);

  const handleAdd = () => {
    if (list.length >= 5) {
      return
    }
    setList([...list, emptyReferral])
    setCount(count + 1)
  }

  const handleDelete = (index) => {
    list.splice(index, 1)
    setList([...list])
    setCount(count - 1)
  }

  const handleChange = (data, index) => {
    list[index] = data;
    setList([...list])
  }

  const sendReferrals = () => {

    const referrals = list.map(referral => {
      const dob = referral.dob.split('/');
      const year = Number(dob[2]);
      const month = Number(dob[0]);
      const day = Number(dob[1]);

      const addressArray = referral.address.split(', '); // need to go back and review api or library docs to insure this can be used at all times
      const address1 = addressArray[0];
      const city = addressArray[1];
      const state = addressArray[2];
      const country = addressArray[3];

      return {
        Patient: {
          firstName: referral.firstName,
          lastName: referral.lastName,
          dateOfBirth: {
            year,
            month,
            day
          },
          address1,
          address2: '',
          city,
          state,
          zipcode: '', // need to find how the library or api returns zipcode
          country,
          // Need to ask about Contacts data
          contacts: [{
            active: true,
            type: 'email', // eg. email, sms, voice, fax
            value: ''
          }]
        },
        Referral: {
          patient: 'id', // need to ask about patient id. will i have this data from authentication data? do i need an api? What is this exactly relating to
          notes: referral.reason,
        }
      }
    });


    const formData = { referrals };

    // axios.post('/api/referrals', formData)
    //   .then(response => {
    //     if (response.statusCode === 200) {
    //       // render Success Component that the form was successfully submitted
    //       // resetlist back to a single empty referral   
    //     }
    //   })
    //   .catch(error => {
    //      // render error message component
    //      // keep existing data
    //   })

    setList([emptyReferral]);
    setSuccess(!success);
  }

  return (
    <React.Fragment>
      <Container id="Header-top">
        <Typography variant="h5" gutterBottom align="center">
              Patience Referal Form
        </Typography>
        <Typography variant="h5" gutterBottom align="center">
              Hayes Valley Health San Francisco
        </Typography>
      </Container>
      <Container maxWidth="md">
        { success ? <Success count={count}/> : null }
        <Typography variant="h6" gutterBottom align="center" id="Title-form">
              Referral Patients
        </Typography>
        <Typography variant="h6" gutterBottom align="center" id="Title-bottom">
              You can add up to five patients at a time
        </Typography>
      </Container>
      <Container maxWidth="sm">
        <ReferralList list={list} handleChange={handleChange} handleDelete={handleDelete}/>     
        <Grid
          container
          justify="center"
        >
          <Button id="Add" onClick={() => handleAdd()}>+ ADD ANOTHER PATIENT</Button>
        </Grid>
        <Grid
          container
          justify="center"
        >
          <Fab
            id="Send"
            variant="extended"
            size="medium"
            color="primary"
            aria-label="Add"
            onClick={() => sendReferrals()}
          >
            Send Refferals
          </Fab>
        </Grid>
      </Container>      
    </React.Fragment>
  );
}

export default App;
