import React from 'react';
import './CSS/AddressCard.css';

const AddressCard = ({ address }) => {
  return (
    <div className="address-card">
      <div className="space-y-3">
        <p className="font-semibold">{`${address?.firstName} ${address?.lastName}`}</p>
        <p>{`${address?.streetAddress}, ${address?.city}, ${address?.state}`}</p>
        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>{address?.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
