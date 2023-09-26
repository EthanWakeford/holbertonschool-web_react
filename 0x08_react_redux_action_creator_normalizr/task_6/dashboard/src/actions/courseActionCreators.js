import { selectCourseAction, unselectCourseAction } from './courseActionTypes';

function selectCourse(index) {
  return { type: selectCourseAction, index };
}

function unSelectCourse(index) {
  return { type: unselectCourseAction, index };
}

export { selectCourse, unSelectCourse };
