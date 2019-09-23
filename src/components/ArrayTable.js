import React from 'react';
import MaterialTable from 'material-table';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import base from '../base';

const dataJson = require('../data.json');

class ArrayTable extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listened: new Array(500).fill(false),
      size: 5,
    };
  }

  componentDidMount() {
    const { userID } = this.props;
    this.ref = base.syncState(`${userID}/listened`, {
      context: this,
      state: 'listened',
      asArray: true,
      defaultValue: new Array(500).fill(false),
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  ConsoleLog = ({ children }) => {
    // eslint-disable-next-line no-console
    console.log(children);
    return false;
  };

  handleCheckboxToggle = (id) => {
    const { listened } = this.state;
    const userListened = listened;
    userListened[id] = !userListened[id];

    this.setState({
      listened: userListened,
    });
  };

  render() {
    const { listened, size } = this.state;

    const columns = [
      {
        title: 'Completed',
        field: 'listened',
        render: (cell) => (
          <>
            {/* <this.ConsoleLog>{cell}</this.ConsoleLog> */}
            <Checkbox
              checked={listened[cell.albumID - 1]}
              onChange={() => {
                this.handleCheckboxToggle(cell.albumID - 1);
                this.forceUpdate();
              }}
              inputProps={{
                'aria-label': 'primary checkbox',
              }}
            />
          </>
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
        title="R5"
        columns={columns}
        data={dataJson}
        options={{
          pageSize: size,
        }}
        onChangeRowsPerPage={(rowSize) => {
          this.setState({
            size: rowSize,
          });
        }}
        // onRowClick={(evt, rowId) => {
        //   this.setState({ selectedRow: rowId });
        //   console.log(evt);
        // }}
        // options={{
        //   rowStyle: (rowData) => ({
        //     backgroundColor:
        //       selectedRow && selectedRow.tableData.id === rowData.tableData.id
        //         ? '#EEE'
        //         : '#FFF',
        //   }),
        // }}
      />
    );
  }
}

ArrayTable.propTypes = {
  userID: PropTypes.string.isRequired,
};

export default ArrayTable;
