export const STORAGE_KEY = 'studymate_courses';

export const defaultCourses = [
  {
    id: 'react-router-basic',
    title: 'React Router Basic',
    category: 'Frontend',
    level: 'Pemula',
    duration: '3 hari',
    completed: false,
    description:
      'Mempelajari routing statis, dynamic route, Link, NavLink, dan halaman not found di React.',
  },
  {
    id: 'state-management-reducer',
    title: 'State Management dengan Reducer',
    category: 'React',
    level: 'Menengah',
    duration: '4 hari',
    completed: true,
    description:
      'Latihan mengelola daftar data menggunakan useReducer, action, dan form input terkontrol.',
  },
  {
    id: 'ui-card-design',
    title: 'UI Card Design',
    category: 'UI/UX',
    level: 'Pemula',
    duration: '2 hari',
    completed: false,
    description:
      'Membuat tampilan kartu course yang rapi, responsif, dan mudah dibaca oleh pengguna.',
  },
  {
    id: 'frontend-final-project',
    title: 'Frontend Final Project',
    category: 'Project',
    level: 'Lanjutan',
    duration: '1 minggu',
    completed: false,
    description:
      'Menggabungkan routing, state management, form, dan tampilan halaman menjadi satu aplikasi kecil.',
  },
];

export function getStoredCourses() {
  if (typeof window === 'undefined') return defaultCourses;

  const savedCourses = window.localStorage.getItem(STORAGE_KEY);

  if (!savedCourses) return defaultCourses;

  try {
    const parsedCourses = JSON.parse(savedCourses);
    return Array.isArray(parsedCourses) && parsedCourses.length > 0
      ? parsedCourses
      : defaultCourses;
  } catch (error) {
    console.error('Gagal membaca data course dari localStorage:', error);
    return defaultCourses;
  }
}

export function saveCourses(courses) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
}

export function findCourseById(courseId) {
  return getStoredCourses().find((course) => course.id === courseId);
}
