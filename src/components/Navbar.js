import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">DOOVY</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/faq">FAQ</Link></li>
            {currentPath !== '/' && (
                <><li className="nav-item"><Link className="nav-link" to="/tipskuliah">Tips Kuliah</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/belajarcoding">Belajar Coding</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/proyekmahasiswa">Proyek Mahasiswa</Link></li></>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
