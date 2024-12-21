import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar bg-primary bg-gradient">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">News</Link>
        </div>
      </nav>
    </>
  );
};

export default Header;