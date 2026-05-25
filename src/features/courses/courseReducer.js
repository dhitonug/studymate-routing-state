import { defaultCourses } from '../../data/courses.js';

export function courseReducer(courses, action) {
  switch (action.type) {
    case 'ADD_COURSE':
      return [action.payload, ...courses];

    case 'TOGGLE_COURSE':
      return courses.map((course) =>
        course.id === action.payload
          ? { ...course, completed: !course.completed }
          : course
      );

    case 'DELETE_COURSE':
      return courses.filter((course) => course.id !== action.payload);

    case 'RESET_COURSES':
      return defaultCourses;

    default:
      return courses;
  }
}

export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}
