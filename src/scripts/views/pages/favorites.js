import restaurantSource from '../../data/restaurant-fav';
import { likedRestaurantList } from '../templates/template-restaurant';

const listRestaurant = {
  async render() {
    return `
    <h1 class="text-center t-s-xl my-5">
      Favorites Restaurant
    </h1>
    <div id="parent-container">
      <div id="restaurantNull"></div>
      <div class="list-item" id="restaurant"></div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await restaurantSource.getAllResto();
    const restaurantContainer = document.querySelector('#restaurant');
    const restaurantNullContainer = document.querySelector('#restaurantNull');
    if (restaurants.length > 0) {
      restaurants.forEach((data) => {
        restaurantContainer.innerHTML += likedRestaurantList(data);
      });
    } else {
      restaurantNullContainer.innerHTML = '<div class="text-center"><h2>Data Kosong</h2></div>';
    }
  },
};

export default listRestaurant;
