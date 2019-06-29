import React from 'react';
import Fish from '../Fish/Fish';
import './Inventory.scss';


class Inventory extends React.Component {
  // state = {
  //   fishes: [],
  // }

  // componentDidMount() {
  //   fishData.getFishes()
  //     .then(fishes => this.setState({ fishes }))
  //     .catch(err => console.error('could not get fishes', err));
  // }

  render() {
    const fishComponent = this.props.fishes.map(fish => (
      <Fish key={fish.id} fish={fish}/>
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
