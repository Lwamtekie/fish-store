import React from 'react';
import PropTypes from 'prop-types';
import Fish from '../Fish/Fish';

import './Inventory.scss';
import fishShape from '../../helpers/propz/fishShapes';


class Inventory extends React.Component {
  static propTypes = {
    fish: fishShape.fishShape,
    addFishToOrder: PropTypes.func.isRequired,
  }


  render() {
    const fishComponent = this.props.fishes.map(fish => (
      <Fish key={fish.id} fish={fish} addFishToOrder={this.props.addFishToOrder}/>
    ));
    return (
      <div className="Inventory">
      <h1>Inventory</h1>
        <ul className="fishes">
          {fishComponent}
        </ul>
        </div>
    );
  }
}

export default Inventory;
