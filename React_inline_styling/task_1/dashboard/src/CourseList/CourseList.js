import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';

export default function CourseList({ listCourses }) {
  return (
    <table id='CourseList'>
      <thead>
        <CourseListRow textFirstCell={'Available courses'} isHeader={true} />
        <CourseListRow
          textFirstCell={'Course name'}
          textSecondCell={'Credit'}
          isHeader={true}
        />
      </thead>
      <tbody>
        {listCourses ? (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.number}
            />
          ))
        ) : (
          <tr>No course available yet</tr>
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultTypes = {
  listCourses: [],
};
