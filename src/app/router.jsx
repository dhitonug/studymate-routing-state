import { createBrowserRouter } from 'react-router-dom';
import CoursesPage from '../pages/courses/CoursesPage.jsx';
import CourseDetail from '../pages/courses/CourseDetail.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import ContactPage from '../pages/ContactPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';

const router = createBrowserRouter([
  {
    path: '/dashboard/courses',
    element: <CoursesPage />,
  },
  {
    path: '/dashboard/courses/:courseId',
    element: <CourseDetail />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
