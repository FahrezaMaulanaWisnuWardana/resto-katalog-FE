import FavButton from '../../src/scripts/utils/fav-button';
import FavButtonIdb from '../../src/scripts/data/restaurant-fav';

const createLikeButtonPresenterWithResto = async (resto) => {
  await FavButton.init({
    favButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: FavButtonIdb,
    resto,
  });
};
// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithResto };
