import React from 'react';
import { Link } from 'react-router-dom';
import { Camp } from '../types/types';

function CampCard({ camps }: Camp) {
  return (
    <div>
      {camps.map((camp) => {
        return (
          <Link to='/detail' key={camp.id}>
            <div>{camp.camp}</div>
            <div>{camp.status}</div>
            <div>{camp.program}</div>
            <div>{camp.startDate}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default CampCard;
