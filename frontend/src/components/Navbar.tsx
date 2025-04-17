import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
      <div className="container-fluid"> {/* Full width! */}
        <Link className="navbar-brand" to="/">Home</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/EntertainersList">Entertainers</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
