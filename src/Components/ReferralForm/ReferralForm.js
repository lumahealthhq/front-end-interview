import React from 'react';
import { Formik, Form, FieldArray } from 'formik'; 
import ReferralCard from '../ReferralCard/ReferralCard';
import './ReferralForm.css';

const ReferralForm = () => {
  const referralForm = {
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
    referrals: [{...referralForm}]
  }

  return (
    <div className="Content">
      <h3>Referral Patients</h3>
      <h4>You can add up to five patients at a time</h4>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          console.log(values)
        }}
      >
        {({ values }) => (
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
                      />
                    ))
                  }
                  <div onClick={() => push({...referralForm})}>
                    <p>+ ADD ANOTHER PATIENT</p>
                  </div>
                </div>
              )}
            </FieldArray>
            <button type="submit">SEND REFFERRALS</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ReferralForm;
