import rubyImg from '../images/ruby.png';
import phpImg from '../images/php.png';
import pythonImg from '../images/python.png';
import javascriptImg from '../images/javascript.png';
import csharpImg from '../images/csharp.png';
import htmlcssImg from '../images/htmlcss.png';

export default function languageImagePicker(lang) {
  let img;
  switch (lang) {
    case 'javascript':
      img = javascriptImg;
      break;
    case 'ruby':
      img = rubyImg;
      break;
    case 'csshtml':
      img = htmlcssImg;
      break;
    case 'csharp':
      img = csharpImg;
      break;
    case 'python':
      img = pythonImg;
      break;
    case 'php':
      img = phpImg;
      break;
    default:
      img = '';
  }
  return img;
}