import React from 'react';
import styled from 'styled-components';
import visual from '../assets/visual.png';
import arrowRight from '../assets/arrow-right.png';
import arrowLeft from '../assets/arrow-left.png';
import colors from '../styles/colors';

const Main = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 56px 0;
  color: ${colors.white};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  .swiper-pagination {
    width: 322px;
    text-align: right;
  }
  .main {
    &__left {
      img {
        width: 28px;
        height: 28px;
      }
    }
    &__right {
      img {
        height: 400px;
      }
    }
  }
`;
function Visual() {
  return (
    <Main>
      <div className='main__left'>
        <h1>
          박쥐에게
          <br />
          비타민을
        </h1>
        <div className='swiper-pagination'>
          <img src={arrowLeft} alt='arrow-left' />
          <img src={arrowRight} alt='arrow-right' />
        </div>
      </div>
      <div className='main__right'>
        <img src={visual} alt='main-visual' />
      </div>
    </Main>
  );
}

export default Visual;
