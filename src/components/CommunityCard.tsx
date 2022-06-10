import React from 'react';
import styled from 'styled-components';

const Cards = styled.div`
  position: relative;
  background: #fff;
  border-radius: 10px;
`;
function CommunityCard() {
  return (
    <Cards>
      <div className='badge__wrap'>
        <span className='badge--pop'>조회수 TOP</span>
        <span className='badge--cate'>취업 고민</span>
      </div>
      <h3 className='commu__tit'>합격 메일 답장 어떻게 할까요?</h3>
      <h4 className='commu__desc'>고칠 부분이 있는지 봐주시면 감사하겠습니다!</h4>
      <div>
        <div className='user__pic' />
        <h5 className='user__tit'>멘토123123</h5>
        <p className='user__desc'>안녕하세요. 먼저 면접까지</p>
      </div>
      <div>
        <span>+더보기</span>
      </div>
    </Cards>
  );
}

export default CommunityCard;
