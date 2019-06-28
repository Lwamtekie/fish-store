import React from 'react';

class OrderRow extends React.Component {
  render() {
    const { order } = this.props;
    return (
      <tr>
        <th>{order.id}</th>
        <th>{order.dateTime}</th>
        <td>5</td>
        <td><button className="btn btn-danger">x</button></td>
      </tr>
    );
  }
}

export default OrderRow;
