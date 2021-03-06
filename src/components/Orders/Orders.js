import React, { Component } from 'react';
import PropTypes from 'prop-types';

import fishShapes from '../../helpers/propz/fishShapes';
import OrderRow from '../OrderRow/OrderRow';


import './Orders.scss';

export default class Orders extends Component {
  static propTypes = {
    order: PropTypes.arrayOf(fishShapes),
    deleteOrder: PropTypes.func.isRequired,
  }

  render() {
    const orderComponents = this.props.orders.map(order => (
      <OrderRow key={order.id} order={order} deleteOrder={this.props.deleteOrder}/>
    ));
    return (
      <div className="Orders">
        <h2>Orders</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Order Name</th>
              <th scope="col">Date</th>
              <th scope="col"># Fish</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {orderComponents}
          </tbody>
        </table>
      </div>
    );
  }
}
