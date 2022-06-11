import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import mixin from '../styles/mixin';
import userPic from '../assets/userpic.png';
import { Community } from '../types/types';

const Cards = styled.div<{ space: string; dir: string }>`
  position: relative;
  background: #fff;
  border-radius: 10px;
  height: 320px;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.1));
  border: 1px solid #ccc;
  padding: 16px;
  ${(props) => mixin.margin(props.space, props.dir)}
  h3 {
    margin-bottom: 10px;
  }
  h4 {
    margin-bottom: 62px;
  }
  h5 {
    margin-bottom: 6px;
  }
  .badge {
    &__wrap {
      margin-bottom: 8px;
    }
    &--pop {
      background: ${colors.primary1};
      color: ${colors.white};
      padding: 4px;
      border-radius: 4px;
      margin-right: 8px;
    }
    &--cate {
      background: ${colors.gray4};
      padding: 4px;
      border-radius: 4px;
    }
  }
  .commu {
    &__tit {
      width: 80%;
    }
  }
  .user {
    &__wrap {
      display: flex;
      align-items: center;
      margin-bottom: 17px;
    }
    &__pic {
      background: linear-gradient(180deg, ${colors.primary2}, ${colors.primary3});
      width: 38px;
      height: 38px;
      border-radius: 100%;
      margin-right: 8px;
    }
    &__desc {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: break-word;
      line-height: 1.6em;
      height: 1.6em;
    }
  }
  .btn {
    &--more {
      color: ${colors.secondary1};
      text-align: center;
      width: 100%;
    }
  }
`;
function Users({ community }: Community) {
  return (
    <>
      {community.users.map((user) => {
        return (
          <div className='user__wrap' key={user.id}>
            <div className='user__pic'>
              <img src={userPic} alt='userimage' />
            </div>
            <div>
              <h5 className='user__tit'>{user.userid}</h5>
              <p className='user__desc'>{user.comment}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
function CommunityCard({ communities }) {
  const filterdCommunities = communities.filter((community) => community.id < 5);
  return (
    <>
      {filterdCommunities.map((community) => {
        return (
          <Cards space='242px;' dir='bottom' key={community.id}>
            <div className='badge__wrap'>
              <span className='badge--pop b'>{community.popularity}</span>
              <span className='badge--cate b'>{community.category}</span>
            </div>
            <h3 className='commu__tit'>{community.title}</h3>
            <h4 className='commu__desc'>{community.desc}</h4>
            <Users community={community} />
            <div>
              <span className='btn--more'>+더보기</span>
            </div>
          </Cards>
        );
      })}
    </>
  );
}

export default CommunityCard;
