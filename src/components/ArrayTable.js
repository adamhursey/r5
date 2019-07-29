import React from 'react';
import MaterialTable from 'material-table';
import Checkbox from '@material-ui/core/Checkbox';

class ArrayTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: false,
      selectedRow: null,
    }

  }

  render() {
    let dataJson = require('../data.json');
    const columns = [
      {
        title: 'Completed',
        field: 'listened',
        render: cell => <Checkbox
          checked={this.props.data[cell.albumID].listened}
          // onChange={this.props.toggleListened}
          value="checkedA"
          inputProps={{
            'aria-label': 'primary checkbox',
          }}
        />
      },
      {
        title: 'ID',
        field: 'albumID',
        type: 'numeric'
      },
      {
        title: 'Album Title',
        field: 'albumTitle'
      },
      {
        title: 'Artist',
        field: 'artist'
      },
      {
        title: 'Genre',
        field: 'genre'
      },
      {
        title: 'Date',
        field: 'date',
        type: 'numeric'
      },
      {
        title: 'Score',
        field: 'score',
        type: 'numeric'
      },
    ];
    return (
      <MaterialTable
        title="Selected Row Styling Preview"
        columns={columns}
        data={dataJson}
        onRowClick={((evt, selectedRow) => {
          this.setState({ selectedRow })})}
        options={{
          rowStyle: rowData => ({
            backgroundColor: (this.state.selectedRow && this.state.selectedRow.tableData.id === rowData.tableData.id) ? '#EEE' : '#FFF'
          })
        }}
      />
    )
  }
}

export default ArrayTable;
