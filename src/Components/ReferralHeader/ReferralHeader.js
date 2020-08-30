import React from 'react';
import './ReferralHeader.css';

const ReferralHeader = ({ establishment }) => {
  return (
    <header className="Header">
        <h1 className="Header__text">Patient Referral Form</h1>
        <h2 className="Header__text">{establishment}</h2>
    </header>
  );
}

export default ReferralHeader;