import PropTypes from 'prop-types';

export default function CourseListRow({
  isHeader,
  textFirstCell,
  textSecondCell,
}) {
  const backgroudColor = isHeader
    ? { backgroundColor: '#deb5b545' }
    : { backgroundColor: '#f5f5f5ab' };

  return (
    <tr style={backgroudColor}>
      {isHeader ? (
        textSecondCell ? (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        ) : (
          <th colSpan='2'>{textFirstCell}</th>
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
