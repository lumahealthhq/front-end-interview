import React, {useState, useRef} from 'react';
import './App.css';
import Header from './Header/Header';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FormAccordion from './FormAccordion/FormAccordion';

const useStyles = makeStyles((theme) => ({
  addButton: {
    margin: 'auto',
    display: 'flex',
    marginTop: '12px',
    color: '#0B2B5B',
    fontSize: '14px',
    fontWeight: '500',
    '&:hover': {
      backgroundColor: '#a3c9f0',
    },
  },
  sendButton: {
    margin: 'auto',
    display: 'flex',
    marginTop: '30px',
    width: '782px',
    borderRadius: '34px',
    backgroundColor: '#0B2B5B',
  },
}));

function App() {
  const myRef = useRef(null);
  const classes = useStyles();
  const [forms, setForms] = useState([0]);
  const [expand, setExpand] = useState([true, false, false, false, false]);
  const headerColors = ['#25A575', '#2595A5', '#3A719B', '#254B7A', '#142B58'];
  const dataFields = ['firstName', 'lastName', 'dob', 'lang', 'phone', 'email', 'address', 'notes'];

  function addForm() {
    setForms((forms) => {
      return [...forms, Date.now()];
    });
    const newExpand = [false, false, false, false, false];
    newExpand[forms.length] = true;
    setExpand(newExpand);
  }

  function onToggle(order) {
    const newExpand = [...expand];
    newExpand[order-1] = !newExpand[order-1];
    setExpand(newExpand);
  }

  function onDelete(id) {
    const newForms = [];
    const newExpand = [...expand];
    for (let i = 0; i < forms.length; i++) {
      if (forms[i] === id) {
        for (let j = i; j < forms.length-1; j++) {
          newExpand[j] = expand[j+1];
        }
      } else {
        newForms.push(forms[i]);
      }
    }
    if (newForms.length === 1) {
      newExpand[0] = true;
    }
    setForms(newForms);
    setExpand(newExpand);
  }

  function getFormData(formEl) {
    const formData = {};
    const inputEls = formEl.getElementsByTagName('input');
    for (let i = 0; i < 8; i++) {
      formData[dataFields[i]] = inputEls[i].value;
    }
    return formData;
  }

  function onSubmit(myRef) {
    const appEl = myRef.current;
    const formsData = [];
    const formEls = appEl.getElementsByClassName('ReferralForm');
    for (const formEl of formEls) {
      formsData.push(getFormData(formEl));
    }
    console.log(formsData);
    // Then use formsData to make a Post request.
  }

  return (
    <div className="App" ref={myRef}>
      <Header></Header>
      <div className="Title1">Referral Patients</div>
      <div className="Title2">You can add up to five patients at a time</div>
      {forms.map((form, ind) => {
        return (<FormAccordion key={form} id={form} order={ind+1} expanded={expand[ind]}
        onClick={onToggle} onDelete={onDelete} numOfForms={forms.length}
        headerColor={headerColors[ind]} />)
      })}
      {forms.length < 5 && <Button className={classes.addButton} onClick={addForm} color="primary">+ Add another patient</Button>}
      <Button className={classes.sendButton} variant="contained" color="primary"
      onClick={() => {onSubmit(myRef)}}>SEND REFERRALS</Button>
    </div>
  );
}

export default App;
