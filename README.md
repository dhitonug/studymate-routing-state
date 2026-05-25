# StudyMate Routing & State Management

StudyMate adalah aplikasi React sederhana untuk mengatur rencana belajar/frontend course. Project ini dibuat untuk tugas **Frontend Development - Routing and State Management**.

Project ini sengaja **bukan aplikasi todo**, karena instruksi tugas melarang memakai contoh aplikasi yang sudah menjadi materi.

## Fitur

- React + Vite
- React Router dengan total 5 route tampilan:
  1. `/dashboard/courses` - halaman dashboard course dan state management
  2. `/dashboard/courses/:courseId` - halaman detail course berdasarkan ID atau dynamic route
  3. `/about` - halaman tentang aplikasi
  4. `/contact` - halaman kontak aplikasi
  5. `*` - halaman not found, bisa diuji dengan URL `/tidak-ditemukan`
- State management pada halaman `/dashboard/courses` menggunakan `useReducer`
- Fitur tambah course, hapus course, ubah status selesai, filter course, reset data contoh
- Data tersimpan ke `localStorage`

## Struktur Folder

```txt
src/
├── app/
│   └── router.jsx
├── components/
│   ├── PageShell.jsx
│   └── StatCard.jsx
├── data/
│   └── courses.js
├── features/
│   └── courses/
│       └── courseReducer.js
├── pages/
│   ├── courses/
│   │   ├── CoursesPage.jsx
│   │   └── CourseDetail.jsx
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   └── NotFoundPage.jsx
├── index.css
└── main.jsx
```

## Cara Menjalankan Project

```bash
npm install
npm run dev
```

Buka route utama:

```txt
http://localhost:5173/dashboard/courses
```

## Route yang Perlu Di-screenshot

1. `http://localhost:5173/dashboard/courses`
2. `http://localhost:5173/dashboard/courses/react-router-basic`
3. `http://localhost:5173/about`
4. `http://localhost:5173/contact`
5. `http://localhost:5173/tidak-ditemukan`

## Catatan Pengumpulan

Setelah project berjalan dan screenshot sudah dibuat, upload project ini ke GitHub public repository. Setelah itu isi link GitHub ke Google Form pengumpulan tugas.
