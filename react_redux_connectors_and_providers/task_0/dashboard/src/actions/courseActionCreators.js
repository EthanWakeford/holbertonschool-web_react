import {
  FETCH_COURSE_SUCCESS,
  selectCourseAction,
  unselectCourseAction,
} from './courseActionTypes';

function selectCourse(index) {
  return { type: selectCourseAction, index };
}

function unSelectCourse(index) {
  return { type: unselectCourseAction, index };
}

function fetchCourseSuccess(data) {
  return { type: FETCH_COURSE_SUCCESS, data };
}

export { selectCourse, unSelectCourse, fetchCourseSuccess };
