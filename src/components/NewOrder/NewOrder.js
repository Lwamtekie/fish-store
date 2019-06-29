import React from 'react';

import orderShapes from '../../helpers/propz/orderShapes';

import './NewOrder.scss';

class NewOrder extends React.Component {
  static propTypes = {
    order: orderShapes.orderShape,
  }

  render() {
    return (
      <div className="NewOrder">
        <h1>NewOrder</h1>
      </div>
    );
  }
}

export default NewOrder;
