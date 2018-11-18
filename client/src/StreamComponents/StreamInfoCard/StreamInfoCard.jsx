import React from 'react';
import rubyImg from '../../images/ruby.png';
import phpImg from '../../images/php.png';
import pythonImg from '../../images/python.png';
import javascriptImg from '../../images/javascript.png';
import csharpImg from '../../images/csharp.png';
import htmlcssImg from '../../images/htmlcss.png';

function StreamInfoCard({ status, title, user, description, scheduledDate, languageImage }) {
  const images = {
    ruby: rubyImg,
    php: phpImg,
    python: pythonImg,
    javascript: javascriptImg,
    csharp: csharpImg,
    htmlcss: htmlcssImg
  };

  return (
    <div>
      <span>
        <h2>
          <img className='card-img' src={ images[languageImage] }></img>
          { title }
        </h2>
        <h5>{ status }</h5>
      </span>
      <h3>{ user }</h3>
      <p>{ description }</p>
      <p>Start Time: { scheduledDate }</p>
    </div>
  )
}

export default StreamInfoCard;