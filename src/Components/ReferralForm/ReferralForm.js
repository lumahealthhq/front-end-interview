import React, { useState } from 'react';
import { Formik, Form, FieldArray } from 'formik'; 
import ReferralCard from '../ReferralCard/ReferralCard';
import { sendReferrals } from '../../Services/refferals';
import './ReferralForm.css';

const ReferralForm = () => {
  const [success, setSuccess] = useState(false)
  const referralFields = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    contactLanguage: "",
    phone: "",
    email: "",
    address: "",
    notes: ""
  }

  const initialValues = {
    referrals: [{...referralFields}]
  }

  return (
    <div className="Content">
      {(success)?(
        <div className="Content_success">
          <p className="Content_success__white">Success! You have submitted 5 pending referrals. You will be notified once they've been approved</p>
        </div>
      ):(null)}
      <h3 className="Content__topPadding">Referral Patients</h3>
      <h4>You can add up to five patients at a time</h4>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={initialValues}
        onSubmit={async (values, { resetForm }) => {
          sendReferrals(values).then((response) => {
            if(response.ok) {
              setSuccess(true)
              resetForm(initialValues)
            }
          })
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <FieldArray name="referrals">
              {({ remove, push }) => (
                <div>
                  {values.referrals.length > 0 &&
                    values.referrals.map((referral, index) => (
                      <ReferralCard 
                        referral={referral}
                        index={index}
                        remove={remove}  
                        handleChange={handleChange}
                        length={values.referrals.length}
                        key={`card${index}`}
                      />
                    ))
                  }
                  <button 
                    type="button"
                    onClick={(e) => {
                      if(values.referrals.length < 5) {
                        push({...referralFields})
                      }
                    }}
                    className="Content_button__colorless"
                  >
                    + ADD ANOTHER PATIENT
                  </button>
                </div>
              )}
            </FieldArray>
            <button 
              type="submit"
              className="Content_button"
            >
              SEND REFERRALS
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ReferralForm;
