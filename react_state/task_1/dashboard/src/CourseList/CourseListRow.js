import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  tableHead: {
    color: 'green',
  },
  tableSmallHead: {
    color: 'black',
  },
});

export default function CourseListRow({
  isHeader,
  textFirstCell,
  textSecondCell,
}) {
  return (
    <tr className={css(styles[isHeader ? 'headerRow' : 'defaultRow'])}>
      {isHeader ? (
        textSecondCell ? (
          <>
            <th className={css(styles.tableSmallHead)}>{textFirstCell}</th>
            <th className={css(styles.tableSmallHead)}>{textSecondCell}</th>
          </>
        ) : (
          <th className={css(styles.tableHead)} colSpan='2'>
            {textFirstCell}
          </th>
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
