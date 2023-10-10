import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { useState } from 'react';

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
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

export default function CourseListRow({
  isHeader,
  textFirstCell,
  textSecondCell,
}) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    setIsChecked(!isChecked);
  }

  return (
    <tr
      className={css(
        styles[isHeader ? 'headerRow' : 'defaultRow'],
        isChecked ? styles.rowChecked : ''
      )}
    >
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
          <td>
            <input type='checkbox' checked={isChecked} onChange={handleCheck} />
            {textFirstCell}
          </td>
          <td className={isChecked ? css(styles.isChecked) : ''}>
            {textSecondCell}
          </td>
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
