import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fishData from '../../helpers/data/fishData';
import orderData from '../../helpers/data/ordersData';

import Inventory from '../Inventory/Inventory';
import NewOrder from '../NewOrder/NewOrder';
import Orders from '../Orders/Orders';

import './Home.scss';

class Home extends React.Component {
 state = {
   orders: [],
   fishes: [],
   fishOrder: {},
 }

 getOrders = () => {
   orderData.getMyOrders(firebase.auth().currentUser.uid)
     .then(orders => this.setState({ orders }))
     .catch(err => console.error('uh-oh, orders', err));
 }

 componentDidMount() {
   fishData.getFishes()
     .then(fishes => this.setState({ fishes }))
     .catch(err => console.error('uh-oh, fishes', err));

   orderData.getMyOrders(firebase.auth().currentUser.uid)
     .then(orders => this.setState({ orders }))
     .catch(err => console.error('uh-oh, orders', err));
 }

deleteOrder = (orderId) => {
  orderData.deleteOrder(orderId)
    .then(() => this.getOrders())
    .catch(err => console.error('uh-oh, fishes', err));
}

addFishToOrder = (fishId) => {
  const fishOrderCopy = { ...this.state.fishOrder };
  fishOrderCopy[fishId] = fishOrderCopy[fishId] + 1 || 1;
  this.setState({ fishOrder: fishOrderCopy });
}

removeFormOrder = (fishId) => {
  const fishOrderCopy = { ...this.state.fishOrder };
  delete fishOrderCopy[fishId];
  this.setState({ fishOrder: fishOrderCopy });
};

saveNewOrder = (orderName) => {
  const newOrder = { fishes: { ...this.state.fishOrder }, name: orderName };
  NewOrder.dateTime = Date.now();
  newOrder.uid = firebase.auth().currentUser.uid;
  console.error('newOrder', newOrder);
  orderData.postOrder(newOrder)
    .then(() => {
      this.setState({ fishOrder: {} });
      this.getOrders();
    })
    .catch(err => console.error('error in post order', err));
};

render() {
  const { fishes, orders, fishOrder } = this.state;
  return (
     <div className="Home">
       <div className="row">
         <div className="col">
           <Inventory fishes={fishes} addFishToOrder= {this.addFishToOrder}/>
         </div>
         <div className="col">
           <NewOrder
            fishes={fishes}
            fishOrder={fishOrder}
            removeFromOrder= {this.removeFormOrder}
            saveNewOrder={this.saveNewOrder}
           />
         </div>
         <div className="col">
               <Orders orders={orders} deleteOrder={this.deleteOrder}/>
             </div>
           </div>
         </div>
  );
}
}

export default Home;
