import React from 'react';
import './Widgets.css';
import { FiberManualRecord, Info } from '@mui/icons-material';

function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecord/>

      </div>
        <div className='widgets__articleRight'>
          <h3>{heading}</h3>
          <p>{subtitle}</p>
        </div>
    </div>
  );
  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h1>LinkedIn News</h1>
      <Info />
      </div>

      {newsArticle('PAPA react is back ', "Top news -999 readers ")}
      {newsArticle('Coronavirus : UK update', "Top news -886")}
      {newsArticle('Tesla hits new high', "Cars & auto -300")}
      {newsArticle('Bitcoin breaks s22k', "Crypto - 123 8000 readers")}
      {newsArticle('Is Redux too good?', 'Code 123 readers')}
      {newsArticle('PAPA react launches new course!!', "Top news - 6545 readers")}

    </div>
  ) 
}

export default Widgets;