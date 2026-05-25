import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell.jsx';

function NotFoundPage() {
  return (
    <PageShell>
      <section className="static-page not-found-card">
        <span className="eyebrow">404</span>
        <h1>Halaman tidak ditemukan</h1>
        <p>
          Route yang kamu akses belum tersedia. Halaman ini digunakan sebagai
          route not found statis pada tugas React Router.
        </p>
        <Link className="primary-button link-button" to="/dashboard/courses">
          Kembali ke Dashboard Courses
        </Link>
      </section>
    </PageShell>
  );
}

export default NotFoundPage;
