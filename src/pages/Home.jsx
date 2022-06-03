import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CampCard from '../components/CampCard';
import Navigation from '../components/Navigation';
import Visual from '../components/Visual';

function Home() {
  const [camps, setCamps] = useState([]);
  useEffect(() => {
    axios.get('/camp.json').then((res) => {
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

  // const getCampData = async () => {
  //   const res = await axios.get();
  //   const campData = res.data.camps;
  //   campData.map((camps) => {
  //     return (
  //       <>
  //         <div>{camps.camp}</div>
  //         <div>{camps.status}</div>
  //         <div>{camps.program}</div>
  //         <div>{camps.startDate}</div>
  //       </>
  //     );
  //   });
  // };
  // useEffect(() => {
  //   getCampData();
  // }, []);
}

export default Home;
