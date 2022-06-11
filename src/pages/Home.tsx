import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CampCard from '../components/CampCard';
import CommunityCard from '../components/CommunityCard';
import Navigation from '../components/Navigation';
import Visual from '../components/Visual';

function Home() {
  const [camps, setCamps] = useState([]);
  useEffect(() => {
    axios.get('/data/camp.json').then((res) => {
      setCamps(res.data);
    });
  }, []);
  const [communities, setCoummunity] = useState([]);
  useEffect(() => {
    axios.get('/data/community.json').then((res) => {
      setCoummunity(res.data);
    });
  }, []);
  const ContainerGrid = styled.div<{ length: number }>`
    display: grid;
    grid-template-columns: repeat(${(props) => props.length}, 1fr);
    grid-column-gap: 21px;
    max-width: 960px;
    margin: 0 auto;
  `;
  return (
    <>
      <div>
        <Navigation />
        <Visual />
      </div>
      <div>
        <CampCard camps={camps} />
        <ContainerGrid length={4}>
          <CommunityCard communities={communities} />
        </ContainerGrid>
      </div>
    </>
  );
}

export default Home;
