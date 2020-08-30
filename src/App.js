import React from 'react';
import ReferralForm from './Components/ReferralForm/ReferralForm';
import ReferralHeader from './Components/ReferralHeader/ReferralHeader';
import './App.css';

const App = () => {
  return (
    <div>
      <ReferralHeader 
        establishment="Hayes Valley Health San Francisco" 
      />
      <ReferralForm />
    </div>
  );
}

export default App;
