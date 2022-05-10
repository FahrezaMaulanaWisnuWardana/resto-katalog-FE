import UrlParser from '../../routes/url-parser';
import restaurantSource from '../../data/restaurant-source';
import FavButtonIdb from '../../data/restaurant-fav';
import { detailRestaurant } from '../templates/template-restaurant';
import FavButton from '../../utils/fav-button';

const detail = {
  async render() {
    return `
        <h1 class="text-center t-s-xl my-5">
        Detail Restaurant
        </h1>
        <div id="detail-restaurant"></div>
        <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await restaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail-restaurant');
    restaurantContainer.innerHTML = detailRestaurant(restaurant.restaurant);

    FavButton.init({
      favButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavButtonIdb,
      resto: {
        id: restaurant.restaurant.id,
        city: restaurant.restaurant.city,
        pictureId: restaurant.restaurant.pictureId,
        name: restaurant.restaurant.name,
        rating: restaurant.restaurant.rating,
        description: restaurant.restaurant.description,
      },
    });
  },
};

export default detail;
