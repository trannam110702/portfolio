import Toggle from '../Toggle/Toggle';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">NamTran</div>
        <span>
          <Toggle />
        </span>
      </div>
      <div className="n-right">
        <ul className="n-list">
          <li>Home</li>
          <li>Services</li>
          <li>Experience</li>
          <li>Portfolio</li>
          <li>Testimonials</li>
        </ul>
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100010648657847"
        >
          <button className="button n-button">Contact me</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
