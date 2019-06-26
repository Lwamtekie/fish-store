import axios from 'axios';
import firebaseConfig from '../apiKeys.json';


const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getFishes = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/fishes.json`)
    .then((res) => {
      const fishes = [];
      Object.keys(res.data).forEach((fbkey) => {
        res.data[fbkey].id = fbkey;
        fishes.push(res.data[fbkey]);
      });
      resolve(fishes);
    })
    .catch(err => reject(err));
});

export default { getFishes };
