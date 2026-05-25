import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/dashboard/courses', label: 'Courses' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/tidak-ditemukan', label: 'Not Found' },
];

function PageShell({ children }) {
  return (
    <div className="app-shell">
      <header className="navbar">
        <Link className="brand" to="/dashboard/courses">
          <span className="brand-logo">S</span>
          <span>StudyMate</span>
        </Link>

        <nav className="nav-links" aria-label="Navigasi utama">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="main-content">{children}</main>

      <footer className="footer">
        <p>StudyMate dibuat untuk tugas Frontend Routing dan State Management.</p>
      </footer>
    </div>
  );
}

export default PageShell;
