import PageShell from '../components/PageShell.jsx';

function AboutPage() {
  return (
    <PageShell>
      <section className="static-page">
        <span className="eyebrow">About</span>
        <h1>Tentang StudyMate</h1>
        <p>
          StudyMate adalah aplikasi sederhana untuk membantu mahasiswa atau
          peserta bootcamp menyusun daftar course yang ingin dipelajari.
          Project ini dibuat sebagai latihan React Router dan state management.
        </p>

        <div className="info-box">
          <h2>Fitur utama</h2>
          <ul>
            <li>Routing statis untuk halaman dashboard, about, contact, dan not found.</li>
            <li>Dynamic routing untuk membuka detail course berdasarkan ID.</li>
            <li>State management menggunakan useReducer pada halaman dashboard.</li>
            <li>Data disimpan ke localStorage agar tidak hilang ketika halaman di-refresh.</li>
          </ul>
        </div>
      </section>
    </PageShell>
  );
}

export default AboutPage;
