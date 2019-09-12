import React from 'react';
import MaterialTable from 'material-table';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

const dataJson = require('../data.json');

class ArrayTable extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedRow: null,
    };
  }

  render() {
    const stateSelectedRow = this.state;
    const { data, toggleListened } = this.props;
    const columns = [
      {
        title: 'Completed',
        field: 'listened',
        render: (cell) => (
          <Checkbox
            checked={data[cell.albumID - 1].listened}
            onChange={() => {
              toggleListened(cell.albumID - 1);
            }}
            value="checkedA"
            inputProps={{
              'aria-label': 'primary checkbox',
            }}
          />
        ),
      },
      {
        title: 'ID',
        field: 'albumID',
        type: 'numeric',
      },
      {
        title: 'Album Title',
        field: 'albumTitle',
      },
      {
        title: 'Artist',
        field: 'artist',
      },
      {
        title: 'Genre',
        field: 'genre',
      },
      {
        title: 'Date',
        field: 'date',
        type: 'numeric',
      },
      {
        title: 'Score',
        field: 'score',
        type: 'numeric',
      },
    ];
    return (
      <MaterialTable
        title="Rolling Stones 500 Greatest Albums of All Time"
        columns={columns}
        data={dataJson}
        onRowClick={(evt, selectedRow) => {
          this.setState({ selectedRow });
          // console.log('clicked');
        }}
        options={{
          rowStyle: (rowData) => ({
            backgroundColor:
              stateSelectedRow.selectedRow &&
              stateSelectedRow.selectedRow.tableData.id === rowData.tableData.id
                ? '#EEE'
                : '#FFF',
          }),
        }}
      />
    );
  }
}
ArrayTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      albumID: PropTypes.number.isRequired,
      albumTitle: PropTypes.string,
      artist: PropTypes.string,
      image: PropTypes.string,
      date: PropTypes.number,
      genre: PropTypes.string,
      score: PropTypes.number,
      spotify: PropTypes.string,
      listened: PropTypes.bool,
      // eslint-disable-next-line prettier/prettier
    }),
  ).isRequired,
  toggleListened: PropTypes.func.isRequired,
};

export default ArrayTable;
