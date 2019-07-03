import React from 'react';

const Success = (props) => {
  const count = props.count
  return (
    <div id="Success">
      Success! You have Submitted { count } referrals. You will be notified once they've been approved
    </div>
  )
}

export default Success