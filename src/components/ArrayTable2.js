import React from 'react';
import MaterialTable from 'material-table';

class ArrayTable2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: false,
      selectedRow: null,
      listenArray: [0,0,0,0,0,0,0,0,0,0,0,0,0]
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    let dataJson = require('../data.json');
    const columns = [
      {
        title: 'Completed',
        field: 'albumID',
        render: cell => <input
          name="isGoing"
          type="checkbox"
          checked={this.state.isGoing}
          onChange={this.handleInputChange} />
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

export default ArrayTable2;
