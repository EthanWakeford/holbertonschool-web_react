import * as Actions from '../actions/courseActionTypes';
import { courseNormalizer } from '../schema/courses';

const initialState = [];

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_COURSE_SUCCESS:
      return state.map((course) => ({
        ...course,
        isSelected: false,
      }));
    case Actions.selectCourseAction:
      return state.map((course) => {
        if (course.index === action.index) {
          return {
            ...course,
            isSelected: true,
          };
        }
        return course;
      });
    case Actions.unselectCourseAction:
      return state.map((course) => {
        if (course.index === action.index) {
          return {
            ...course,
            isSelected: false,
          };
        }
        return course;
      });
    default:
      return state;
  }
};
