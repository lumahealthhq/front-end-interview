const REFERRALS_URL = `${process.env.LUMA_API_URL}/accounts`;

export const sendReferrals = async (payload) => {
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  return await fetch(`${REFERRALS_URL}/api/referrals`, params);
};