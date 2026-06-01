import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="app-container">
      <nav className="side-navigation">
        <div className="sidebar-header">
          <h3>JB</h3>
          <p>Portfolio</p>
        </div>
        
        <div className="sidebar-links">
          <Link to="/" className={location.pathname === '/' ? 'active-side-link' : ''}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active-side-link' : ''}>About</Link>
          <Link to="/education" className={location.pathname === '/education' ? 'active-side-link' : ''}>Education</Link>
          <Link to="/skills" className={location.pathname === '/skills' ? 'active-side-link' : ''}>Skills</Link>
        </div>

        <footer className="sidebar-footer">
          <p>© 2026</p>
        </footer>
      </nav>

      <main className="right-content-pane">
        <Outlet />
      </main>
    </div>
  );
}