import React from 'react';
import MaterialTable from 'material-table';
import Checkbox from '@material-ui/core/Checkbox';

const dataJson = require('../data.json');

class ArrayTable extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedRow: null,
      listened: new Array(500),
    };
  }

  toggleListened(id) {
    const { listened } = this.state;
    listened[id] = !listened[id];
    this.setState(listened);
  }

  render() {
    const stateSelectedRow = this.state;
    const { listened } = this.state;
    const columns = [
      {
        title: 'Completed',
        field: 'listened',
        render: (cell) => (
          <Checkbox
            checked={listened[cell.albumID - 1]}
            onChange={() => {
              this.toggleListened(cell.albumID - 1);
            }}
            value={listened[cell.albumID - 1]}
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

export default ArrayTable;
