import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CampCard from '../components/CampCard';
import Navigation from '../components/Navigation';
import Visual from '../components/Visual';

function Home() {
  const [camps, setCamps] = useState([]);
  useEffect(() => {
    axios.get('/data/camp.json').then((res) => {
      setCamps(res.data);
    });
  }, []);
  return (
    <>
      <div>
        <Navigation />
        <Visual />
      </div>
      <div>
        <CampCard camps={camps} />
      </div>
    </>
  );
}

export default Home;
