import React from 'react';
import { comments } from './commentData';
import Card from './Card';

function App() {
  return (
    <>
      {comments.map(comment => (
        <Card key={comment.id} commentObject={comment} />
      ))}
    </>
  );
}

export default App;
