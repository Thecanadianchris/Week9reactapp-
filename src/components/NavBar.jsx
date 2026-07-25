import logo from '../assets/images/eonlogo.png';

function NavBar({ page, onSetPage }) {
  return (
    <nav>
      <img src={logo} alt="logo" style={{ height: '50px' }} />
      <button onClick={() => onSetPage('home')}>Home</button>
      <button onClick={() => onSetPage('gallery')}>Gallery</button>
      <button onClick={() => onSetPage('facts')}>Resin Facts</button>
       <button onClick={() => onSetPage('projects')}>My Projects</button>
    </nav>
  );
}

export default NavBar;