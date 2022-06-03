import React from 'react';
import { Link } from 'react-router-dom';

function CampCard({ camps }) {
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
