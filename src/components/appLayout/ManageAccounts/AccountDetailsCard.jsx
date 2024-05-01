import React from 'react';
import Card from 'react-bootstrap/Card';

import '../../../styles/appLayout/ManageAccounts.scss';

import TreeIcon from '../../../assets/ManageAccounts/account_tree.svg';

const AccountDetailsCard = () => {
  return (
    <div className="card-placement">
      <Card style={{ width: '20rem', height: '10rem' }}>
        <Card.Body>
          <span className="plan-card-heading-font"> BUSINESS PRO</span>
          <span className="plan-font"> $299/month </span>
          <p style={{ color: 'darkgray' }}> Upto 3 accounts & 10 Locations</p>
          <img src={TreeIcon} />
          <span> 1 of 3 accounts active </span>
          <div className="mt-3">
            <a className="clickable" href="/">
              MANAGE
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AccountDetailsCard;
