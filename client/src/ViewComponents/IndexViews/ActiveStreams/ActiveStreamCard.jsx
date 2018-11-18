import React from 'react';  
import rubyImg from '../../../images/ruby.png';
import phpImg from '../../../images/php.png';
import pythonImg from '../../../images/python.png';
import javascriptImg from '../../../images/javascript.png';
import csharpImg from '../../../images/csharp.png';
import htmlcssImg from '../../../images/htmlcss.png';
import { Link } from 'react-router-dom';

function ActiveStreamCard(props) {
  const { title, user, description, streamID, languageImage } = props;
  // missing image path
  let image
  if (languageImage === 'javascript') {
    image = javascriptImg
  }
  if (languageImage === 'ruby') {
    image = rubyImg
  }
  if (languageImage === 'csshtml') {
    image = htmlcssImg
  }
  if (languageImage === 'csharp') {
    image = csharpImg
  }
  if (languageImage === 'python') {
    image = pythonImg
  }
  if (languageImage === 'php') {
    image = phpImg
  }

  return (
    <Link className="link-container" to={`/active/${streamID}`}>
      <div className="stream-card active-archived" key={streamID}>
        <div className="stream-banner">
          <div className="title-container">
            <div className="title">
              <h3>{ title }</h3>
              <h5>{ user }</h5>
            </div>
          </div>
          <img className="card-img" src={ image } />
        </div>
        <div className="description">
          { description }
        </div>
      </div>
    </Link>
  )
}

export default ActiveStreamCard;