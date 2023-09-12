import PropTypes from 'prop-types';

export default function CourseListRow({
  isHeader,
  textFirstCell,
  textSecondCell,
}) {
  return (
    <tr>
      {isHeader ? (
        textSecondCell ? (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        ) : (
          <th colspan='2'>{textFirstCell}</th>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.any,
};

CourseListRow.defaultTypes = {
  isHeader: false,
};
