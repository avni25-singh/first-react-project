import React from 'react';
import Body from './Body';
import Header from './Header';

export default function Card(props) {
  return (
    <>
      <Header username={props.commentObject.username} profileImg={props.commentObject.profileImg} />
      <Body comment={props.commentObject.comment} />
    </>
  );
}