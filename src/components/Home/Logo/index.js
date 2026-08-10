import './index.scss';
import LogoS from '../../../assets/images/Illustration.png';

const Logo = () => {
  return (
    <div className='logo-container'>
      <img className='solid-logo' src={LogoS} alt='Character' />

      <svg
        className='svg-logo'
        viewBox='0 0 559 897'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g
          className='svg-container'
          transform='translate(0 457) scale(.1 -.1)'
          fill='none'
        >
          <path d='m2930 4560c-344-16-623-85-915' />
        </g>
      </svg>
    </div>
  );
}

export default Logo;