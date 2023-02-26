import React from 'react'
import './RightSide.css';
import Updates from '../Updates/Updates';
import CustomerReview from '../CustomerReview/CustomerReview';
const RightSide = () => {
  return (
    <div className="RightSide">
        <div>
            <h3 className="updates-h3">Updates</h3>
            <Updates/>
        </div>
        <div className="cr-section">
            <h3 className="cr-h3">Customer Reviews</h3>
            <CustomerReview />
        </div>
    </div>
  )
}

export default RightSide