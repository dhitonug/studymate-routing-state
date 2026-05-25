import { useEffect, useMemo, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell.jsx';
import StatCard from '../../components/StatCard.jsx';
import { getStoredCourses, saveCourses } from '../../data/courses.js';
import { courseReducer, slugify } from '../../features/courses/courseReducer.js';

const initialForm = {
  title: '',
  category: '',
  level: 'Pemula',
  duration: '',
  description: '',
};

function CoursesPage() {
  const [courses, dispatch] = useReducer(
    courseReducer,
    undefined,
    getStoredCourses
  );
  const [form, setForm] = useState(initialForm);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    saveCourses(courses);
  }, [courses]);

  const summary = useMemo(() => {
    const total = courses.length;
    const completed = courses.filter((course) => course.completed).length;
    const active = total - completed;
    const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { total, completed, active, progress };
  }, [courses]);

  const filteredCourses = useMemo(() => {
    if (filter === 'completed') {
      return courses.filter((course) => course.completed);
    }

    if (filter === 'active') {
      return courses.filter((course) => !course.completed);
    }

    return courses;
  }, [courses, filter]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.title.trim() || !form.category.trim() || !form.duration.trim()) {
      alert('Judul, kategori, dan durasi wajib diisi.');
      return;
    }

    const newCourse = {
      id: `${slugify(form.title)}-${Date.now().toString(36)}`,
      title: form.title.trim(),
      category: form.category.trim(),
      level: form.level,
      duration: form.duration.trim(),
      completed: false,
      description:
        form.description.trim() ||
        'Belum ada deskripsi khusus untuk course ini.',
    };

    dispatch({ type: 'ADD_COURSE', payload: newCourse });
    setForm(initialForm);
  };

  return (
    <PageShell>
      <section className="hero-section">
        <div>
          <span className="eyebrow">Dashboard Courses</span>
          <h1>Atur rencana belajar frontend kamu.</h1>
          <p>
            Halaman ini menggunakan state management dengan useReducer untuk
            menambah course, menghapus course, mengganti status selesai, dan
            memfilter daftar course.
          </p>
        </div>
        <div className="progress-card">
          <span>Progress Belajar</span>
          <strong>{summary.progress}%</strong>
          <div className="progress-track" aria-hidden="true">
            <div
              className="progress-fill"
              style={{ width: `${summary.progress}%` }}
            />
          </div>
        </div>
      </section>

      <section className="stats-grid" aria-label="Ringkasan course">
        <StatCard label="Total Course" value={summary.total} />
        <StatCard label="Selesai" value={summary.completed} />
        <StatCard label="Belum Selesai" value={summary.active} />
      </section>

      <section className="content-grid">
        <form className="course-form" onSubmit={handleSubmit}>
          <h2>Tambah Course Baru</h2>
          <label>
            Judul Course
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleInputChange}
              placeholder="Contoh: Belajar Component React"
            />
          </label>

          <label>
            Kategori
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleInputChange}
              placeholder="Contoh: React"
            />
          </label>

          <div className="form-row">
            <label>
              Level
              <select name="level" value={form.level} onChange={handleInputChange}>
                <option>Pemula</option>
                <option>Menengah</option>
                <option>Lanjutan</option>
              </select>
            </label>

            <label>
              Durasi
              <input
                type="text"
                name="duration"
                value={form.duration}
                onChange={handleInputChange}
                placeholder="Contoh: 3 hari"
              />
            </label>
          </div>

          <label>
            Deskripsi
            <textarea
              name="description"
              value={form.description}
              onChange={handleInputChange}
              placeholder="Tuliskan target belajar dari course ini..."
              rows="4"
            />
          </label>

          <button type="submit" className="primary-button">
            Tambah Course
          </button>
        </form>

        <section className="course-panel">
          <div className="panel-header">
            <div>
              <span className="eyebrow">State Management</span>
              <h2>Daftar Course</h2>
            </div>

            <select
              className="filter-select"
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
              aria-label="Filter course"
            >
              <option value="all">Semua</option>
              <option value="active">Belum selesai</option>
              <option value="completed">Selesai</option>
            </select>
          </div>

          <div className="course-list">
            {filteredCourses.map((course) => (
              <article className="course-card" key={course.id}>
                <div className="course-card-header">
                  <div>
                    <span className="badge">{course.category}</span>
                    <h3>{course.title}</h3>
                  </div>
                  <span className={course.completed ? 'status done' : 'status'}>
                    {course.completed ? 'Selesai' : 'Belum selesai'}
                  </span>
                </div>

                <p>{course.description}</p>

                <div className="course-meta">
                  <span>Level: {course.level}</span>
                  <span>Durasi: {course.duration}</span>
                </div>

                <div className="course-actions">
                  <Link to={`/dashboard/courses/${course.id}`} className="text-link">
                    Lihat Detail
                  </Link>
                  <button
                    type="button"
                    className="secondary-button"
                    onClick={() =>
                      dispatch({ type: 'TOGGLE_COURSE', payload: course.id })
                    }
                  >
                    {course.completed ? 'Tandai Belum' : 'Tandai Selesai'}
                  </button>
                  <button
                    type="button"
                    className="danger-button"
                    onClick={() =>
                      dispatch({ type: 'DELETE_COURSE', payload: course.id })
                    }
                  >
                    Hapus
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="empty-state">
              <h3>Belum ada data pada filter ini.</h3>
              <p>Coba pilih filter lain atau tambahkan course baru.</p>
            </div>
          )}

          <button
            type="button"
            className="reset-button"
            onClick={() => dispatch({ type: 'RESET_COURSES' })}
          >
            Reset Data Contoh
          </button>
        </section>
      </section>
    </PageShell>
  );
}

export default CoursesPage;
