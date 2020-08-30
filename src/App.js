import React from 'react';
import ReferralForm from './Components/ReferralForm/ReferralForm';
import ReferralHeader from './Components/ReferralHeader/ReferralHeader';
import './App.css';

const App = () => {
  return (
    <div>
      <ReferralHeader />
      <ReferralForm />
    </div>
  );
}

export default App;
