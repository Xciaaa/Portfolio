import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo.png';
import LogoSubtitle from '../../assets/images/Xia.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faFacebook} from '@fortawesome/free-brands-svg-icons';

const Navbar = () => (
 <div className='nav-bar'>
  <Link className='logo' to='/'>
    <img src={LogoS} alt='Logo' />
    <img className='sub-logo' src={LogoSubtitle} alt='Xia' />
  </Link>

  <nav>
    <NavLink 
    exact='true' 
    activeclassname='active' 
    to='/'>
      <FontAwesomeIcon icon={faHome} />
    </NavLink>

    <NavLink exact='true'
     activeclassname='active' 
     className='about-link' 
     to='/about'>
      <FontAwesomeIcon icon={faUser} />
    </NavLink>

    <NavLink exact='true' 
    activeclassname='active' 
    className='contact-link' 
    to='/contact'>
      <FontAwesomeIcon icon={faEnvelope} />
    </NavLink>
  </nav>
  <ul>
    <li>
      <a href='https://www.linkedin.com/in/jerricson-garcia-59702717b/' target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </li>

    <li>
      <a href='https://github.com/Xciaaa' target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </li>

    <li>
      <a href='https://www.facebook.com/XiaAiaa' target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </li>

  </ul>

 </div>
)

export default Navbar;