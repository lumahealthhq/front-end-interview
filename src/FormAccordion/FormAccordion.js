import React, {useState} from 'react';
import ReferralForm from '../ReferralForm/ReferralForm';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './FormAccordion.css';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  deleteButton: {
    margin: 'auto',
  },
}));

const MyAccordion = withStyles({
  root: {
    margin: 'auto',
    width: '782px',
    marginTop: '8px',
    borderRadius: '4px',
    '&$expanded': {
      margin: 'auto',
      marginTop: '8px',
    },
  },
  expanded: {},
})(Accordion);

const MyAccordionSummary = withStyles({
  root: {
    padding: 0,
    '&$expanded': {
    },
    cursor: 'pointer',
  },
  content: {
    margin: 0,
    '&$expanded': {
      margin: 0,
    },
  },
  expandIcon: {
    marginRight: '16px',
  },
  expanded: {},
})(AccordionSummary);

function FormAccordion(prop) {
  const [name, setName] = useState('New Referral');

  const classes = useStyles();

  function onDelete(e) {
    e.stopPropagation();
    e.preventDefault();
    prop.onDelete(prop.id);
  }

  function onNameChange(newName) {
    setName(newName);
  }

  const squareStyle = {
      background: prop.headerColor,
      borderRadius: prop.expanded ? '4px 0 0 0 ' : '4px 0 0 4px',
  };

  const expandIcon = prop.numOfForms > 1 ? <ExpandMoreIcon/> : null; 

  return (
    <MyAccordion expanded={prop.expanded}>
        <MyAccordionSummary
          expandIcon={expandIcon}
          onClick={() => prop.onClick(prop.order)}
        >
          <div className="FormHeader">
            <div className="HeaderNumber" style={squareStyle}>{prop.order}</div>
            <div className="HeaderTitle">{name}</div>
            {prop.numOfForms > 1 && <IconButton aria-label="delete" className={classes.deleteButton} onClick={onDelete}>
              <DeleteIcon fontSize="small" />
            </IconButton>}
          </div>
        </MyAccordionSummary>
        <AccordionDetails>
          <ReferralForm onNameChange={onNameChange}/>
        </AccordionDetails>
      </MyAccordion>
  );
}

export default FormAccordion