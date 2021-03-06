import {
  Grid, Table, TableHeaderRow
} from '@devexpress/dx-react-grid-material-ui'/* or '@devexpress/dx-react-grid-material-ui' */;

import React, { Component } from 'react';

class Demo extends Component {
  render(){
      return(
      <Grid
        rows={[
          { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
          { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' },
        ]}
        columns={[
          { name: 'id', title: 'ID' },
          { name: 'product', title: 'Product' },
          { name: 'owner', title: 'Owner' },
        ]}>
        <Table />
        <TableHeaderRow />
      </Grid>
      );
    
  }
}

export default Demo;

