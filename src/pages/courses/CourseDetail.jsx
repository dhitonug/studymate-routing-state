import { Link, useParams } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import { findCourseById } from '../../data/courses.js';

function CourseDetail() {
  const { courseId } = useParams();
  const course = findCourseById(courseId);

  if (!course) {
    return (
      <PageShell>
        <section className="detail-card not-found-card">
          <span className="eyebrow">Dynamic Route</span>
          <h1>Course tidak ditemukan</h1>
          <p>
            ID course <strong>{courseId}</strong> tidak ada pada data StudyMate.
          </p>
          <Link className="primary-button link-button" to="/dashboard/courses">
            Kembali ke Dashboard
          </Link>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <section className="detail-card">
        <span className="eyebrow">Dynamic Route: /dashboard/courses/:courseId</span>
        <h1>{course.title}</h1>
        <p>{course.description}</p>

        <div className="detail-grid">
          <div>
            <span>Kategori</span>
            <strong>{course.category}</strong>
          </div>
          <div>
            <span>Level</span>
            <strong>{course.level}</strong>
          </div>
          <div>
            <span>Durasi</span>
            <strong>{course.duration}</strong>
          </div>
          <div>
            <span>Status</span>
            <strong>{course.completed ? 'Selesai' : 'Belum selesai'}</strong>
          </div>
        </div>

        <div className="learning-steps">
          <h2>Target Belajar</h2>
          <ol>
            <li>Memahami materi utama dari course.</li>
            <li>Mengerjakan latihan kecil agar konsep lebih kuat.</li>
            <li>Membuat mini project sebagai bukti pemahaman.</li>
          </ol>
        </div>

        <Link className="text-link" to="/dashboard/courses">
          ← Kembali ke daftar course
        </Link>
      </section>
    </PageShell>
  );
}

export default CourseDetail;
