import restaurantSource from '../../data/restaurant-source';
import { restaurantList } from '../templates/template-restaurant';

const listRestaurant = {
  async render() {
    return `
    <h1 class="text-center t-s-xl my-5">
      Explore Restaurant
    </h1>
    <div class="list-item" id="restaurant"></div>
    `;
  },

  async afterRender() {
    const restaurants = await restaurantSource.listRestaurant();
    const restaurantContainer = document.querySelector('#restaurant');
    restaurants.forEach((data) => {
      restaurantContainer.innerHTML += restaurantList(data);
    });
  },
};

export default listRestaurant;
